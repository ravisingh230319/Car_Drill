import { inventory } from './inventory.js';
let carModel=[];
for(let i=0;i<inventory.length;i++)
    {
       carModel[i]=inventory[i].car_model.toLowerCase();// Converting to lowercase so that sorting works fine for both lowercase and uppercase.
    }
export function problem3(inventory){
   carModel.sort();
   return carModel;

}

