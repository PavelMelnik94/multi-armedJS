import  './lib/lib';
import $ from './lib/lib';

$('div').on('click', sayhello);

function sayhello() {
    console.log('hellow');
}

$('div').off('click', sayhello);