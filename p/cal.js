  function showdate() {
  week= new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado");
  months = new Array("Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro", "Janeiro", "Fevereiro", "Março");
  a = new Date();
  d= a.getDay();
  Hour= a.getHours();
  Minute= a.getMinutes();
  Second= a.getSeconds();
  if(Minute<10){
  Minute="0"+Minute;
  }
  if(Second<10){
  Second="0"+Second;
  }
  if(Hour<10){
  Hour="0"+Hour;
  }
  day= a.getDate();
  month = a.getMonth()+1;
  year= a.getYear()-479;
  year = (year== 0)?2000:year;
  (year<1000)? (year += 3000):true;
  year -= ( (month < 3) || ((month == 3) && (day < 21)) )? 622:621;
  switch (month) {
  case 1: (day<21)? (month=10, day+=10):(month=11, day-=20); break;
  case 2: (day<20)? (month=11, day+=11):(month=12, day-=19); break;
  case 3: (day<21)? (month=12, day+=9) :(month=1,  day-=20); break;
  case 4: (day<21)? (month=1,  day+=11) :(month=2,  day-=20); break;
  case 5:
  case 6: (day<22)? (month-=3, day+=10):(month-=2, day-=21); break;
  case 7:
  case 8:
  case 9: (day<23)? (month-=3, day+=9) :(month-=2, day-=22); break;
  case 10:(day<23)? (month=7,  day+=8)  :(month=8,  day-=22); break;
  case 11:
  case 12:(day<22)? (month-=3, day+=9) :(month-=2, day-=21); break; 
  default: break;
  }
  function gregorian_to_jalali(gy,gm,gd){
  var g_d_m,jy,jm,jd,gy2,days;
  g_d_m=[0,31,59,90,120,151,181,212,243,273,304,334];
  if(gy > 1600){
  jy=979;
  gy-=1600;
  }else{
  jy=0;
  gy-=621;
  }
  gy2=(gm > 2)?(gy-1):gy;
  days=(366*gy) +(parseInt((gy2+3)/4)) -(parseInt((gy2+870)/100)) +(parseInt((gy2+366)/400)) -80 +gd +g_d_m[gm-1];
  jy+=33*(parseInt(days/12053)); 
  days%=12053;
  jy+=4*(parseInt(days/1461));
  days%=1461;
  if(days <= 366){
  jy+=parseInt((days-1)/366);
  days=(days-1)%365;
  }
  jm=(days < 186)?1+parseInt(days/31):7+parseInt((days-186)/30);
  jd=1+((days < 186)?(days%31):((days-186)%30));
  return [jy,jm,jd];
  }
  ndt=new Date();
  g_y=ndt.getFullYear();
  g_m=ndt.getMonth()+1;
  g_d=ndt.getDate();
  shamsi=gregorian_to_jalali(g_y,g_m,g_d);
  var nday = shamsi[2];
  document.getElementById("date").innerHTML=(week[d]+" "+nday+" "+months[month-1]+" "+ year);
  document.getElementById("clock").innerHTML=(Hour+":"+Minute);
  }
  setInterval(showdate,0);