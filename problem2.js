import { inventory } from './inventory.js';
export function problem2(inventory){
        if(inventory.length!=0)
        return "Last car is a "+inventory[inventory.length-1].car_make+" "+inventory[inventory.length-1].car_model;
        else 
        return [];
}
