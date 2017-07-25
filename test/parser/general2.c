struct Dot{
    int x;
    int y;
};

Dot createDot(int x, int y){
    Dot dot = {0,0};
}

enum SHAPE_TYPE
{
      SQUARE=0
};

struct Shape{
    Dot dots[4];
    SHAPE_TYPE type;
};