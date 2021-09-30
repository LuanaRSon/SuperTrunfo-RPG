const cartas = [
  {
    nome: "Mago",
    img:
      "https://consciencianerd.com/wp-content/uploads/2020/02/As-magias-mais-poderosas-Dungeons-and-Dragons-Mago.jpg",
    atributos: {
      ataque: 12,
      magia: 40,
      defesa: 20,
      cura: 18,
      destreza: 8
    }
  },
  {
    nome: "Guerreira",
    img:
      "https://b4i2t3k3.rocketcdn.me/wp-content/uploads/2018/09/2660-The-Witcher-3-Epee-de-Ciri-Sword-Zireael.jpg",
    atributos: {
      ataque: 45,
      magia: 10,
      defesa: 38,
      cura: 8,
      destreza: 12
    }
  },
  {
    nome: "Sacerdote",
    img:
      "https://i.pinimg.com/originals/27/b6/63/27b66378a0155e35c99b7c3774add18f.jpg",
    atributos: {
      ataque: 10,
      magia: 35,
      defesa: 22,
      cura: 40,
      destreza: 8
    }
  },
  {
    nome: "Arqueira",
    img: "https://images.alphacoders.com/301/301061.jpg",
    atributos: {
      ataque: 38,
      magia: 16,
      defesa: 28,
      cura: 10,
      destreza: 30
    }
  },
  {
    nome: "Assassina",
    img:
      "https://1.bp.blogspot.com/-SnUnSzb0xbI/W-OLxuy9t4I/AAAAAAAADhw/fuXRqNQnEmUp7vZ2-7n-HdjIxCHueGglwCLcBGAs/w1200-h630-p-k-no-nu/assassino-help-RPG.jpg",
    atributos: {
      ataque: 42,
      magia: 5,
      defesa: 24,
      cura: 8,
      destreza: 40
    }
  },
  {
    nome: "Dragão",
    img:
      "https://1.bp.blogspot.com/-tUSCXG_R1_4/X6H8F9TcryI/AAAAAAAAOCE/unh-cR6KmnE1nwu8TYHJoa7bhGvScI7cwCLcBGAsYHQ/s1000/Drag%25C3%25A3o%2BD%2526D%2B3.5%2B-%2BHelp%2BRPG.jpg",
    atributos: {
      ataque: 45,
      magia: 38,
      defesa: 40,
      cura: 5,
      destreza: 10
    }
  },
  {
    nome: "Lich",
    img:
      "http://pm1.narvii.com/6455/44dee3cbb0f5e0bd742a163711c900b2bfc86f73_00.jpg",
    atributos: {
      ataque: 13,
      magia: 40,
      defesa: 25,
      cura: 15,
      destreza: 8
    }
  },
  {
    nome: "Gunner",
    img: "https://s1.1zoom.me/big3/473/345327-blackangel.jpg",
    atributos: {
      ataque: 42,
      magia: 8,
      defesa: 25,
      cura: 5,
      destreza: 30
    }
  },
  {
    nome: "Orc",
    img:
      "http://1.bp.blogspot.com/-C1m109chdnA/T-xgyzIj7-I/AAAAAAAACTY/IBHd2qVd5gI/s1600/orc+death+knight.jpg",
    atributos: {
      ataque: 40,
      magia: 5,
      defesa: 29,
      cura: 3,
      destreza: 20
    }
  },
  {
    nome: "Vampiro",
    img: "https://img.quizur.com/f/img5e54005e1edb88.24964536.jpg",
    atributos: {
      ataque: 18,
      magia: 31,
      defesa: 23,
      cura: 20,
      destreza: 30
    }
  },
  {
    nome: "Bardo",
    img:
      "https://manualdosgames.com/wp-content/uploads/2019/07/the_witcher_3_poet_under_pressure_walkthrough.jpg",
    atributos: {
      ataque: 6,
      magia: 25,
      defesa: 16,
      cura: 5,
      destreza: 20
    }
  }
];

let cartaMaquina;
let cartaJogador;
let tagMoldura;

let placarJogador = 0;
let placarMaquina = 0;

mostraPlacar(placarJogador, placarMaquina);

// Função para mostrar o placar
function mostraPlacar(placar1, placar2) {
  const containerPlacar = document.querySelector(".valorPlacar");
  containerPlacar.innerHTML = `<h4>${placar1}</h4> <h4>${placar2}</h4>`;
}

//Função que vai sortear o número do índice das cartas
function sorteiaNumeroIndice() {
  return parseInt(Math.random() * cartas.length);
}

//Função para retornar a moldura da Maquina para o "verso" da carta.
//Também "limpa" a frase do resultado
function limpaMoldura() {
  const elementoResultado = document.getElementById("resultado");
  const divCartaMaquina = document.getElementById("carta-maquina");

  tagMoldura = `<div class="card">
            </div>`;
  divCartaMaquina.innerHTML = tagMoldura;

  elementoResultado.innerHTML = "";
}

//Função que será executada ao clicar no botão "sortear carta"
//Fará também com que a carta do jogador nunca seja igual a da maquina
function sortearCarta() {
  limpaMoldura();
  const numeroCartaMaquina = sorteiaNumeroIndice();

  cartaMaquina = cartas[numeroCartaMaquina];

  let numeroCartaJogador = sorteiaNumeroIndice();
  while (numeroCartaMaquina === numeroCartaJogador) {
    numeroCartaJogador = sorteiaNumeroIndice();
  }
  cartaJogador = cartas[numeroCartaJogador];
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

//Função que vai coletar a informação de qual input/atributo foi selecionado
function obtemAtributoSelecionado() {
  const radioAtributos = document.getElementsByName("atributo");
  const elementoResultado = document.getElementById("resultado");
  for (let i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked) {
      return radioAtributos[i].value;
    }
  }
}

/* 
Essa função será executada ao apertar "jogar".
Compara os atributos da carta do jogador e da carta da máquina, atualiza o placar, mostra qual era a carta da maquina, desabilita o botão de jogar até que seja sorteada uma nova carta.
*/
function jogar() {
  const atributoSelecionado = obtemAtributoSelecionado();
  const elementoResultado = document.getElementById("resultado");
  const atributoCartaJogador = cartaJogador.atributos[atributoSelecionado];
  const atributoCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  if (atributoCartaJogador > atributoCartaMaquina) {
    elementoResultado.innerHTML = `<p>Parabéns, você venceu!</p>`;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
    placarJogador++;
    mostraPlacar(placarJogador, placarMaquina);
    document.getElementById("btnSortear").disabled = false;
  } else if (atributoCartaMaquina > atributoCartaJogador) {
    elementoResultado.innerHTML = `<p>Que pena, você perdeu.</p>`;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
    placarMaquina++;
    mostraPlacar(placarJogador, placarMaquina);
    document.getElementById("btnSortear").disabled = false;
  } else if (atributoCartaJogador === undefined) {
    elementoResultado.innerHTML = `<p>Escolha uma das opções para jogar.</p>`;
  } else {
    elementoResultado.innerHTML = `<p>Parece que temos um empate!</p>`;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
    mostraPlacar(placarJogador, placarMaquina);
    document.getElementById("btnSortear").disabled = false;
  }
}

// Exibe as cartas apos serem sorteadas
function exibirCartaJogador() {
  const divCartaJogador = document.getElementById("carta-jogador");
  let opcoesTexto = "";
  for (let atributo in cartaJogador.atributos) {
    opcoesTexto += `<input class='radioBtn' type='radio' name='atributo' value='${atributo}'> ${atributo}: ${cartaJogador.atributos[atributo]}<br>`;
  }
  divCartaJogador.innerHTML = molduraPreenchida(
    cartaJogador.nome,
    cartaJogador.img,
    opcoesTexto
  );
}

function exibirCartaMaquina() {
  const divCartaMaquina = document.getElementById("carta-maquina");
  let opcoesTexto = "";
  for (let atributo in cartaMaquina.atributos) {
    opcoesTexto += `<p class="atributosCartaMaquina">${atributo}: ${cartaMaquina.atributos[atributo]}</p>`;
  }
  divCartaMaquina.innerHTML = molduraPreenchida(
    cartaMaquina.nome,
    cartaMaquina.img,
    opcoesTexto
  );
}

//Função que retorna a tag da moldura
function molduraPreenchida(nomeCarta, imagemCarta, textoCarta) {
  tagMoldura = `<div class="card">
              <div>
                <h2>${nomeCarta}</h2>
                <img class="img-card" src="${imagemCarta}">
                <div class="body-card">${textoCarta}</div>
              </div>
            </div>`;
  return tagMoldura;
}