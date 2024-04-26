
const heroes = [
    ["Master Chief", 10500],
    ["Marcus Fenix", 9500],
    ["Cole Train", 8500],
    ["Kazuma Kiriyu", 7500],
    ["Majima Goro", 6500],
    ["Cap. Jacob Keyes", 5500],
    ["Com. Miranda Keyes", 4500],
    ["Sgt. Avery Johnson", 3500],
    ["Beth Wilder", 2500],
    ["Jack Joyce", 1500],
    ["Alan Wake", 1000],
];

const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

let nivel;

for(let i = 0; i < heroes.length; i++) {

    let xp = heroes[i][1];

    if(xp > 10001) {
        nivel = 7;
    } else if (xp > 9001) {
        nivel = 6;
    } else if (xp > 8001) {
        nivel = 5;
    } else if (xp > 7001) {
        nivel = 4;
    } else if (xp > 5001) {
        nivel = 3;
    } else if (xp > 2001) {
        nivel = 2;
    } else if (xp > 1001) {
        nivel = 1;
    } else {
        nivel = 0;
    }

    console.log("O herói de nome "+heroes[i][0]+" está no nível "+niveis[nivel]);
}
