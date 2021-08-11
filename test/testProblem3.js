import {inventory } from '../inventory.js';
import { problem3 } from '../problem3.js';

const result = problem3(inventory);
if(result==undefined)
{
    console.log("[]");
}
else
console.log(result);