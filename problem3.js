import { inventory } from './inventory.js';


export function problem3(inventory)
{
   let carModel=[];
   let pass=false;
      for(let i=0;i<inventory.length;i++)
      {
         carModel[i]=inventory[i].car_model;
      }
   
      for(;!pass;) {
         pass = true;
         for (var i = 1; i<carModel.length; i++) {
            if (carModel[i - 1].toLowerCase()>carModel[i].toLowerCase()) {
               pass = false;
               var tmp =carModel[i - 1];
               carModel[i - 1] = carModel[i];
               carModel[i] = tmp;
            }
         }
      }
      if(carModel.length==0)
      return [];  
      else 
      return carModel;   
   }
