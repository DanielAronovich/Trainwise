'use strict';

let form = document.querySelector('form');



form.addEventListener('submit', e => {
    e.preventDefault();

    let email = document.getElementById("EmailAddress").value;
    let password = document.getElementById("InputPassword").value;

    let dataJSON = JSON.stringify( {name: email, age: password});


    // let timeString = form.action+"?format="+time_var;
    console.log(dataJSON);

    console.log(form.action);

    request('POST',form.action, data => {


        document.querySelector("#response").innerHTML = data;



    }, {}, dataJSON );
});

// function request(action, success,data) {

//     let xhr = new XMLHttpRequest();
//     xhr.open('POST', action);
//     xhr.setRequestHeader()
//     xhr.addEventListener('load', function (e) { success(e.currentTarget.responseText); });
//     xhr.send(data);


// }

function request(method, url, success, reject, data) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.addEventListener('load', e => {
    //     resolve(JSON.parse(e.target.responseText))
    // });
    xhr.addEventListener('load', function (e) { success(e.currentTarget.responseText); });

    xhr.addEventListener('error', err => {
        reject(err);
    });
    xhr.send(data);
}