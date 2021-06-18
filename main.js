'use strict'
class HashStorageFunc {
  constructor(){
    this.storage = {}; 
  }
  addValue(key,value){
    this.storage[key]= value;    
  }
  getValue(key){
    return this.storage[key];
  }
  deleteValue (key){
    if (key in this.storage) { 
       delete this.storage[key];
       return true;
    } else { 
       return false;
      }
  }
  getKeys(){
    return Object.keys(this.storage);
  }
}

let drinkStorage = new HashStorageFunc();
let dishStorage = new HashStorageFunc();


//for drink
function addButton(){
 let drN = prompt('Укажите название напитка');
 let drT = confirm (`Если напиток алкогольный, нажмите  Ok.
Если напиток безалкогольный, нажмите Отмена`);  
 let drRec = prompt('Введите рецепт приготовления');
  drinkStorage.addValue(drN, {drT, drRec }) 
  }   
//get
function getButton(){  
    let drN = prompt('Укажите название напитка');
    let val=drinkStorage.getValue(drN);
    console.log(val);    
   if (val===undefined){    
         alert('Такого напитка нет');
     }else{
  alert (`Напиток: ${drN}
 алкогольный: ${(val.drT===true) ? 'да' : 'нет'}
 рецепт приготовления: ${val.drRec}`);
     }  
} ;  
// delete
function deleteButton(){
  let drN= prompt('Укажите название напитка');  
  let b=drinkStorage.deleteValue(drN);
  if (b===true){
   alert(`Напиток: ${drN} удален`);
  }else {
  alert(`Напитка: ${drN} не было в списке рецептов`);
  }
};
//all recipe
function getAllDrinks(){
    drinkStorage.getKeys();
    alert(`Список напитков: ${drinkStorage.getKeys()}`);
}
//for dish
//for drink
function addButtonDish(){
    let dN = prompt('Укажите название блюда');
    let dT  = confirm (`Если блюдо веганское, нажмите  Ok.
   Если нет, нажмите Отмена`);  
    let dRec = prompt('Введите рецепт приготовления');
     dishStorage.addValue(dN, {dT, dRec }) 
     }   
   //get
   function getButtonDish(){  
       let dN = prompt('Укажите название напитка');
       let val=dishStorage.getValue(dN);
       console.log(val);    
      if (val===undefined){    
            alert('Такого блюда нет');
        }else{
     alert (`Блюдо: ${dN}
    веганский: ${(val.dT===true) ? 'да' : 'нет'}
    рецепт приготовления: ${val.dRec}`);
        }  
   } ;  
   // delete
   function deleteButtonDish(){
     let dN= prompt('Укажите название блюда');  
     let f=dishStorage.deleteValue(dN);
     if (f===true){
      alert(`Блюдо: ${dN} удален`);
     }else {
     alert(`Блюдо: ${dN} не было в списке рецептов`);
     }
   };
   //all recipe
   function getAllDish(){
       dishStorage.getKeys();
       alert(`Список блюд: ${dishStorage.getKeys()}`);
   }
 
