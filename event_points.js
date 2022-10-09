const box11 = document.querySelector('.box1');
const box12 = document.querySelector('.box1-2');
const box13 = document.querySelector('.box1-3');
const box14 = document.querySelector('.box1-4');
const box15 = document.querySelector('.box1-5');

const box21 = document.querySelector('.box2');
const box22 = document.querySelector('.box2-2');
const box23 = document.querySelector('.box2-3');
const box24 = document.querySelector('.box2-4');
const box25 = document.querySelector('.box2-5');

const box31 = document.querySelector('.box3');
const box32 = document.querySelector('.box3-2');
const box33 = document.querySelector('.box3-3');
const box34 = document.querySelector('.box3-4');
const box35 = document.querySelector('.box3-5');

const box41 = document.querySelector('.box4');
const box42 = document.querySelector('.box4-2');
const box43 = document.querySelector('.box4-3');
const box44 = document.querySelector('.box4-4');
const box45 = document.querySelector('.box4-5');

var box1 = [box11 , box12  ,box13 , box14 ,box15];
var box2 = [box21 , box22  ,box23 , box24 ,box25];
var box3 = [box31 , box32  ,box33 , box34 ,box35];
var box4 = [box41 , box42  ,box43 , box44 ,box45];

// var box5 = [box5 , box52 ,box53 ,box53 , box54 ,box55];

var allbox = [box1 , box2 , box3 , box4 ];
var allvalues= [];
const api_url =
    "https://script.google.com/macros/s/AKfycby5XmpqZzWlnz2K77gK9JyxsY7gb8rsRCoM3eKVdmoPt32qiG2hbuKwiiMvDI02MRhS6Q/exec";

fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
        var output = [];
        console.log(data);
        for (var i = 1; i < 5; i++) {
            var entry = [];
            console.log(data['data'][i]);
            entry.push(data['data'][i]['A']);
            entry.push(data['data'][i]['B']);
            entry.push(data['data'][i]['C']);
            entry.push(data['data'][i]['D']);
            entry.push(data['data'][i]['E']);
            output.push(entry);
        }
        output.sort((a, b) => {
            if (a[4] < b[4]) {
                return 1;
            }
            if (a[4] > b[4]) {
                return -1;
            }
            else
                return 0;
        }
        )
        console.log(output);
        for(var i =0 ; i < 4 ; i++)
        {
            for(var j =0 ; j < 5; j ++)
            {
                console.log(allbox[i][j] , output[i][j]);
                allbox[i][j].textContent = output[i][j]
            }
        }

    });
