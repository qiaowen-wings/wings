let Xtimes = 5;
let Ytimes = 5;
let nb;
let nb2;
let nb3;
let nbarray = [];
let detailX;
let button;

function setup() {



  createCanvas(930, 500, WEBGL);

  button = createButton('規則看這裡');
  button.position(10, 505);
  button.mousePressed(changeBG);

  colorMode(HSB);
  slider = createSlider(0, 360, 60, 40);
  slider.position(465, 500);

  for (let i = 0; i < 10; i += 1) {
    noStroke();
    //怎麼把東西放到 nbarray 袋子裡的公式
    nbarray.push(new mybox(50, -height / 2 + (height / 5) * i, 0, 50));
  }

}

function draw() {
  

  let val = slider.value();
  background(val, 100, 100, 1); //背景顏色



  nbarray.forEach((v) => {
    v.display();
  })
}

function changeBG() {
  let val = random(255);
  window.alert('按右鍵改變尺寸');
  window.alert('按中鍵改顏色');
  window.alert('顏色小於50(接近白色)會變圓型');
  window.alert('顏色大於50(接近黑色)會變方型');
  window.alert('底下可以調整背景顏色');
  window.alert('按下空白鍵重整');

  background(val);
}

//自訂一個類別的物件

class mybox {
  //怎樣建構這個物件 只執行一次
  constructor(x, y, z, size, color, su) {

    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.su = su;
    this.mx = 1;
    this.color = 50;

  }
  //定義一些能力 我們呼叫時 執行
  //能力1:顯現這個box


  display() {


    push();

    fill(this.color);

    translate(this.x, this.y, this.z);
    this.mo();

    if (

      mouseX - width / 2 > this.x - this.size / 2 &&
      mouseX - width / 2 < this.x + this.size / 2 &&
      mouseY - height / 2 > this.y - this.size / 2 &&
      mouseY - height / 2 < this.y + this.size / 2) {

      rotateX(frameCount * 0.03);
      rotateY(frameCount * 0.03);
      this.mx = this.mx + 0.1;


      if (mouseButton == CENTER) {
        this.color = this.color + 5
      }

      this.color = this.color - 2




      if (mouseButton == LEFT && this.size <= 100) {

        this.size = this.size + 2
      } else {
        this.size = this.size - 1
      }

    }

    box(this.size);
    
    this.tt();


    pop();

    this.move();
  }
  //移動規則
  move() {

    if (this.x > width / 2) {
      this.mx = -1 * this.mx;
    }

    if (this.x < -width / 2) {
      this.mx = -1 * this.mx;
    }

    this.x = this.x + this.mx;


  }

  mo() {

    if (this.color >= 50) {

      sphere(this.size);

      rotateX(frameCount * 0.03);
      rotateY(frameCount * 0.03);

    }
  }

  tt() {
    if (key == ' ') {
      setInterval(1000);
    }

  }

}

/*text('玩法');
text('按中鍵改顏色，顏色');
text('按右鍵改變尺寸');
text('顏色小於50(接近白色)會變圓型');
text('顏色大於50(接近黑色)會變方型');
text('顏色大於50(接近黑色)會變方型');
text('底下可以調整背景顏色');
text('按下空白鍵重整');*/