import {Invoice} from './classes/invoice.js';
import { listTemplate } from './classes/listTemplate.js';
import {Payment} from './classes/payments.js';
import {HasFormatter} from './interfaces/hasformatted'

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new listTemplate(ul);

form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();

    let values:[string,string,number]
    values = [tofrom.value, details.value, amount.valueAsNumber]
    let doc: HasFormatter;

    if(type.value === 'invoice'){
        doc = new Invoice(...values)
    }else{
        doc = new Payment(...values)
    }
})