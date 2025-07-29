//Variáveis

let maça = "🍎";
let uva = "🍇";
let abacaxi = "🍍";
let melancia = "🍉";
let limao = "🍋";
let mao = "🤲";
let x = 394;
let y = 721;
let x1 = 50;
let y1 = -25;
let x2 = 200;
let y2 = -25;
let x3 = 350;
let y3 = -25;
let x4 = 500;
let y4 = -25;
let x5 = 650;
let y5 = -25;
let veloc = 2.5;
let pontos = 0;
let somPontos;
let gameOver;
let vitoria;


function preload() {
  //músicas do jogo
  somPontos = loadSound("sound5.mp3");
  gameOver = loadSound("GameOver.mp3");
  vitoria = loadSound("principal.mp3")
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  gameplay();
  movimento();
}  
function gameplay() {
  //tela de inicio
  if(focused == false){
  background("rgb(255,119,0)")
  fill("rgb(247,247,110)")
  stroke("rgb(129,87,13)")
  strokeWeight(4);
  textFont("Arial Black");
  textSize(20);
  text("Colheita de Frutas",270,50);
  textSize(15)
  text("O objetivo do Jogo é coletar as frutas sem deixar elas passarem da linha de chegada;", 30,100)
  text("Para ativar o jogo, clique na tela com o botão esquerdo do mouse;",30,160)
  text("Aperte A para movimentar a mão para esquerda;",30,220)
  text("Aperte D para movimentar a mão para direita;",30,280)
  text("Faça 25 pontos para vencer;",30,340)
  text("Boa Sorte!",30,400)
  }
  else{
  //tela do jogo ativado
  background("lightgreen");
  fill("rgb(158,231,255)");
  stroke("rgb(36,36,83)");
  strokeWeight(4);
  textFont("Arial Black");
  textSize(20);
  text("Pontuação:" + pontos, 20, 20);
  //desenha linha de chegada
  strokeWeight(1);
  stroke("black");
  fill("white");
  rect(0, 720, 800, 10);
  fill("black");
  rect(40, 720, 10, 10);
  rect(90, 720, 10, 10);
  rect(140, 720, 10, 10);
  rect(190, 720, 10, 10);
  rect(240, 720, 10, 10);
  rect(290, 720, 10, 10);
  rect(340, 720, 10, 10);
  rect(390, 720, 10, 10);
  rect(440, 720, 10, 10);
  rect(490, 720, 10, 10);
  rect(540, 720, 10, 10);
  rect(590, 720, 10, 10);
  rect(640, 720, 10, 10);
  rect(690, 720, 10, 10);
  rect(740, 720, 10, 10);
  //desenha frutas
  textSize(40);
  text(maça, x1, y1);
  text(uva, x2, y2);
  text(abacaxi, x3, y3);
  text(melancia, x4, y4);
  text(limao, x5, y5);
  text(mao, x, y)
  }
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
//funcionamento das teclas para movimentar a mão e o movimento das frutas
function movimento() {
  if (keyIsDown(65)) {
    x -= 10;
  }
  if (keyIsDown(68)) {
    x += 10;
  }
  y1 += random(veloc);
  if (y1 > 80) {
    y2 += random(veloc);
  }
  if (y2 > 80) {
    y3 += random(veloc);
  }
  if (y3 > 80) {
    y4 += random(veloc);
  }
  if (y4 > 80) {
    y5 += random(veloc);
  }
  //mudar para tela de game over caso alguma fruta passe da linha de chegada e tocar música de game over
if (y1 > 745) {
  gameOver.play();
  background("rgb(68,7,7)")
   fill("white")
  strokeWeight(4)
  stroke("black")
  textFont("Arial Black")
  textSize(40)
  text("Game Over",280,400)
    noLoop();
  }
  if (y2 > 745) {
    gameOver.play();
  background("rgb(68,7,7)")
     fill("white")
     strokeWeight(4)
  stroke("black")
  textFont("Arial Black")
  textSize(40)
  text("Game Over",280,400)
    noLoop();
  }
  if (y3 > 745) {
    gameOver.play();
   background("rgb(68,7,7)")
     fill("white")
     strokeWeight(4)
  stroke("black")
  textFont("Arial Black")
  textSize(40)
  text("Game Over",280,400)
    noLoop();
  }
  if (y4 > 745) {
    gameOver.play();
   background("rgb(68,7,7)")
     fill("white")
     strokeWeight(4)
  stroke("black")
  textFont("Arial Black")
  textSize(40)
  text("Game Over",280,400)
    noLoop();
  }
  if (y5 > 745) {
    gameOver.play();
   background("rgb(68,7,7)")
     fill("white")
     strokeWeight(4)
  stroke("black")
  textFont("Arial Black")
  textSize(40)
  text("Game Over",280,400)
    noLoop();
 
  }
  // aumentar pontução,tocar som dos pontos e adicionar mais uma fruta
  if (dist(x, y, x1, y1) < 40) {
    somPontos.play();
    pontos++;
    y1 = -25;
  }

  if (dist(x, y, x2, y2) < 40) {
    somPontos.play();
    pontos++;
    y2 = -25;
  }

  if (dist(x, y, x3, y3) < 40) {
    somPontos.play();
    pontos++;
    y3 = -25;
  }

  if (dist(x, y, x4, y4) < 40) {
    somPontos.play();
    pontos++;
    y4 = -25;
  }

  if (dist(x, y, x5, y5) < 40) {
    somPontos.play();
    pontos++;
    y5 = -25;
  }
  //caso tenha 30 pontos, mudar para a tela de vitória e tocar música da vitória
  if(pontos == 25){
    background("rgb(64,187,250)");
    fill("white");
     strokeWeight(4)
  stroke("black");
  textFont("Arial Black");
  textSize(40);
  text("Vitória",320,400);
    vitoria.play();
  noLoop();
  }
   
}
