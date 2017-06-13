/*=========================================================*/
/*=================== CLOCK PROGRAM ====================== */
/*============= NIKHIL RANJAN (niklabh) ===================*/
/*=========================================================*/
/*==================RELEASE NOTES==========================*/
/*  To change clock position,size and speed only change const
    values.Inner integer values should be edited with caution.
    It is wise to keep backup before editing.For queries and
    help contact me:
    mail :niklabh811@gmail.com
    phone: 8527445570
*/
/*=========================================================*/


const X = 300.0 //X CENTER OF CLOCK
const Y = 200.0 //Y CENTER OF CLOCK
const S = 100.0 //SIZE OF CLOCK

const RED = '#FF0000';
const GREEN = '#00FF00';
const BLUE = '#00FFFF';
const YELLOW = '#FFFF00';
const BLACK = '#000000';
const WHITE = '#FFFFFF';

let xm, ym, xh, yh;
let s, m, h, mh, hh, tm_hour, tm_min;

let canvas = document.getElementById('canvas'); 
let ctx = canvas.getContext('2d');

window.requestAnimationFrame(step);

function step() {
    clear();

    calc();

    text();
    
    sec_hand(s);

    min_hand(m);

    hour_hand(h);

    window.requestAnimationFrame(step);
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function circle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2*Math.PI);
  ctx.stroke();
}

function setcolor(color) {
  ctx.strokeStyle = color;
}

function outtextxy(x, y, text) {
  ctx.font = "15px Arial";
  ctx.fillText(text, x, y);
}

function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function calc() {
  let x, y;
  let ch;

  //to draw the circles and numbers
  setcolor(RED);
  circle(X, Y, S + 5);
  setcolor(GREEN);
  circle(X, Y, S + 50);
  circle(X, Y, S + 60);
  circle(X, Y, S + 55);

  let th, pi = 22.0 / 7.0, deg;
  for (let i1 = 0; i1 < 12; i1++) {
    deg = (i1 * 30.0) - 90.0;
    th = (pi * (deg / 180.0));
    x = Math.floor((X) + (S + 30) * Math.cos(th));
    y = Math.floor((Y) + (S + 30) * Math.sin(th));
    switch (i1) {
      case 0:
        ch = "12";
        break;
      case 1:
        ch = "1";
        break;
      case 2:
        ch = "2";
        break;
      case 3:
        ch = "3";
        break;
      case 4:
        ch = "4";
        break;
      case 5:
        ch = "5";
        break;
      case 6:
        ch = "6";
        break;
      case 7:
        ch = "7";
        break;
      case 8:
        ch = "8";
        break;
      case 9:
        ch = "9";
        break;
      case 10:
        ch = "10";
        break;
      case 11:
        ch = "11";
        break;
    }
    outtextxy(x, y, ch);
  }

  let time = new Date();

  s = time.getSeconds(); //time is initialised with system time
  m = time.getMinutes();
  tm_hour = time.getHours();
  tm_min = time.getMinutes();

  if (tm_hour > 12)
    hh = tm_hour - 12;
  else
    hh = tm_hour;

  h = hh * 5;

  if (tm_min < 12) {
    mh = tm_min;
  } else if (tm_min > 12 && tm_min <= 24) {
    mh = tm_min - 12;
    h = h + 1;
  } else if (tm_min > 24 && tm_min <= 36) {
    mh = tm_min - 24;
    h = h + 2;
  } else if (tm_min > 36 && tm_min <= 48) {
    mh = tm_min - 36;
    h = h + 3;
  } else if (tm_min > 48) {
    mh = tm_min - 48;
    h = h + 4;
  }
}

function text() {
  outtextxy(X - 70, 20, new Date().toLocaleString());
}


function sec_hand(i) {
  let x, y;
  let th, pi = 22.0 / 7.0, deg;
  deg = (i * 6.0) - 90.0;
  th = (pi * (deg / 180.0));
  x = Math.floor(X + (S - 10) * Math.cos(th));
  y = Math.floor(Y + (S - 10) * Math.sin(th));
  setcolor(BLUE);
  line(X, Y, x, y);
}

function min_hand(j) { //drawing the hands
  let deg1, th1, pi;
  let x1, y1, x, y;
  pi = 22.0 / 7.0;
  deg1 = (j * 6.0) - 90.0;
  th1 = (pi * (deg1 / 180.0));
  x1 = Math.floor(X + (S - 20) * Math.cos(th1));
  y1 = Math.floor(Y + (S - 20) * Math.sin(th1));
  xm = x1;
  ym = y1;
  setcolor(RED);
  line(X, Y, x1, y1);
}

function hour_hand(j) {
  let deg1, th1, pi;
  let x1, y1;
  pi = 22.0 / 7.0;
  deg1 = (j * 6.0) - 90.0;
  th1 = (pi * (deg1 / 180.0));
  x1 = Math.floor(X + (S - 30) * Math.cos(th1));
  y1 = Math.floor(Y + (S - 30) * Math.sin(th1));
  xh = x1;
  yh = y1;
  setcolor(GREEN);
  line(X, Y, x1, y1);
}
