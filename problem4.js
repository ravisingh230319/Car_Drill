import { inventory } from './inventory.js';
let year_array=[];
export let used=problem4(inventory);
export function problem4(inventory){
    
    for(let i=0;i<inventory.length;i++)
    {
        year_array[i]=inventory[i].car_year;
    }
    return year_array;
}
