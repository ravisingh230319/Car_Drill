import {inventory } from '../inventory.js';
import { problem4 } from '../problem4.js';

const result = problem4(inventory);
if(result==undefined)
{
    console.log("[]");
}
else
console.log(result);

