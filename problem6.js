import { inventory } from './inventory.js';

export function problem6(inventory){
    let car=[];
    let ind=0;
for(let i=0;i<inventory.length;i++)
    {
        if(inventory[i].car_make=="BMW" || inventory[i].car_make=="Audi")
        {car[ind]="Id:"+inventory[i].id+" Car_year:"+inventory[i].car_year+" Car_make:"+inventory[i].car_make+" Car_model:"+inventory[i].car_model;
        ind++;
        }
    }
    return car;
}