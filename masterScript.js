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



const mealMB = document.createElement('p');
mealMB.setAttribute('id','mealMB');
const mealML = document.createElement('p');
mealML.setAttribute('id','mealML');
const mealMD = document.createElement('p');
mealMD.setAttribute('id','mealMD');
const mealTB = document.createElement('p');
mealTB.setAttribute('id','mealTB');
const mealTL = document.createElement('p');
mealTL.setAttribute('id','mealTL');
const mealTD = document.createElement('p');
mealTD.setAttribute('id','mealTD');
const mealWB = document.createElement('p');
mealWB.setAttribute('id','mealWB');
const mealWL = document.createElement('p');
mealWL.setAttribute('id','mealWL');
const mealWD = document.createElement('p');
mealWD.setAttribute('id','mealWD');
const mealTHB = document.createElement('p');
mealTHB.setAttribute('id','mealTHB');
const mealTHL = document.createElement('p');
mealTHL.setAttribute('id','mealTHL');
const mealTHD = document.createElement('p');
mealTHD.setAttribute('id','mealTHD');
const mealFB = document.createElement('p');
mealFB.setAttribute('id','mealFB');
const mealFL = document.createElement('p');
mealFL.setAttribute('id','mealFL');
const mealFD = document.createElement('p');
mealFD.setAttribute('id','mealFD');
const mealSB = document.createElement('p');
mealSB.setAttribute('id','mealSB');
const mealSL = document.createElement('p');
mealSL.setAttribute('id','mealSL');
const mealSD = document.createElement('p');
mealSD.setAttribute('id','mealSD');
const mealSUB = document.createElement('p');
mealSUB.setAttribute('id','mealSUB');
const mealSUL = document.createElement('p');
mealSUL.setAttribute('id','mealSUL');
const mealSUD = document.createElement('p');
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
        switch (clickedElement.id) {
            case 'mealMB':
            mealtype = 'B';
            elementToChange = 'mealMB';
            break;
            case 'mealML':
            mealtype = 'L';
            elementToChange = 'mealML';
            break;
            case 'mealMD':
            mealtype = 'D';
            elementToChange = 'mealMD';
            break;
            case 'mealTB':
            mealtype = 'B';
            elementToChange = 'mealTB';
            break;
            case 'mealTL':
            mealtype = 'L';
            elementToChange = 'mealTL';
            break;
            case 'mealTD':
            mealtype = 'D';
            elementToChange = 'mealTD';
            break;
            case 'mealWB':
            mealtype = 'B';
            elementToChange = 'mealWB';
            break;
            case 'mealWL':
            mealtype = 'L';
            elementToChange = 'mealWL';
            break;
            case 'mealWD':
            mealtype = 'D';
            elementToChange = 'mealWD';
            break;
            case 'mealTHB':
            mealtype = 'B';
            elementToChange = 'mealTHB';
            break;
            case 'mealTHL':
            mealtype = 'L';
            elementToChange = 'mealTHL';
            break;
            case 'mealTHD':
            mealtype = 'D';
            elementToChange = 'mealTHD';
            break;
            case 'mealFB':
            mealtype = 'B';
            elementToChange = 'mealFB';
            break;
            case 'mealFL':
            mealtype = 'L';
            elementToChange = 'mealFL';
            break;
            case 'mealFD':
            mealtype = 'D';
            elementToChange = 'mealFD';
            break;
            case 'mealSB':
            mealtype = 'B';
            elementToChange = 'mealSB';
            break;
            case 'mealSL':
            mealtype = 'L';
            elementToChange = 'mealSL';
            break;
            case 'mealSD':
            mealtype = 'D';
            elementToChange = 'mealSD';
            break;
            case 'mealSUB':
            mealtype = 'B';
            elementToChange = 'mealSUB';
            break;
            case 'mealSUL':
            mealtype = 'L';
            elementToChange = 'mealSUL';
            break;
            case 'mealSUD':
            mealtype = 'D';
            elementToChange = 'mealSUD';
            break;
        }
        let filteredArr = [];
        mealData.forEach((element) => { //for each element (in this case meal)
            if (element.allowedDays?.includes(date) && element.type === mealtype) { //that elements allowed days array includes todays day
                filteredArr.push(element.name); //return name of this meal to result array
            };
        });
        const numberOfElements = filteredArr.length; //index of a length of the results array
        let randomIndex = Math.floor(Math.random() * numberOfElements); //random number with the maximum length of length of an array
        let result = filteredArr[randomIndex]; //retutn randomly chosen meal that is available on today
        document.getElementById(elementToChange).innerHTML = result;
    };
    

document.body.addEventListener('click',randomnessTry)