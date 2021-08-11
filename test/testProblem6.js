import {inventory } from '../inventory.js';
import { problem6 } from '../problem6.js';

const result = problem6(inventory);
if(result==undefined)
{
    console.log("[]");
}
else
console.log(JSON.stringify(result));