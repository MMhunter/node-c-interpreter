/*
  这里是注释
  */
void loop() {

  Master0.setOnboardRGB(RGB_R);
  delay(500);
  Master0.setOnboardRGB(RGB_G);
  delay(500);
  Master0.setOnboardRGB(RGB_B);
  delay(500);
  int i = 1;

  //返回空气温度，单位摄氏度
  Obse.getTemperature(1.02f);


}
