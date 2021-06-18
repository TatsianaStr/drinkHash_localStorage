'use strict';
class LocStorage{
    constructor(localStorageName){         
         this._localStorageName = localStorageName;    
      if(localStorageName in localStorage){
        this.storage = JSON.parse(localStorage.getItem(localStorageName));//если ключа нет вернет null
        //this.storage = JSON.parse(localStorage[localStorageName]); //если ключа нет вернет underfined  
        }
        else{
            this.storage = {}; 
        }  
            
    }
      addValue(key,value){
       this.storage[key]= value;      
        localStorage.setItem(this._localStorageName, JSON.stringify(this.storage));           
      }
      getValue(key){
        return this.storage[key];
      }
      
      deleteValue (key){          
        if (key in this.storage) { 
            delete this.storage[key]; 
            localStorage.setItem(this._localStorageName, JSON.stringify(this.storage));                    
           return true;    
           
           } else {              
           return false;       
              }  
              
      }
      getKeys(){
        return Object.keys(this.storage);       
      }
      }
let drinkStorage = new LocStorage('drinks');
let dishStorage = new LocStorage('dishes');

//for drink
function addButton(){
    let drN = prompt('Укажите название напитка');
    let drT = confirm (`Если напиток алкогольный, нажмите  Ok.
   Если напиток безалкогольный, нажмите Отмена`);  
    let drRec = prompt('Введите рецепт приготовления');
    drinkStorage.addValue(drN, {drT, drRec }); 
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
    let drN = prompt('Укажите название напитка');
    let drT = confirm (`Если напиток алкогольный, нажмите  Ok.
   Если напиток безалкогольный, нажмите Отмена`);  
    let dRec = prompt('Введите рецепт приготовления');
    dishStorage.addValue(drN, {drT, dRec }) ;
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
    
   