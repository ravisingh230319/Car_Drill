import {inventory } from '../inventory.js';
import { problem5 } from '../problem5.js';

const result = problem5(inventory);
if(result==undefined)
{
    console.log("[]");
}
else{
console.log(result);
console.log(result.length);
}