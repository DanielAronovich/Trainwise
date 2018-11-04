'use strict';

let form = document.querySelector('form');



form.addEventListener('submit', e => {
    e.preventDefault();

    let time_var = document.getElementById("format").value;

    let timeString = form.action+"?format="+time_var;
    console.log(timeString);


    request(timeString, data => {


        document.querySelector("#response").innerHTML = data;



    });
});

function request(action, success) {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', action);
    xhr.addEventListener('load', function (e) { success(e.currentTarget.responseText); });
    xhr.send();


}