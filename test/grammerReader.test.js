/**
 * @file grammerReader.test.js.js
 *
 * TODO: 写下这个文件是做什么的
 *
 * Created by mmhunter on 30/06/2017.
 */
let fs = require("fs");

let path = require("path");

let grammarstring = fs.readFileSync(path.join(__dirname,"./c-grammar.txt"),"utf8");

let lines = grammarstring.split("\n");

let productions = {};

let currentProduction = null;

let leftRecursives = {};

lines.forEach(function(line){


    if(line.trim().indexOf("%") === 0) return;
    if(line.trim() === '' || line.trim() === ';'){
        currentProduction = null;
        return;
    }
    if(line.trim().indexOf(":") !== 0 && line.trim().indexOf("|") !== 0){
        currentProduction = line.trim();
        productions[currentProduction] = [];
        return;
    }

    let production = line.trim().substr(2).replace(/\s{2,}/g," ").split(" ").map(s=>s.replace(/'(.*?)'/g,'$1'));
    productions[currentProduction].push(production);

});

let terminals = [];

for(var key in productions){
    productions[key].forEach(prod=>{
        prod.forEach((p,i)=>{
            if(productions.hasOwnProperty(p)){
                prod[i] = "<"+p+">";
            }
            else{
                if(terminals.indexOf(p) == -1){
                    terminals.push(p);
                }

            }
        })
    })
}

for(var key in productions){
    let route = [];
    let keyroute = [];
    keyroute.push(key);
    checkLeftRecursion(key,productions[key],route,keyroute,true);
}



function checkLeftRecursion(key,prods,route,keyroute,shouldMark){

    prods.forEach(prod=>{
        let first = prod[0];
        let r= route.slice();
        r.push({key:key,prod:prod});
        if(first === "<"+key+">"){
            //console.log(r.join("->"));
            if(shouldMark) markLeftRecursive(r);
            else console.log(key,prod.join(" "));
        }
        else if(keyroute.indexOf(first.substr(1))!==-1){

        }
        else if(first.indexOf("@") === 0){
            keyroute.push(first.substr(1));
            checkLeftRecursion(key,productions[first.substr(1)],r,keyroute);
        }
    });
    keyroute.pop();
}



function markLeftRecursive(r){
    if(!leftRecursives[r[0].key]){
        leftRecursives[r[0].key] = [];
    }
    leftRecursives[r[0].key].push(r[0].prod);
}

for(let key in leftRecursives){
    fixLeftRecursive(key);
}

function fixLeftRecursive(key){

    let noneRecursives = [];

    for(let i = 0;i<productions[key].length; i++){
        if(leftRecursives[key].indexOf(productions[key][i]) === -1){
            noneRecursives.push(productions[key][i]);
            break;
        }
    }
    //console.log(noneRecursives);

    let newKey = key+"_tail";
    productions[newKey] =[];

    leftRecursives[key].forEach(prod=>{
        productions[key] = noneRecursives.map(n=>n.concat(["<"+newKey+">"]));
        productions[newKey].push(prod.slice(1).concat(["<"+newKey+">"]));
    });
    productions[newKey].push(["<empty>"])

}

for(let key in productions){
    let route = [];
    let keyroute = [];
    keyroute.push(key);
    checkLeftRecursion(key,productions[key],route,keyroute,false);

}

//console.log(productions);

let template = fs.readFileSync(path.join(__dirname,"template.ts"),"utf8");

function camelCasedd(myString) {
    let s = myString.replace(/_([a-z])/g, function (g) { return g[1].toUpperCase(); });
    s = s[0].toUpperCase() + s.substr(1);
    return s;
}



let firstSets = {};

for(let key in productions){
    findFirstSet(key);
}

function findFirstSet(key){
    if(!firstSets[key]){
        let firstSet = [];
        console.log(key);
        let allowEmpty = false;
        productions[key].forEach(prod=>{
            let first = prod[0];
            if(first === "<empty>"){
                allowEmpty = true;
            }
            else if(first.indexOf("<") === 0 && first.indexOf(">") !== -1){
                let f = findFirstSet(first.substr(1,first.length-2));
                if(f === -1){
                    if(prod.length === 1){
                        allowEmpty = true;
                    }
                    else{

                    }
                }
                else {
                    f.forEach(s=>{
                        if(firstSet.indexOf(s) === -1){
                            firstSet.push(s);
                        }
                    });
                }
            }
            else{
                if(firstSet.indexOf(first) === -1){
                    firstSet.push(first);
                }

            }
        });
        if(allowEmpty){
            firstSets[key] = -1;
        }
        else firstSets[key] = firstSet;
    }
    return firstSets[key];
}

// console.log(firstSets);

for(let key in productions){
    let rules = [key];
    let returns = [];
    productions[key].forEach(prod=>{
        rules.push("    "+prod.join(" "));
        let rs = prod.map(p=>{
            if(p.indexOf("<") === 0 && p.indexOf(">") !== -1){
                return "new "+camelCasedd(p.substr(1,p.length-2))+"()";
            }
            else  if(/^[A-Z]/.test(p)){
                return `TokenType.${p}`;
            }
            else {
                return `"${p}"`
            }
        }).join(", ");
        if(prod[0] === '<empty>'){
            rs = "";
        }
        let returnCode = `check_rules([${rs}], tokenStream, this)`;
        returns.push(returnCode);
    });
    let rulesString = rules.join("\n * ");

    let camelCased = camelCasedd(key);
    let code = template.replace("${NAME}",key).replace("${CAMEL_NAME}",camelCasedd(key));
    let firstSetString;
    if(firstSets[key] === -1){
        firstSetString = "null";
    }
    else firstSetString = "["+ firstSets[key].map(f=>{
        if(/^[A-Z]/.test(f)){
            return `TokenType.${f}`;
        }
        else{
            return `"${f}"`;
        }
    }).join(", ")+"]";
    code = code. replace("${firstSet}",firstSetString).replace("${rule}",rulesString).replace("${RETURN}", returns.join(" || ") );





    fs.writeFile(path.join(__dirname,`./rules/${camelCased}.ts`),code,'utf8');
}