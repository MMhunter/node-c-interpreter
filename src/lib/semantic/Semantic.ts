
export class Scope {

    protected variables: {[key: string]: Variable};

}

export abstract class Variable {

    public name: string;

    public type: Type;
}

export class Object extends Variable{

    public properties: {[key: string]: Variable};
}

export class Primitive extends Variable{

}

export abstract class Type {

}

export class Struct extends Type{

    public name: string;

    public properties: {[key: string]: Type};

}

export class Pointer extends Type{

    public pointsTo: Type;

}

export class PrimitiveType extends Type {

    public name: string;

}

export const BasicTypes = {
    "Integer": new PrimitiveType(),
    "Char": new PrimitiveType(),
    "Float": new PrimitiveType(),
};
