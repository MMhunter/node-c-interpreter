
/*
*  欢迎使用豌豆拼!
*/

int init_a=0;
int XY_x=0,XY_y=0;
int dis_x=5,dis_y=1;

void setup()
{
    Display0.enablePageturning();/*开启翻页功能；*/
    Display0.print(1, 1, "Initializing",SIZE_SMALL , SHOW_NORMAL);/*高级显示(行，列，显示内容：数字／变量／"字符串"，字体大小：小字／大字，模式：黑底白字／白底黑字)*/
    Display0.print(2, 1, "Please waiting...",SIZE_SMALL , SHOW_NORMAL);/*高级显示(行，列，显示内容：数字／变量／"字符串"，字体大小：小字／大字，模式：黑底白字／白底黑字)*/
    Motion0.calibrateGyroAccelerometer();/*校正加速度计；函数运行时模块亮黄色灯，这时需保持水平且静止。校正过程持续3秒。*/
    Display0.clearAllPages();
    Display0.print(1, 1, "press any key",SIZE_SMALL , SHOW_NORMAL);/*高级显示(行，列，显示内容：数字／变量／"字符串"，字体大小：小字／大字，模式：黑底白字／白底黑字)*/
    Display0.print(2, 1, "to continue.",SIZE_SMALL , SHOW_NORMAL);/*高级显示(行，列，显示内容：数字／变量／"字符串"，字体大小：小字／大字，模式：黑底白字／白底黑字)*/
    while(Display0.getPageButton() == BUTTON_NONE);//按键按下程序继续
    Display0.clearAllPages();
    Display0.print(1, 5, "3",SIZE_BIG , SHOW_NORMAL);
    delay(800);
    Display0.clearAllPages();
    Display0.print(1, 5, "2",SIZE_BIG , SHOW_NORMAL);
    delay(800);
    Display0.clearAllPages();
    Display0.print(1, 5, "1",SIZE_BIG , SHOW_NORMAL);
    delay(800);
    Display0.clearAllPages();
    init_a = 1;//初始化标志位置位
}


void loop()
{
// if(XY_x == 0) dis_x++;
// if(XY_x == 1) dis_x--;
// if(XY_y == 0) dis_y=1;
// if(XY_y == 1) dis_y=2;

// if(dis_x<1) dis_x=1;
// if(dis_x>15)dis_x=15;

//     Display0.clearAllPages();
//     Display0.print(dis_y, dis_x, "#",SIZE_SMALL , SHOW_NORMAL);
//     delay(100);
}


// INTERRUPTER Motion0_Data_Update(void)
// {
//     if(Motion0.getAngle(SPACE_X)>9)         XY_x = 0; //右
//     else if(Motion0.getAngle(SPACE_X)<-9)   XY_x = 1; //左
//     else                                    XY_x = -1;//无操作
//     if(Motion0.getAngle(SPACE_Y)>9)         XY_y = 0; //下
//     else if(Motion0.getAngle(SPACE_Y)<-9)   XY_y = 1; //上
//     else                                    XY_y = -1;//无操作
// }
//右x>0,左x<0;
//上y<0,下y>0;


unsigned int value_1 = 0;         //随机数2
unsigned int value_2 = 0;         //随机数2
unsigned int value_3 = 0;         //随机数2
unsigned int value_4 = 0;         //随机数2
#define MAX_1     4               //随机数最大值
#define MIN_1     3               //随机数最小值
#define MAX_2     16              //随机数最大值
#define MIN_2     1               //随机数最小值

TIME(setCycle(1.5))
{
  value_1 = rand() % (MAX_2 + 1 - MIN_2) + MIN_2;               //获取四个随机数
  value_2 = rand() % (MAX_2 + 1 - MIN_2) + MIN_2;
  value_3 = rand() % (MAX_2 + 1 - MIN_2) + MIN_2;
  value_4 = rand() % (MAX_2 + 1 - MIN_2) + MIN_2;
  while(((value_1==value_2)&&(value_1==value_3)&&(value_1==value_4)) || ( ((value_1==value_2)&&(value_1==value_3)) || ((value_1==value_2)&&(value_1==value_4)) || ((value_2==value_3)&&(value_2==value_4)) ) )
  {
    value_1 = rand() % (MAX_2 + 1 - MIN_2) + MIN_2;
    value_2 = rand() % (MAX_2 + 1 - MIN_2) + MIN_2;
    value_3 = rand() % (MAX_2 + 1 - MIN_2) + MIN_2;
    value_4 = rand() % (MAX_2 + 1 - MIN_2) + MIN_2;
  }
  if(init_a == 1)//初始化后执行
  {
        // Display0.clearAllPages();
        // Display0.print(1, 1, "#",SIZE_SMALL , SHOW_NORMAL);
         delay(100);
  }
}




