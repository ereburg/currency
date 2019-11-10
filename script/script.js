/*jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function () {
    'use strict';

    let inputRub = document.getElementById('rub'),
        inputByn = document.getElementById('byn'),
        inputEur = document.getElementById('euro'),
        inputUsd = document.getElementById('usd');

    inputRub.addEventListener('input', () => {
        let request = new XMLHttpRequest();

        request.open('GET', 'script/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        request.addEventListener('readystatechange', function () {
            if (request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response);

                inputUsd.value = (Math.floor((inputRub.value * data["rub-usd"]) * 100) / 100);
                inputByn.value = (Math.floor((inputRub.value * data["rub-byn"]) * 100) / 100);
                inputEur.value = (Math.floor((inputRub.value * data["rub-euro"]) * 100) / 100);
            }
        });

    });

    inputByn.addEventListener('input', () => {
        let request = new XMLHttpRequest();

        request.open('GET', 'script/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        request.addEventListener('readystatechange', function () {
            if (request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response);

                inputUsd.value = (Math.floor((inputByn.value * data["byn-usd"]) * 100) / 100);
                inputRub.value = (Math.floor((inputByn.value * data["byn-rub"]) * 100) / 100);
                inputEur.value = (Math.floor((inputByn.value * data["byn-euro"]) * 100) / 100);
            }
        });

    });

    inputEur.addEventListener('input', () => {
        let request = new XMLHttpRequest();

        request.open('GET', 'script/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        request.addEventListener('readystatechange', function () {
            if (request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response);

                inputUsd.value = (Math.floor((inputEur.value * data["euro-usd"]) * 100) / 100);
                inputByn.value = (Math.floor((inputEur.value * data["euro-byn"]) * 100) / 100);
                inputRub.value = (Math.floor((inputEur.value * data["euro-rub"]) * 100) / 100);
            }
        });

    });

    inputUsd.addEventListener('input', () => {
        let request = new XMLHttpRequest();

        request.open('GET', 'script/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        request.addEventListener('readystatechange', function () {
            if (request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response);

                inputRub.value = (Math.floor((inputUsd.value * data["usd-rub"]) * 100) / 100);
                inputByn.value = (Math.floor((inputUsd.value * data["usd-byn"]) * 100) / 100);
                inputEur.value = (Math.floor((inputUsd.value * data["usd-euro"]) * 100) / 100);
            }
        });

    });
});