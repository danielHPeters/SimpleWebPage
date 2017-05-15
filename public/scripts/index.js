/**
 * Created by Daniel on 15.05.2017.
 */
'use strict';


$(document).ready(() => {

    $('#schoolData').submit(e => {
        e.preventDefault();
        let today = new Date();
        let date = 'Aktuelles Datum: ' + today.toLocaleDateString();
        let time = 'Aktuelle Zeit: ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let nameCharCount = $('#userName').val().length;
        let commentCharCount = $('#comment').val().length;
        let browserName = navigator.appCodeName;
        let browserVersion = navigator.appVersion;
        let num = $('#number').val();
        let crossSum =  num
            .toString()
            .split('')
            .map(Number)
            .reduce(function (a, b) {
                return a + b;
            }, 0);

        alert(
            'Anzahl Buchstaben im Namen: ' + nameCharCount + '\n' +
            'Anzahl Buchstaben im Kommentar' + commentCharCount + '\n' +
            date + '\n' +
            time + '\n' +
            'Browsername: ' + browserName + '\n' +
            'Browserversion: ' + browserVersion + '\n' +
                'Eingegebene Nummer: ' + num + '\n' +
                'Quersumme: ' + crossSum + '\n'

        );

    });
});