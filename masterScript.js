const date = new Date().getDay(); //get actual day as number - e.g 26 for 26th 
const hour = new Date().getHours(); //get actual hour as number - e.g 8 for 8:30

//Contains all meal data that will be used in meal plan
const mealData = [ 
    {id : 1, type : "B", name : 'Jogurt s granolou', content : [], calories : 0, allowedDays: [0,1,2,3,4,6]},
    {id: 2, type: "B", name: 'Osie hniezdo', content: [], calories: 0, allowedDays: [5]},
    {id: 3, type: "B", name: 'Krupica s ovocím', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 4, type: "B", name: 'Ovsená kaša', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 5, type: "B", name: 'Chlieb s avokádom', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 6, type: "B", name: 'Smoothie', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 7, type: "B", name: 'Volské oko', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 8, type: "B", name: 'Baked oats', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 9, type: "B", name: 'Banánový chlieb', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 10, type: "L", name: 'Špagety s omáčkou', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 11, type: "L", name: 'Cícerové curry', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 12, type: "L", name: 'Špargľové rizotto', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 13, type: "L", name: 'Cuketové fašírky so zemiakmi', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 14, type: "L", name: 'Tekvicová polievka', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 15, type: "L", name: 'Špagety s pečených paprík', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 16, type: "L", name: 'Tofu s hubami a ryžou', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 17, type: "L", name: 'Buddha bowl', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 18, type: "L", name: 'Šošovicový prívarok', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 19, type: "L", name: 'Chilly sin carne', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 20, type: "L", name: 'Tofu so zeleninou a ryžou', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 21, type: "D", name: 'Toast so syrom', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 22, type: "D", name: 'Žemľa s nátierkou', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 23, type: "D", name: 'Palacinky', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 24, type: "D", name: 'Waffle', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 25, type: "D", name: 'Avokádová pomazánka', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 26, type: "D", name: 'Kebab', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 27, type: "D", name: 'Burger', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 28, type: "D", name: 'Quesadilla', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 29, type: "D", name: 'Pizza', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 30, type: "D", name: 'Chlieb s hummusom', content: [], calories: 0, allowedDays: [0,1,2,3,4,6]},
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
mealMB.setAttribute('id','mealMB');
buttonMB.setAttribute('value','mealMB');
const mealML = document.createElement('p');
const buttonML = document.createElement('button');
mealML.setAttribute('id','mealML');
buttonML.setAttribute('value','mealML');
const mealMD = document.createElement('p');
const buttonMD = document.createElement('button');
mealMD.setAttribute('id','mealMD');
buttonMD.setAttribute('value','mealMD');
const mealTB = document.createElement('p');
const buttonTB = document.createElement('button');
mealTB.setAttribute('id','mealTB');
buttonTB.setAttribute('value','mealTB');
const mealTL = document.createElement('p');
const buttonTL = document.createElement('button');
mealTL.setAttribute('id','mealTL');
const mealTD = document.createElement('p');
const buttonTD = document.createElement('button');
mealTD.setAttribute('id','mealTD');
const mealWB = document.createElement('p');
const buttonWB = document.createElement('button');
mealWB.setAttribute('id','mealWB');
buttonWB.setAttribute('value','mealWB');
const mealWL = document.createElement('p');
const buttonWL = document.createElement('button');
mealWL.setAttribute('id','mealWL');
const mealWD = document.createElement('p');
const buttonWD = document.createElement('button');
mealWD.setAttribute('id','mealWD');
const mealTHB = document.createElement('p');
const buttonTHB = document.createElement('button');
mealTHB.setAttribute('id','mealTHB');
buttonTHB.setAttribute('value','mealTHB');
const mealTHL = document.createElement('p');
const buttonTHL = document.createElement('button');
mealTHL.setAttribute('id','mealTHL');
const mealTHD = document.createElement('p');
const buttonTHD = document.createElement('button');
mealTHD.setAttribute('id','mealTHD');
const mealFB = document.createElement('p');
const buttonFB = document.createElement('button');
mealFB.setAttribute('id','mealFB');
buttonFB.setAttribute('value','mealFB');
const mealFL = document.createElement('p');
const buttonFL = document.createElement('button');
mealFL.setAttribute('id','mealFL');
const mealFD = document.createElement('p');
const buttonFD = document.createElement('button');
mealFD.setAttribute('id','mealFD');
const mealSB = document.createElement('p');
const buttonSB = document.createElement('button');
mealSB.setAttribute('id','mealSB');
buttonSB.setAttribute('value','mealSB');
const mealSL = document.createElement('p');
const buttonSL = document.createElement('button');
mealSL.setAttribute('id','mealSL');
const mealSD = document.createElement('p');
const buttonSD = document.createElement('button');
mealSD.setAttribute('id','mealSD');
const mealSUB = document.createElement('p');
const buttonSUB = document.createElement('button');
mealSUB.setAttribute('id','mealSUB');
buttonSUB.setAttribute('value','mealSUB');
const mealSUL = document.createElement('p');
const buttonSUL = document.createElement('button');
mealSUL.setAttribute('id','mealSUL');
const mealSUD = document.createElement('p');
const buttonSUD = document.createElement('button');
mealSUD.setAttribute('id','mealSUD');



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

const b = [1,2,5,7,6,5,8]
const l = [10,12,14,15,16,17,18]
const d = [22,23,24,28,26,28,22]

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
        mealMB.innerText = nameArray[0]
        mealTB.innerText = nameArray[1]
        mealWB.innerText = nameArray[2]
        mealTHB.innerText = nameArray[3]
        mealFB.innerText = nameArray[4]
        mealSB.innerText = nameArray[5]
        mealSUB.innerText = nameArray[6]
        document.getElementById('monday').appendChild(mealMB);
        document.getElementById('tuesday').appendChild(mealTB);
        document.getElementById('wednesday').appendChild(mealWB);
        document.getElementById('thursday').appendChild(mealTHB);
        document.getElementById('friday').appendChild(mealFB);
        document.getElementById('saturday').appendChild(mealSB);
        document.getElementById('sunday').appendChild(mealSUB);
    }
    if (mealType === 'L') {
        mealML.innerText = nameArray[0]
        mealTL.innerText = nameArray[1]
        mealWL.innerText = nameArray[2]
        mealTHL.innerText = nameArray[3]
        mealFL.innerText = nameArray[4]
        mealSL.innerText = nameArray[5]
        mealSUL.innerText = nameArray[6]
        document.getElementById('monday').appendChild(mealML);
        document.getElementById('tuesday').appendChild(mealTL);
        document.getElementById('wednesday').appendChild(mealWL);
        document.getElementById('thursday').appendChild(mealTHL);
        document.getElementById('friday').appendChild(mealFL);
        document.getElementById('saturday').appendChild(mealSL);
        document.getElementById('sunday').appendChild(mealSUL);
    }
    if (mealType === 'D') {
        mealMD.innerText = nameArray[0]
        mealTD.innerText = nameArray[1]
        mealWD.innerText = nameArray[2]
        mealTHD.innerText = nameArray[3]
        mealFD.innerText = nameArray[4]
        mealSD.innerText = nameArray[5]
        mealSUD.innerText = nameArray[6]
        document.getElementById('monday').appendChild(mealMD);
        document.getElementById('tuesday').appendChild(mealTD);
        document.getElementById('wednesday').appendChild(mealWD);
        document.getElementById('thursday').appendChild(mealTHD);
        document.getElementById('friday').appendChild(mealFD);
        document.getElementById('saturday').appendChild(mealSD);
        document.getElementById('sunday').appendChild(mealSUD);
    }
}



generateMealPlan(b,'b');
generateMealPlan(l,'l');
generateMealPlan(d,'d');

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
    console.log(clickedElement.id)
        let mealtype = '';
        let elementToChange = '';
        let today = 0;
        switch (clickedElement.id) {
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
            if (element.allowedDays?.includes(today) && element.type === mealtype) { //that elements allowed days array includes todays day
                filteredArr.push(element.name); //return name of this meal to result array
            };
        });
        const numberOfElements = filteredArr.length; //index of a length of the results array
        let randomIndex = Math.floor(Math.random() * numberOfElements); //random number with the maximum length of length of an array
        let result = filteredArr[randomIndex]; //retutn randomly chosen meal that is available on today
        document.getElementById(elementToChange).innerHTML = result;
    };
    

document.body.addEventListener('click',randomnessTry)