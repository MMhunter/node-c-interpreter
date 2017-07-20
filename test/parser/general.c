
/*
*  欢迎使用豌豆拼!
*/


char Com = 0;
void loop() {





}





/*数据更新触发，执行大括号中内容*/
void Motion1_Data_Update(void){


int x = (int)Motion1.getAngle(SPACE_Z);//map((int)Motion1.getAngle(SPACE_X), -90, 90, -390, 390);
int y = (int)Motion1.getAngle(SPACE_Y);//map((int)Motion1.getAngle(SPACE_Y), -90, 90, -290, 290);


static int mouseX = 0, mouseY =, 0;

    x = constrain(x, -85, 85);/*约束(数据，下限，上限)；将一个数约束在一个范围内*/
    y = constrain(y, -85, 85);/*约束(数据，下限，上限)；将一个数约束在一个范围内*/

    x = map(x , -85, 85, -390, 390);
    y = map(y ,-85, 85, -290, 290);

    sysmaster.serial.println(x);/*串口打印（内容：数字／变量／"字符串"）；显示完内容后自动换行*/

    if(abs(mouseY - y ) > 15 )
    {
        // sysmaster.mouse.press(MOUSE_MIDDLE);/*鼠标按下按键（键值）；鼠标按下左键，右键键值MOUSE_RIGHT*/
        if(mouseY > y) //参考点在右边
        {
             sysmaster.mouse.move(0, -2);/*鼠标移动（横向距离，纵向距离）；横向正数向右负数向左，纵向正数向上负数向下*/
             mouseY-=2;
        }
        else
        {

        }
    //  sysmaster.mouse.release(MOUSE_MIDDLE);/*鼠标松开按键（键值）；鼠标松开左键，右键键值MOUSE_RIGHT*/
    }






}

///*当串口未读取数据数量大于0时，执行大括号中内容*/
//void ( sysmaster.serial.available() > 0 )
//{
//Com = sysmaster.serial.read();
//
//    if(Com == 'C')
//    {
//        Motion1.calibrateGyroAccelerometer();/*校正加速度计；函数运行时模块亮黄色灯，这时需保持水平且静止。校正过程持续3秒。*/
//        Com = 0;
//    }
//    sysmaster.mouse.press(MOUSE_LEFT);/*鼠标按下按键（键值）；鼠标按下左键，右键键值MOUSE_RIGHT*/
//
//
//
//}


