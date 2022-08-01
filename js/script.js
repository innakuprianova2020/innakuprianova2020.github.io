let btn = document.querySelector('.btn1');
let result=document.querySelector('.result');
btn.onclick = function() {
let max = Math.floor(document.querySelector('#max').value);
let min = Math.ceil(document.querySelector('#min').value);
let rand = Math.floor(Math.random()*(max-min+1))+min;
result.innerText=rand;
};

