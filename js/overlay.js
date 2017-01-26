'use strict';

function overlay(result) {
    console.log(result);
    var over = document.querySelector('.overlay');
    over.style.display = 'inline';
    over.addEventListener('click', closeOverlay, false);
    var oResult = document.querySelector('.result');
    oResult.style.display = 'inline-block';
    oResult.innerHTML = [result];
}

function closeOverlay() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.result').innerHTML = '';
    document.querySelector('.result').style.display = 'none';
}