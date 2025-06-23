Nesse jogo o objetivo é colher as frutas movimentando a cesta, toda vez que você encostar nas frutas, você pontua, mas se as frutas passarem a linha de chegada você perde.
Instruções:
_Para o emoji de mão funcionar, clique com o botão esquerdo do mouse em cima dele_;
_Aperte "A" para andar para esquerda_;
_Aperte "D" para andar para direita_;
Referências:
ChatGPT;
https://creatorassets.com/a/8-bit-coin-sound-effects.
Prompts Utilizados do chatGPT:
 somPontos = loadSound("sound5.mp3");
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
