const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
  
  
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
    set mains(mains) {
      this._courses.mains = mains;
    },
    set desserts(desserts) {
      this._courses.desserts = desserts;
    },
  
  
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
  
  
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name:dishName,
        price:dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
  
  
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const index = Math.floor(Math.random() * dishes.length);
      return dishes[index];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Today you will be eating ${appetizer.Name} as appetizer, ${main.Name} as main course and as dessert you will have ${dessert.Name}. Total price for the meal will be ${totalPrice}`;
    }
  }
  
  menu.addDishToCourse('appetizers','Frittata',12);
  menu.addDishToCourse('appetizers','Wine',4);
  menu.addDishToCourse('appetizers','Spaghetti',15);
  menu.addDishToCourse('mains','Soup',5);
  menu.addDishToCourse('desserts','Cake',12);
  menu.addDishToCourse('desserts','Pudding',5);
  menu.addDishToCourse('desserts','Pancake',8);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  console.log(menu.mains);
  