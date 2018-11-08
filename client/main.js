'use strict';

let form = document.querySelector('form');



form.addEventListener('submit', e => {
    e.preventDefault();

    let email = document.getElementById("EmailAddress").value;
    let password = document.getElementById("InputPassword").value;

    // let timeString = form.action+"?format="+time_var;
    console.log(email);

    console.log(form.action);

    request(form.action, data => {


        document.querySelector("#response").innerHTML = data;



    });
});

function request(action, success) {

    let xhr = new XMLHttpRequest();
    xhr.open('POST', action);
    xhr.addEventListener('load', function (e) { success(e.currentTarget.responseText); });
    xhr.send();


}