//Contains all meal data that will be used in meal plan
const mealData = [ 
    meal1 = {id : 1, type : "R", name : 'Jogurt s granolou', content : [], calories : 0, allowedDays: [0,1,2,3,4,6]},
    meal2 = {id: 2, type: "R", name: 'Osie hniezdo', content: [], calories: 0, allowedDays: [5]},
    meal3 = {id: 3, type: "R", name: 'Krupica s ovocím', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    meal4 = {id: 4, type: "R", name: 'Ovsená kaša', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    meal5 = {id: 5, type: "R", name: 'Chlieb s avokádom', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    meal6 = {id: 6, type: "R", name: 'Smoothie', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    meal7 = {id: 7, type: "R", name: 'Volské oko', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    meal8 = {id: 8, type: "R", name: 'Baked oats', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    meal9 = {id: 9, type: "R", name: 'Banánový chlieb', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
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

const SimpleMealR = ['Jogurt','Chlieb'];

const date = new Date().getDay(); //get actual day as number - e.g 26 for 26th 
const hour = new Date().getHours(); //get actual hour as number - e.g 8 for 8:30

/*name logic for meal HTML elements:
prefix - meal
first M - monday, T - tuesday, W - wedneday, TH - thursday, F - friday, S - saturday, SU - sunday
second B - breakfast, L - launch, S - snack, D - dinner
e.g = mealSUD - sunday dinner
*/

const mealMB = document.createElement('li'); //Create element called meal MB - monday breakfast
mealPR.innerText = mealData[1].name; //set inner text to name of the first meal
document.body.appendChild(mealPR); //add this element to body


//This function will serve when you want different meal that the one you planned.
const randomMeal = () => {
    const filteredArr = [];
    mealData.forEach((element) => { //for each element (in this case meal)
        if (element.allowedDays?.includes(date)) { //that elements allowed days array includes todays day
            filteredArr.push(element.name); //return name of this meal to result array
        };
    });
    const numberOfElements = filteredArr.length; //index of a length of the results array
    randomIndex = Math.floor(Math.random() * numberOfElements); //random number with the maximum length of length of an array
    return filteredArr[randomIndex]; //retutn randomly chosen meal that is available on today
}