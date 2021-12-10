const arrayCores = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue",
    "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki",
    "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue",
    "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow",
    "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow",
    "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen",
    "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream",
    "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed",
    "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown",
    "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle",
    "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen",
];
function Game() {
    
const arrayCor = new Array(10);
for(var i=0; i<arrayCor.length; i++){
    do{
        var aux = arrayCores[Math.floor(Math.random() * arrayCores.length)];
    }while(arrayCor.includes(aux));
    arrayCor[i] = aux;
}
arrayCor.sort();
alert("Jogo da Adivinhação \nVamos começar!");
var cor = arrayCor[Math.floor(Math.random() * arrayCor.length)];
var acerto = false;
var tentativa = "";
do {
    tentativa = window.prompt("\n Qual dessas cores estou pensando ?  " + arrayCor.join('\n') + "\n");
    if(tentativa.toLowerCase() == cor.toLowerCase()){
        acerto = true;
        alert("Você acertou a cor");
        document.body.style.backgroundColor = tentativa;
    }
    else if(tentativa == ""){
        alert("Digite alguma coisa, vamos vamos!");
    }
    else {
        alert(
            "Esta não é a cor correta!\n\nDica:  A sua cor está alfabeticamente"
            + (tentativa.toLowerCase() > cor.toLowerCase() ? " DEPOIS " : " ANTES ")
            + "da que pensei. \nTente novamente!");
    }
} while(acerto == false);
}