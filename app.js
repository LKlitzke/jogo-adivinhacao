
/*
    --------------- Algoritmo para o Jogo da Adivinhação em JavaScript --------------- 

                AUTOR: Lucas Eduardo Klitzke da Silva
                CURSO: Engenharia da Computação 10P - FAESA
                DISCIPLINA: Desenvolvimento de Aplicações Web I (2021.2)
                PROFESSOR: Otávio Lube dos Santos

*/

// Array de cores para HTML5
const arrayCores = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque",
    "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue",
    "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan",
    "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki",
    "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen",
    "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue",
    "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia",
    "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow",
    "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender",
    "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow",
    "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue",
    "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen",
    "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen",
    "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream",
    "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab",
    "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed",
    "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple",
    "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown",
    "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray",
    "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle",
    "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen",
];

// Gerador de array com cores aleatórias sem repetição
const arrayRandom = new Array(10);
for(var i=0; i<arrayRandom.length; i++){
    do{
        var aux = arrayCores[Math.floor(Math.random() * arrayCores.length)];
    }while(arrayRandom.includes(aux));
    arrayRandom[i] = aux;
    console.log(i+1, arrayRandom[i]); // Para verificações e testes
}
arrayRandom.sort();

// Início da apresentação do jogo
alert("Bem-vindo ao Jogo da Adivinhação em Javascript!\n\nClique em OK para começar!");
do {
    var nome = prompt("Digite o seu nome:");
} while(nome == null || nome == "");
alert("Olá, " + nome + "! Vamos começar o jogo...");

// Lógica para a seleção da cor correta, considerando o refresh da página
var corCorreta = arrayRandom[Math.floor(Math.random() * arrayRandom.length)];
console.log("\n>> Cor correta: " + corCorreta + "\n\n"); // Para verificações e testes
var acerto = false;
var chute = "";

// Loop do jogo enquanto o usuário não acertar a cor
do {
    chute = window.prompt("Estou pensando em alguma dessas cores:\n  > " + arrayRandom.join('\n  > ') + "\n Qual delas é a correta? (Pode digitar minúsculo ou maiúsculo)");
    if(chute.toLowerCase() == corCorreta.toLowerCase()){
        acerto = true;
        alert("Parabéns " + nome + ", você acertou a cor! :D");
        document.body.style.backgroundColor = chute;
        console.log(">>", chute + " [CORRETO]\n"); // Para verificações e testes
    }
    else if(chute == ""){
        alert("Digite alguma coisa, vamos vamos!");
    }
    else {
        alert(
            "Esta não é a cor correta!\n\nDica: A sua cor está alfabeticamente"
            + (chute.toLowerCase() > corCorreta.toLowerCase() ? " DEPOIS " : " ANTES ")
            + "da que pensei. \nTente novamente!");
            console.log(">>", chute + " [INCORRETO]\n"); // Para verificações e testes
    }
} while(acerto == false);

console.log("\n\nVocê não está vendo o Console para trapacear no jogo, né?");
