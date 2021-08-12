import { inventory } from './inventory.js';

export function problem4(inventory){
    let year_array=[];
    for(let i=0;i<inventory.length;i++)
    {
        year_array[i]=inventory[i].car_year;
    }
    if(year_array.length==0)
    return [];
    else
    return year_array;
}
export let used=problem4(inventory);
