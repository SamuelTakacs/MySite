const date = new Date().getDay(); //get actual day as number - e.g 26 for 26th 
const hour = new Date().getHours(); //get actual hour as number - e.g 8 for 8:30

//Contains all meal data that will be used in meal plan
const mealData = [ 
    {id : 101, type : "B", name : 'Jogurt s granolou', content : ['jogurt','granola','čučoriedky','protein'], calories : 450, nutrients: ['P:37g','T:11g','S:62g'], link: 'https://www.google.com', allowedDays: [0,1,2,3,4,6]},
    {id: 102, type: "B", name: 'Osie hniezdo', content: ['múka','maslo','cukor','skorica','kvasok'], calories: 550, nutrients:['P:9g','T:10g','S:92g'], link: 'https://nourishingamy.com/2020/11/17/quick-protein-cinnamon-rolls-for-2-vegan-gf-option/', allowedDays: [5]},
    {id: 103, type: "B", name: 'Krupica s ovocím', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 104, type: "B", name: 'Ovsená kaša', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 105, type: "B", name: 'Chlieb s avokádom', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 106, type: "B", name: 'Smoothie', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 107, type: "B", name: 'Volské oko', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 108, type: "B", name: 'Baked oats', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 109, type: "B", name: 'Banánový chlieb', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 109, type: "B", name: 'Avokádový puding', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 110, type: "B", name: 'Zapečené ovsené vločky', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 111, type: "B", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 112, type: "B", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 113, type: "B", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 114, type: "B", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 115, type: "B", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 116, type: "B", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 117, type: "B", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 118, type: "B", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 201, type: "L", name: 'Špagety s omáčkou', content: ['barilla n.o 5 100g','omacka 150g','parmezam 15g'], calories: 550, nutrients: ['P:17g','T:8g','S:99g'], allowedDays: [0,1,2,3,4,6]},
    {id: 202, type: "L", name: 'Cícerové curry', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 203, type: "L", name: 'Špargľové rizotto', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 204, type: "L", name: 'Cuketové fašírky so zemiakmi', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 205, type: "L", name: 'Tekvicová polievka', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 206, type: "L", name: 'Špagety s pečených paprík', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 207, type: "L", name: 'Tofu s hubami a ryžou', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 208, type: "L", name: 'Buddha bowl', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 209, type: "L", name: 'Šošovicový prívarok', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 210, type: "L", name: 'Chilly sin carne', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 211, type: "L", name: 'Tofu so zeleninou a ryžou', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 212, type: "L", name: 'Brokolicová polievka', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 213, type: "L", name: 'Zeleninové styr-fry', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 214, type: "L", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 215, type: "L", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 216, type: "L", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 217, type: "L", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 218, type: "L", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 219, type: "L", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 220, type: "L", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 221, type: "L", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 222, type: "L", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 223, type: "L", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 301, type: "D", name: 'Toast so syrom', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 302, type: "D", name: 'Žemľa s nátierkou', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 303, type: "D", name: 'Palacinky', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 304, type: "D", name: 'Waffle', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 305, type: "D", name: 'Avokádová pomazánka', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 306, type: "D", name: 'Kebab', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 307, type: "D", name: 'Burger', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 308, type: "D", name: 'Quesadilla', content: ['tortila 60/120g','cicer 50g','zelenina 100g','omacka 30g','syr 20g','tofu/seitan 50g'], calories: 680, nutrients: ['P:29g','T:28g','S:60g'], link: '', allowedDays: [0,1,2,3,4,5,6]},
    {id: 309, type: "D", name: 'Pizza', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 310, type: "D", name: 'Chlieb s hummusom', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 311, type: "D", name: 'Chlieb s avokádom', content: ['kaiserka 80g','avokado 40g','parmezam 10g','tofu 40g','paprika 100g'], calories: 620, nutrients: ['P:35g','T:17g','S:88g'], link: '', allowedDays: [0,1,2,3,4,5,6]},
    {id: 312, type: "D", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 313, type: "D", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 314, type: "D", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 315, type: "D", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 316, type: "D", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 317, type: "D", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 318, type: "D", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 319, type: "D", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 320, type: "D", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 321, type: "D", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 322, type: "D", name: '', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
]


/* OBSOLETE !! REPLACED BY Randomness();
//This function will serve when you want different meal that the one you planned.
const randomB = () => {
    let filteredArr = [];
    mealData.forEach((element) => { //for each element (in this case meal)
        if (element.allowedDays?.includes(date) && element.type === 'B') { //that elements allowed days array includes todays day
            filteredArr.push(element.name); //return name of this meal to result array
        };
    });
    const numberOfElements = filteredArr.length; //index of a length of the results array
    let randomIndex = Math.floor(Math.random() * numberOfElements); //random number with the maximum length of length of an array
    return filteredArr[randomIndex]; //retutn randomly chosen meal that is available on today
}
const randomL = () => {
    let filteredArr = [];
    mealData.forEach((element) => { //for each element (in this case meal)
        if (element.allowedDays?.includes(date) && element.type === 'L') { //that elements allowed days array includes todays day
            filteredArr.push(element.name); //return name of this meal to result array
        };
    });
    const numberOfElements = filteredArr.length; //index of a length of the results array
    let randomIndex = Math.floor(Math.random() * numberOfElements); //random number with the maximum length of length of an array
    return filteredArr[randomIndex]; //retutn randomly chosen meal that is available on today
}
const randomD = () => {
    let filteredArr = [];
    mealData.forEach((element) => { //for each element (in this case meal)
        if (element.allowedDays?.includes(date) && element.type === 'D') { //that elements allowed days array includes todays day
            filteredArr.push(element.name); //return name of this meal to result array
        };
    });
    const numberOfElements = filteredArr.length; //index of a length of the results array
    let randomIndex = Math.floor(Math.random() * numberOfElements); //random number with the maximum length of length of an array
    return filteredArr[randomIndex]; //retutn randomly chosen meal that is available on today
}
*/

const mealMB = document.createElement('p');
const buttonMB = document.createElement('button');
const mealML = document.createElement('p');
const buttonML = document.createElement('button');
const mealMD = document.createElement('p');
const buttonMD = document.createElement('button');
const mealTB = document.createElement('p');
const buttonTB = document.createElement('button');
const mealTL = document.createElement('p');
const buttonTL = document.createElement('button');
const mealTD = document.createElement('p');
const buttonTD = document.createElement('button');
const mealWB = document.createElement('p');
const buttonWB = document.createElement('button');
const mealWL = document.createElement('p');
const buttonWL = document.createElement('button');
const mealWD = document.createElement('p');
const buttonWD = document.createElement('button');
const mealTHB = document.createElement('p');
const buttonTHB = document.createElement('button');
const mealTHL = document.createElement('p');
const buttonTHL = document.createElement('button');
const mealTHD = document.createElement('p');
const buttonTHD = document.createElement('button');
const mealFB = document.createElement('p');
const buttonFB = document.createElement('button');
const mealFL = document.createElement('p');
const buttonFL = document.createElement('button');
const mealFD = document.createElement('p');
const buttonFD = document.createElement('button');
const mealSB = document.createElement('p');
const buttonSB = document.createElement('button');
const mealSL = document.createElement('p');
const buttonSL = document.createElement('button');
const mealSD = document.createElement('p');
const buttonSD = document.createElement('button');
const mealSUB = document.createElement('p');
const buttonSUB = document.createElement('button');
const mealSUL = document.createElement('p');
const buttonSUL = document.createElement('button');
const mealSUD = document.createElement('p');
const buttonSUD = document.createElement('button');

const elementsArr = [mealMB,mealML,mealMD,mealTB,mealTL,mealTD,mealWB,mealWL,mealWD,mealTHB,mealTHL,mealTHD,mealFB,mealFL,mealFD,mealSB,mealSL,mealSD,mealSUB,mealSUL,mealSUD];
const idArr = ['mealMB','mealML','mealMD','mealTB','mealTL','mealTD','mealWB','mealWL','mealWD','mealTHB','mealTHL','mealTHD','mealFB','mealFL','mealFD','mealSB','mealSL','mealSD','mealSUB','mealSUL','mealSUD'];
const buttonArr = [buttonMB,buttonML,buttonMD,buttonTB,buttonTL,buttonTD,buttonWB,buttonWL,buttonWD,buttonTHB,buttonTHL,buttonTHD,buttonFB,buttonFL,buttonFD,buttonSB,buttonSL,buttonSD,buttonSUB,buttonSUL,buttonSUD]

//console.log(elementsArr[1])

for (let i = 0; i < elementsArr.length; i++) {
    elementsArr[i].setAttribute('id',idArr[i]);
    elementsArr[i].setAttribute('class','addButton');
    elementsArr[i].appendChild(document.createElement('button'));
};



const dayGenerator = () => {
    let tday = '';
    switch (date) {
        case 1:
        tday = 'monday';
        break;
        case 2:
        tday = 'tuesday';
        break;
        case 3:
        tday = 'wednesday';
        break;
        case 4:
        tday = 'thursday';
        break;
        case 5:
        tday = 'friday';
        break;
        case 6:
        tday = 'saturday';
        break;
        case 0:
        tday = 'sunday';
        break;
    }
    document.getElementById('day-of-week').innerHTML = `Today is <bold>${tday}</bold>. Have a wonderful day!`
};

dayGenerator();

/*name logic for meal HTML elements:
prefix - meal
first M - monday, T - tuesday, W - wedneday, TH - thursday, F - friday, S - saturday, SU - sunday
second B - breakfast, L - launch, S - snack, D - dinner
e.g = mealSUD - sunday dinner
*/

const b = [101,104,106,109,103,102,107]
const l = [201,202,208,211,212,204,206]
const d = [311,308,304,305,306,309,302]

function generateMealPlan(array,meal) { //parameter meal predstavuje jedlo - R ranajky, O - obed
    //step one - determine mealType
    let mealType = '';
    switch (meal) {
        case 'b':
        mealType = 'B';
        break;
        case 'l':
        mealType = 'L';
        break;
        case 'd':
        mealType = 'D';
        break;
        default:
        console.alert('Not valid parameter');
        break;
    };
    let nameArray = [];
    let fullArray = [];
    let dayOfWeek = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
    //prepare array
    array.forEach(element => {
        for (let i = 0; i < mealData.length; i++) {
            if (element === mealData[i].id) {
                nameArray.push(mealData[i].name);
                fullArray.push(mealData[i]);
            }
        }
    });
    if (mealType === 'B') {
        let breakfast = [mealMB,mealTB,mealWB,mealTHB,mealFB,mealSB,mealSUB];
        for (let i=0; i<breakfast.length;i++) {
            breakfast[i].innerText = nameArray[i];
            breakfast[i].setAttribute('data-id',fullArray[i].id);
            document.getElementById(dayOfWeek[i]).appendChild(breakfast[i]);
        }
    }
    if (mealType === 'L') {
        let lunch = [mealML,mealTL,mealWL,mealTHL,mealFL,mealSL,mealSUL]
        for (let i=0; i<lunch.length;i++) {
            lunch[i].innerText = nameArray[i];
            lunch[i].setAttribute('data-id',fullArray[i].id);
            document.getElementById(dayOfWeek[i]).appendChild(lunch[i]);
        }
    }
    if (mealType === 'D') {
        let dinner = [mealMD,mealTD,mealWD,mealTHD,mealFD,mealSD,mealSUD]
        for (let i=0; i<dinner.length;i++) {
            dinner[i].innerText = nameArray[i];
            dinner[i].setAttribute('data-id',fullArray[i].id);
            document.getElementById(dayOfWeek[i]).appendChild(dinner[i]);
        }
    }
}

generateMealPlan(b,'b');
generateMealPlan(l,'l');
generateMealPlan(d,'d');

for (let i = 0; i < elementsArr.length; i++) {
    elementsArr[i].setAttribute('id',idArr[i]);
    elementsArr[i].setAttribute('class','addButton');
    elementsArr[i].appendChild(document.createElement('button'));
};
let allButtons = document.getElementsByTagName('button');

for (let i = 1; i < allButtons.length; i++) {
    allButtons[i].setAttribute('class','button');
}

let buttonsClass = document.getElementsByClassName('button');
const buttArr = ['mealMB','mealML','mealMD','mealTB','mealTL','mealTD','mealWB','mealWL','mealWD','mealTHB','mealTHL','mealTHD','mealFB','mealFL','mealFD','mealSB','mealSL','mealSD','mealSUB','mealSUL','mealSUD'];

for (let i = 0; i < buttonsClass.length; i++) {
    buttonsClass[i].innerHTML = 'Change';
    buttonsClass[i].value = buttArr[i];
}




/*
const mealMB = document.createElement('li'); //Create element called meal MB - monday breakfast
mealMB.innerText = mealData[1].name; //set inner text to name of the first meal
document.getElementById('monday').appendChild(mealMB); //add this element to body
*/


//CAT fact function

const urlCat = 'https://catfact.ninja/fact';

const generateCatFact = async() => {
     await fetch(urlCat)
        .then(response => {
            if (response.ok) {
                return response.json();
            }})
        .then((data) => {
            let fact = data;
            //console.log(data.fact);
            const output = data.fact;
            createElement(output)
        })
        };


const createElement = (data) => { //this needs to be executed in fetch function, not in reverse !!
    const output = data;
    const element1 = document.getElementById('cat-fact');
    element1.innerText = output;
}

const button = document.getElementById('button');
button.addEventListener('click',generateCatFact);  //When add () after function name - it executes automatically !!

function randomnessTry(Event) {
    let clickedElement = Event.target;
        let mealtype = '';
        let elementToChange = '';
        let today = 0;
        switch (clickedElement.value) {
            case 'mealMB':
            mealtype = 'B';
            elementToChange = 'mealMB';
            today = 0;
            break;
            case 'mealML':
            mealtype = 'L';
            elementToChange = 'mealML';
            today = 0;
            break;
            case 'mealMD':
            mealtype = 'D';
            elementToChange = 'mealMD';
            today = 0;
            break;
            case 'mealTB':
            mealtype = 'B';
            elementToChange = 'mealTB';
            today = 1;
            break;
            case 'mealTL':
            mealtype = 'L';
            elementToChange = 'mealTL';
            today = 1;
            break;
            case 'mealTD':
            mealtype = 'D';
            elementToChange = 'mealTD';
            today = 1;
            break;
            case 'mealWB':
            mealtype = 'B';
            elementToChange = 'mealWB';
            today = 2;
            break;
            case 'mealWL':
            mealtype = 'L';
            elementToChange = 'mealWL';
            today = 2;
            break;
            case 'mealWD':
            mealtype = 'D';
            elementToChange = 'mealWD';
            today = 2;
            break;
            case 'mealTHB':
            mealtype = 'B';
            elementToChange = 'mealTHB';
            today = 3;
            break;
            case 'mealTHL':
            mealtype = 'L';
            elementToChange = 'mealTHL';
            today = 3;
            break;
            case 'mealTHD':
            mealtype = 'D';
            elementToChange = 'mealTHD';
            today = 3;
            break;
            case 'mealFB':
            mealtype = 'B';
            elementToChange = 'mealFB';
            today = 4;
            break;
            case 'mealFL':
            mealtype = 'L';
            elementToChange = 'mealFL';
            today = 4;
            break;
            case 'mealFD':
            mealtype = 'D';
            elementToChange = 'mealFD';
            today = 4;
            break;
            case 'mealSB':
            mealtype = 'B';
            elementToChange = 'mealSB';
            today = 5;
            break;
            case 'mealSL':
            mealtype = 'L';
            elementToChange = 'mealSL';
            today = 5;
            break;
            case 'mealSD':
            mealtype = 'D';
            elementToChange = 'mealSD';
            today = 5;
            break;
            case 'mealSUB':
            mealtype = 'B';
            elementToChange = 'mealSUB';
            today = 6;
            break;
            case 'mealSUL':
            mealtype = 'L';
            elementToChange = 'mealSUL';
            today = 6;
            break;
            case 'mealSUD':
            mealtype = 'D';
            elementToChange = 'mealSUD';
            today = 6;
            break;
        }
        let filteredArr = [];
        mealData.forEach((element) => { //for each element (in this case meal)
            if (element.allowedDays?.includes(today) && element.type === mealtype && element.name !== '') { //that elements allowed days array includes todays day
                filteredArr.push(element); //return name of this meal to result array
            };
        });
        const numberOfElements = filteredArr.length; //index of a length of the results array
        let randomIndex = Math.floor(Math.random() * numberOfElements); //random number with the maximum length of length of an array
        let resultName = filteredArr[randomIndex].name; //retutn randomly chosen meal that is available on today
        let resultId = filteredArr[randomIndex].id;
        document.getElementById(elementToChange).innerHTML = resultName;
        document.getElementById(elementToChange).dataset.id = resultId;
        let newButton = document.createElement('button');
        newButton.setAttribute('value',elementToChange);
        newButton.innerHTML = 'Change';
        newButton.setAttribute('class','button');
        document.getElementById(elementToChange).appendChild(newButton);
    };
    

document.body.addEventListener('click',randomnessTry)

function showMore(Event) {
    let clickedElement = Event.target;
    if (document.getElementById('moreInfo')) {
        let moreInfo = document.getElementById('moreInfo');
        moreInfo.remove();
    }
    
    let moreInfo = document.createElement('div');
    moreInfo.setAttribute('id','moreInfo');
    clickedElement.appendChild(moreInfo);
    
    let showIngredients = document.createElement('p');
    let showNutrients = document.createElement('p');
    let showCalories = document.createElement('p');
    let showLink = document.createElement('a');
    let gotId = parseInt(clickedElement.dataset.id,10);
    const ingredients = mealData.find(element => element.id === gotId);
    if (ingredients.content == 0) {
        showIngredients.innerHTML = 'Momentálne ešte nemáme všetky údaje';
    } else {
        showIngredients.innerHTML = ingredients.content.join(", ");
    }
    moreInfo.appendChild(showIngredients);
    if (ingredients.nutrients !== 0) {
        showNutrients.innerHTML = ingredients.nutrients.join(', ');
        moreInfo.appendChild(showNutrients);
    } 
    if (ingredients.calories > 0) {
        showCalories.innerHTML = `${ingredients.calories} kcal`;
        moreInfo.appendChild(showCalories);
    }
    if (ingredients.link !== "") {
        showLink.innerHTML = `<img src="https://static.thenounproject.com/png/2434646-200.png" id="link-picture">`;
        showLink.setAttribute('href',ingredients.link);
        moreInfo.appendChild(showLink);
    }
}

document.body.addEventListener('click',showMore)