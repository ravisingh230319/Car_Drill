import { inventory } from './inventory.js';
import { used } from './problem4.js';
export function problem5(inventory){
    let old_cars=[];
    let count=0;
    for(let ind=0;ind<used.length;ind++)
    {
        if(used[ind]<2000)
            {   old_cars[count]=used[ind];
                count++;
            }
    }
    if(old_cars.length==0)
    return [];
    else  
    return old_cars;
}