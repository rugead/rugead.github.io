'use strict';

// var regex = /\/?\/?\s?(\w+)(\(")(.+)("\);)\s\/\/\s(should (return|become|decode)\b)\s?(.+)\./g;
var regex = /\/?\/?\s?(\w+)(\()('|")?(.+)("|')?(\));?\s?\/?\/?\s?(.+)./g;

var arr = input.split('\n');
var runFunction = document.getElementById('run-function');
arr.forEach(function (item) {
    var fn = item.replace(regex, '$1$2$3$4$5$6');
    var should = item.replace(regex, '[ $7 ]');
    var btnText = document.createTextNode(fn);
    var div = document.createElement('div');
    var anchor = document.createElement('a');
    // var linebreak = document.createElement('br');
    var span = document.createElement('div');
    span.classList.add('btn-description');
    span.innerHTML = should;
    div.classList.add('runcode');
    div.classList.add('card4');
    div.classList.add('list-item');
    anchor.setAttribute('href', '#');
    anchor.setAttribute('onclick', fn);
    anchor.appendChild(btnText);
    // anchor.appendChild(linebreak);
    anchor.appendChild(span);
    div.appendChild(anchor);
    runFunction.appendChild(div);
});