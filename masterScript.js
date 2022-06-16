const date = new Date().getDay(); //get actual day as number - e.g 26 for 26th 
const hour = new Date().getHours(); //get actual hour as number - e.g 8 for 8:30

//Contains all meal data that will be used in meal plan
const mealData = [ 
    {id :101, type : "B", name : 'Jogurt s granolou', content : ['jogurt','granola','čučoriedky','protein'], calories : 450, nutrients: ['P:37g','T:11g','S:62g'], link:'', recipe:['Daj jogurt do misky','Daj granolu do jogurtu','Pridaj čučoriedky'], allowedDays: [0,1,2,3,4,6]},
    {id: 102, type: "B", name: 'Osie hniezdo', content: ['múka','maslo','cukor','skorica','kvasok'], calories: 550, nutrients:['P:9g','T:10g','S:92g'], link: 'https://nourishingamy.com/2020/11/17/quick-protein-cinnamon-rolls-for-2-vegan-gf-option/', allowedDays: [5]},
    {id: 103, type: "B", name: 'Krupica s ovocím', content: ['mlieko','krupica','kesu','datlovy syrup'], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 104, type: "B", name: 'Ovsená kaša', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 105, type: "B", name: 'Chlieb s avokádom', content: [], nutrients: [], recipe:[], calories: 0,link:'', allowedDays: [0,1,2,3,4,6]},
    {id: 106, type: "B", name: 'Smoothie', content: ['protein 30g','banan 90g','mlieko 400ml'], calories: 280,link:'', nutrients: ['P:29g','S:22g','7g'], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 107, type: "B", name: 'Volské oko', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 108, type: "B", name: 'Overnight oats', content: [], calories: 0,link:'https://www.noracooks.com/vegan-overnight-oats/', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 109, type: "B", name: 'Banánový chlieb', content: ['210g muka','75g cukor','prasok do peciva','75ml applesauce','350g bananov','60ml mlieko','skorica'], calories: 189,link:'https://simple-veganista.com/vegan-banana-tea-bread/', nutrients: ['na 100g','P:4g','S:41g','T:1g'], recipe:['banan rozmixuj s mliekom','v miske zmiesaj vsetky sypke ingrediencie','vlej banan do sypkej zmesy','do formy (ktoru vysip napr. kokosom) vlej cesto','pec na 180 stupnov cca 50minut - menej ak robis v plochej forme'], allowedDays: [0,1,2,3,4,6]},
    {id: 110, type: "B", name: 'Avokádový puding', content: ['avokado 100g','kakao 15g','skorica','banan 110g'], calories: 321,link:'', nutrients: ['P:7g','S:35g','T:15g'], recipe:['Rozmixuj banan s avokadom','Pridaj kakao a skoricu'], allowedDays: [0,1,2,3,4,6]},
    {id: 111, type: "B", name: 'Zapečené ovsené vločky', content: [], calories: 0,link:'https://biancazapatka.com/en/vegan-baked-oats/', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 112, type: "B", name: '', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 113, type: "B", name: '', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 114, type: "B", name: '', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 115, type: "B", name: '', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 116, type: "B", name: '', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 117, type: "B", name: '', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 118, type: "B", name: '', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 119, type: "B", name: '', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 201, type: "L", name: 'Špagety s omáčkou', content: ['barilla n.o 5 100g','omacka 150g','parmezam 15g'], calories: 550, nutrients: ['P:17g','T:8g','S:99g'], link: "", allowedDays: [0,1,2,3,4,6]},
    {id: 202, type: "L", name: 'Cícerové curry', content: ['cicer 70g','kari 3g','kokosove-mlieko 50ml','tofu 80g','ryza 150g','cibula 50g'], calories: 600,link:'', nutrients: ['P:16g','S:73g','T:24g'], recipe:['uvar ryzu ako prilohu','cibulu osmaz do zlata','pridaj nakrajane tofu a cicer','teraz na to daj kari, mozes pridat aj mletu papriku a garam masalu','pridaj smotanu alebo aj trochu vody','vmiesaj ryzu a mas hotovo'], allowedDays: [0,1,2,3,4,6]},
    {id: 203, type: "L", name: 'Špargľové rizotto', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 204, type: "L", name: 'Cuketové fašírky so zemiakmi', content: [],link:'', nutrients: [], recipe:[], calories: 0, allowedDays: [0,1,2,3,4,6]},
    {id: 205, type: "L", name: 'Tekvicová polievka', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 206, type: "L", name: 'Špagety s pečených paprík', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 207, type: "L", name: 'Tofu s hubami a ryžou', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 208, type: "L", name: 'Buddha bowl', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 209, type: "L", name: 'Šošovicový prívarok', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 210, type: "L", name: 'Chilly sin carne', content: ['Fazula 150g','Pradajkovy pretlak 100g','Tofu 160g','Chilly 120g','Paprika 2ks','Paradajka 1ks','Cibula 1ks'], calories: 0,link:'https://www.dcerka.sk/vegan-chilli-sin-carne/', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 211, type: "L", name: 'Tofu so zeleninou a ryžou', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 212, type: "L", name: 'Brokolicová polievka', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 213, type: "L", name: 'Zeleninové styr-fry', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 214, type: "L", name: '', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 215, type: "L", name: '', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 216, type: "L", name: '', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 217, type: "L", name: '', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 218, type: "L", name: '', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 219, type: "L", name: '', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 220, type: "L", name: '', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 221, type: "L", name: '', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 222, type: "L", name: '', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 223, type: "L", name: '', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 301, type: "D", name: 'Toast so syrom', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 302, type: "D", name: 'Žemľa s nátierkou', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 303, type: "D", name: 'Palacinky', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 304, type: "D", name: 'Waffle', content: ['protein 50g','muka 70g','mlieko 200ml','banan 100g','slahacka 20g','dzem/syrup 40g','prasok do peciva'], calories: 670,link:'https://www.onecleverchef.com/vegan-protein-waffles-healthy-gluten-free/', nutrients: ['P:57g','S:98g','T:5g'], recipe:['Banan z mliekom pomixuj na kasu','Zmiesaj s proteinom, mukou a praskom do peciva','Cesto musi byt tuhe','v nahriatom wafflovaci sa pecie 5 minut'], allowedDays: [0,1,2,3,4,6]},
    {id: 305, type: "D", name: 'Avokádová pomazánka', content: ['avokado 50g','kaiserka 90g','paprika 100g','tofu 80g','syr 30g'],link:'', nutrients: ['P:21','S:59','T:24'], recipe:['avokado popuc vydlickou, pridaj sol a peper (moze byt aj citron)','natri chlieb, nakrajaj oblohu a serviruj'], calories: 553, allowedDays: [0,1,2,3,4,6]},
    {id: 306, type: "D", name: 'Kebab', content: ['tortilla','seitan','sojova omacka','obloha (cibula, salat, pradajaka)','cicer','vegan mayo'], calories: 680,link:'', nutrients: ['P:30g','S:60g','T:27g'], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 307, type: "D", name: 'Burger', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 308, type: "D", name: 'Quesadilla', content: ['tortila 60/120g','cicer 50g','zelenina 100g','omacka 30g','syr 20g','tofu/seitan 50g'], calories: 680, nutrients: ['P:29g','T:28g','S:60g'], link: '', allowedDays: [0,1,2,3,4,5,6]},
    {id: 309, type: "D", name: 'Pizza', content: [], calories: 0,link:'', nutrients: [], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 310, type: "D", name: 'Chlieb s hummusom', content: ['kaiserka 90g','hummus trio 60g','tofu 80g','paprika 100g','kysla uhorka 1ks'], calories: 620,link:'', nutrients: ['P:30g','S:60g','T:30g'], recipe:[], allowedDays: [0,1,2,3,4,6]},
    {id: 311, type: "D", name: 'Chlieb s avokádom', content: ['kaiserka 80g','avokado 40g','parmezam 10g','tofu 40g','paprika 100g'], calories: 620, nutrients: ['P:35g','T:17g','S:88g'], link: '', recipe:[], allowedDays: [0,1,2,3,4,5,6]},
    {id: 312, type: "D", name: '', content: [], calories: 0,link:'', allowedDays: [0,1,2,3,4,6]},
    {id: 313, type: "D", name: '', content: [], calories: 0,link:'', allowedDays: [0,1,2,3,4,6]},
    {id: 314, type: "D", name: '', content: [], calories: 0,link:'', allowedDays: [0,1,2,3,4,6]},
    {id: 315, type: "D", name: '', content: [], calories: 0,link:'', allowedDays: [0,1,2,3,4,6]},
    {id: 316, type: "D", name: '', content: [], calories: 0,link:'', allowedDays: [0,1,2,3,4,6]},
    {id: 317, type: "D", name: '', content: [], calories: 0,link:'', allowedDays: [0,1,2,3,4,6]},
    {id: 318, type: "D", name: '', content: [], calories: 0,link:'', allowedDays: [0,1,2,3,4,6]},
    {id: 319, type: "D", name: '', content: [], calories: 0,link:'', allowedDays: [0,1,2,3,4,6]},
    {id: 320, type: "D", name: '', content: [], calories: 0,link:'', allowedDays: [0,1,2,3,4,6]},
    {id: 321, type: "D", name: '', content: [], calories: 0,link:'', allowedDays: [0,1,2,3,4,6]},
    {id: 322, type: "D", name: '', content: [], calories: 0,link:'',allowedDays: [0,1,2,3,4,6]},
]

//IDEA - NUTRIENTS - array with 3 number => 1st will be shown as protein, second as sugar and third as fat
//IDEA2 - shopping list generated for week
//IDEA3 - pizza calculator as pizza
//IDEA4 - content - ingredient as pair ID and ammount

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

const b = [101,104,101,106,103,102,107]
const l = [201,202,208,210,212,204,206]
const d = [311,308,304,306,311,309,302]

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

for (let i = 0; i < buttonsClass.length; i++) {
    buttonsClass[i].innerHTML = 'Change';
    buttonsClass[i].value = idArr[i];
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
        newButton.addEventListener('click',randomnessTry)
    };
    
Array.from(document.getElementsByClassName('button')).forEach(x => x.addEventListener('click',randomnessTry));
let modalArr = [];

function showMore(Event) {
    let clickedElement = Event.target;
    
    if (document.getElementById('moreInfo')) {
        let moreInfo = document.getElementById('moreInfo');
        moreInfo.remove();
    }
    const myIds = mealData.map(element => element.id); //Aras 
    if (idArr.includes(clickedElement.id) || elementsArr.includes(clickedElement.id) || myIds.includes(clickedElement.dataset.recipeid)) {
    let moreInfo = document.createElement('div');
    moreInfo.setAttribute('id','moreInfo');
    
    clickedElement.parentElement.insertBefore(moreInfo,clickedElement.nextSibling);

    let showIngredients = document.createElement('p');
    let showNutrients = document.createElement('p');
    let showCalories = document.createElement('p');
    let showLink = document.createElement('a');
    let showRecipe = document.createElement('img');
    let gotId = parseInt(clickedElement.dataset.id,10); //Here is important parseInt
    const ingredients = mealData.find(element => element.id === gotId);
    if (ingredients.content == 0) {
        showIngredients.innerHTML = 'Momentálne ešte nemáme všetky údaje';
    } else {
        showIngredients.innerHTML = ingredients.content.join(", ");
    }
    moreInfo.appendChild(showIngredients);
    if (ingredients.nutrients) {
        showNutrients.innerHTML = ingredients.nutrients.join(', ');
        moreInfo.appendChild(showNutrients);
    } 
    if (ingredients.calories > 0) {
        showCalories.innerHTML = `${ingredients.calories} kcal`;
        moreInfo.appendChild(showCalories);
    }
    if (ingredients.link) {
        showLink.innerHTML = `<img src="https://static.thenounproject.com/png/2434646-200.png" class="link-picture">`;
        showLink.setAttribute('href',ingredients.link);
        moreInfo.appendChild(showLink);
    }
    if (ingredients.recipe.length > 0) {
        showRecipe.setAttribute('src','https://icon-library.com/images/recipe-icon-png/recipe-icon-png-25.jpg')
        showRecipe.setAttribute('class','link-picture');
        showRecipe.setAttribute('data-recipeid',ingredients.id);
        moreInfo.appendChild(showRecipe);
        showRecipe.addEventListener('click',function() {
            modal.style.display = 'block';
            
            if (document.getElementById('recipe')) {
                document.getElementById('recipe').remove();
            }
            
            let recipeContent = document.createElement('div');
            span.parentElement.appendChild(recipeContent);
            recipeContent.setAttribute('id','recipe');
            
            let recipeList = document.createElement('ol');
            recipeList.setAttribute('class','recipelist');
            
            ingredients.recipe.forEach(item => {
                let li = document.createElement('li');
                recipeList.appendChild(li);
                li.setAttribute('class','recipelist');
                li.innerText = item;
            
            })
            recipeContent.appendChild(recipeList);
        })
    }
   
    let closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    closeButton.setAttribute('id','closebutton');
    moreInfo.appendChild(closeButton);
    closeButton.addEventListener('click',function() {
        moreInfo.remove();
    });

}
}

let modal = document.getElementById('pop-up');
let span = document.getElementsByClassName('close')[0];

elementsArr.forEach(element => element.addEventListener('click',showMore));

span.addEventListener('click',function() {
    modal.style.display = 'none';
})

document.body.addEventListener('click',function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
})

function generateShoppingList(arr1,arr2,arr3) {
    let shoppinglist = [];
    arr1.forEach(element => {
        let mealValue = mealData.find(meal => meal.id === element)
        mealValue.content.forEach(ingredient => shoppinglist.push(ingredient));
    })
    arr2.forEach(element => {
        let mealValue = mealData.find(meal => meal.id === element)
        mealValue.content.forEach(ingredient => shoppinglist.push(ingredient));
    })
    arr3.forEach(element => {
        let mealValue = mealData.find(meal => meal.id === element)
        mealValue.content.forEach(ingredient => shoppinglist.push(ingredient));
    })
    shoppinglist.sort();
    console.log(shoppinglist);
}

//generateShoppingList(b,l,d);