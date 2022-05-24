const mealData = [
    meal1 = {id: 1, type: "R", name: 'Jogurt s granolou', content: [], calories: 0},
    meal2 = {id: 2, type: "R", name: 'Osie hniezdo', content: [], calories: 0},
    meal3 = {id: 3, type: "R", name: 'Krupica s ovocím', content: [], calories: 0},
    meal4 = {id: 4, type: "R", name: 'Ovsená kaša', content: [], calories: 0},
    meal5 = {id: 5, type: "R", name: 'Chlieb s avokádom', content: [], calories: 0},
    meal6 = {id: 6, type: "R", name: 'Smoothie', content: [], calories: 0},
    meal7 = {id: 7, type: "R", name: 'Volské oko', content: [], calories: 0},
    meal8 = {id: 8, type: "R", name: 'Baked oats', content: [], calories: 0},
    meal9 = {id: 9, type: "R", name: 'Banánový chlieb', content: [], calories: 0},
    meal10 = {id: 10, type: "O", name: 'Špagety s omáčkou', content: [], calories: 0},
    meal11 = {id: 11, type: "O", name: 'Cícerové curry', content: [], calories: 0},
    meal12 = {id: 12, type: "O", name: 'Špargľové rizotto', content: [], calories: 0},
    meal13 = {id: 13, type: "O", name: 'Cuketové fašírky so zemiakmi', content: [], calories: 0},
    meal14 = {id: 14, type: "O", name: 'Tekvicová polievka', content: [], calories: 0},
    meal15 = {id: 15, type: "O", name: 'Špagety s pečených paprík', content: [], calories: 0},
    meal16 = {id: 16, type: "O", name: 'Tofu s hubami a ryžou', content: [], calories: 0},
    meal17 = {id: 17, type: "O", name: 'Buddha bowl', content: [], calories: 0},
    meal18 = {id: 18, type: "O", name: 'Šošovicový prívarok', content: [], calories: 0},
    meal19 = {id: 19, type: "O", name: 'Chilly sin carne', content: [], calories: 0},
    meal20 = {id: 20, type: "O", name: 'Tofu so zeleninou a ryžou', content: [], calories: 0},
    meal21 = {id: 21, type: "V", name: 'Toast so syrom', content: [], calories: 0},
    meal22 = {id: 22, type: "V", name: 'Žemľa s nátierkou', content: [], calories: 0},
    meal23 = {id: 23, type: "V", name: 'Palacinky', content: [], calories: 0},
    meal24 = {id: 24, type: "V", name: 'Waffle', content: [], calories: 0},
    meal25 = {id: 25, type: "V", name: 'Avokádová pomazánka', content: [], calories: 0},
    meal26 = {id: 26, type: "V", name: 'Kebab', content: [], calories: 0},
    meal27 = {id: 27, type: "V", name: 'Burger', content: [], calories: 0},
    meal28 = {id: 28, type: "V", name: 'Quesadilla', content: [], calories: 0},
    meal29 = {id: 29, type: "V", name: 'Pizza', content: [], calories: 0},
    meal30 = {id: 30, type: "V", name: 'Chlieb s hummusom', content: [], calories: 0},
]

const result = mealData.filter(meal => meal.type === 'R');
//console.log(result);
console.log(result[1].name);

