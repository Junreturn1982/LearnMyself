/*=== factory ===*/ 
var peopleFactory = function(name, age, state) {
     var temp = {};
     
     temp.age = age;
     temp.name = name;
     temp.state = state;

     temp.printPerson = function() {
         console.log(this.name+' '+this.age+' '+this.state);
     };
     return temp;
}; 
var person1 = peopleFactory('Hoang', 23, 'CA');
person1.printPerson();

/*===  constructor pattern ===*///
var peopleConstructor = function(name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;
    this.printPerson = function() {
         console.log(this.name+' '+this.age+' '+this.state);
    };
};
var person2 = new peopleConstructor('Ngan', 23, 'SC');
person2.printPerson();

/*===  prototype pattern ===*/ //
var peopleProto = function() {

};
peopleProto.prototype.age = 0;
peopleProto.prototype.name = 'no name';
peopleProto.prototype.city = 'no city';

peopleProto.prototype.printPerson = function() {
    console.log(this.name+' '+this.age+' '+this.city);
}

var person3 = new peopleProto();
// person3.name = 'Nguyen Hoang';
person3.printPerson();

console.log('name' in person3);
console.log(person3.hasOwnProperty('name'));
console.dir(peopleProto);

/*=== dynamic prototype pattern ===*/// 
var peopleDynamicProto = function(name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;

    if(typeof this.printPerson !== 'function'){
        peopleDynamicProto.prototype.printPerson = function(){
            console.log(this.name+' '+this.age+' '+this.state);
        }
    }
};

var person4 = new peopleDynamicProto('Thuy', 30., 'CA');
// person3.name = 'Nguyen Hoang';
person4.printPerson();