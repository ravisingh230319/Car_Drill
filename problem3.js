import { inventory } from './inventory.js';

export function problem3(inventory){
let carModel=[];
for(let i=0;i<inventory.length;i++)
    {
       carModel[i]=inventory[i].car_model.toLowerCase();// Converting to lowercase so that sorting works fine for both lowercase and uppercase.
    }
   carModel.sort();
   if(carModel.length==0)
   return [];
   return carModel;
}

