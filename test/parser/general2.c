
struct Dot{
    int x;
    int y;
};

enum SHAPE_TYPE
{
      SQUARE=0
};

enum DIRECTION {
    DIR_LEFT = 0,
    DIR_RIGHT = 1,
    DIR_UP = 2,
    DIR_DOWN = 3
};

struct Shape{
    Dot dots[4];
    SHAPE_TYPE type;
};


int shape_dots[][4][2] = {
    {
        {0,0},{0,1},{1,1},{1,0}
    }
};

Shape currentShape;

void drawPixel(int x, int y){
    int width = 4;
    int height = 4;
    for(int i = 0; i< width; i++){
        for(int j = 0; j < height; j++){
            Display1.dot(x+i+1, y+j+1, 1);/*画点（x轴坐标：1~120；y轴坐标：1~32；页数:1~8），不清除已显示内容*/
        }
    };

}

void drawNext(){
    Display1.clearPage(1);/*擦除某个页面（页数）；*/
    drawShape(currentShape);
    for(int i = 0; i < 32 ; i++){
        drawPixel(115,i);
        drawPixel(111,i);
        drawPixel(107,i);
        drawPixel(103,i);
    }
}

void setup()
{
    currentShape = createShape(SQUARE);
    Display1.disablePageturning();/*关闭翻页功能；*/

}
void loop() {
    moveShape(&currentShape,DIR_DOWN);
    drawNext();
    delay(1000);
}

Shape createShape(SHAPE_TYPE type){
    Shape shape = { {0} };
    for(int i = 0; i < 4; i++){
        shape.dots[i] = createDot( shape_dots[type][i][0], shape_dots[type][i][1]);
    }
    return shape;
}

Dot createDot(int x, int y){
    Dot dot = {x,y};
    return dot;
}

void drawDot(Dot dot){
    drawPixel(dot.x*4,dot.y*4);
}


void drawShape(Shape shape){
    for(int i = 0 ; i < 4; i ++){
        drawDot(shape.dots[i]);
        sysmaster.serial.print(shape.dots[i].x);
        sysmaster.serial.print("\t");
        sysmaster.serial.println(shape.dots[i].y);
    }


void moveShape(Shape *shape, DIRECTION direction){
    switch (direction) {
        case DIR_LEFT:
            for(int i = 0 ; i < 4; i ++){
                if(shape->dots[i].y < 32/4 -1 ) {
                    shape->dots[i].y++;
                }
            }
            break;
        case DIR_RIGHT:
            for(int i = 0 ; i < 4; i ++){
                if(shape->dots[i].y > 0 ) {
                    shape->dots[i].y--;
                }
            }
            break;
        case DIR_DOWN:
            for(int i = 0 ; i < 4; i ++){
                if(shape->dots[i].x < 120/4-1 ) {
                    shape->dots[i].x++
                }
            }
            break;
        case DIR_UP:
            for(int i = 0 ; i < 4; i ++){
                if(shape->dots[i].x > 0 ) {
                    shape->dots[i].x--;
                }
            }
            break;
    }
}


