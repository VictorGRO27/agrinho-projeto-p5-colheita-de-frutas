Objetivo do Agrinho: Mostrar como funciona a colheita de frutas de forma divertida e interativa com o usuário;

Objetivo do Jogo: Colher as frutas movimentando a cesta, toda vez que você encostar nas frutas, você pontua, mas se as frutas passarem a linha de chegada você perde;

Instruções:
_Para o emoji de mão funcionar, clique com o botão esquerdo do mouse em cima dele_;

_Aperte "A" para andar para esquerda_;

_Aperte "D" para andar para direita_;

Referências:
YouTube;
ChatGPT:
Prompts Utilizados do chatGPT:
 somPontos = loadSound("sound5.mp3");
  if (keyIsDown(65)) {
    x -= 10;
  }
  if (keyIsDown(68)) {
    x += 10;
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

Som dos pontos: https://creatorassets.com/a/8-bit-coin-sound-effects.

Músicas:

Game Over: Diamond Eyes - Flutter | Future Bass | NCS - Copyright Free Music;

Vitória: Elektronomia - Energy | Progressive House | NCS - Copyright Free Music;

Editor de mp3: https://123apps.com/pt/#google_vignette


