import {inventory } from '../inventory.js';
import { problem1 } from '../problem1.js';

const result = problem1(inventory);
if(result==undefined)
{
    console.log("[]");
}
else
console.log("Car 33 is a "+result);