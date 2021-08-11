import {inventory } from '../inventory.js';
import { problem2 } from '../problem2.js';

const result = problem2(inventory);
if(result==undefined)
{
    console.log("[]");
}
else
console.log("Last car is a "+result);