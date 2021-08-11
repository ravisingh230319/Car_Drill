import { inventory } from './inventory.js';
export function problem2(inventory){
        return inventory[inventory.length-1].car_make+" "+inventory[inventory.length-1].car_model;
}
