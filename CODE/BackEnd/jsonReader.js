var fs = require('fs');


var airports1 = fs.readFileSync('/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/data.txt', 'utf8');
console.log(JSON.parse(airports1))


var  airports2 = [
            {id:0,name:'LLEIDA-ALGUAIRE AIRPORT', kml: '/Users/albert/Desktop/AirMashup_GSoC/web/src/assets/SSAA/LEBL.kml' , img: '/Users/albert/Desktop/AirMashup_GSoC/web/src/assets/AIRPORTS/LEDA.jpg'},
            {id:1, name:'BARCELONA-EL PRAT AIRPORT', kml: '/Users/albert/Desktop/AirMashup_GSoC/web/src/assets/SSAA/LEBL.kml', img: '/Users/albert/Desktop/AirMashup_GSoC/web/src/assets/AIRPORTS/LEBL.jpg' },
            {id:2, name:'BARCELONA-EL PRAT AIRPORT', kml: '/Users/albert/Desktop/AirMashup_GSoC/web/src/assets/SSAA/LEBL.kml', img: '/Users/albert/Desktop/AirMashup_GSoC/web/src/assets/AIRPORTS/LEBL.jpg' },
]


console.log(airports2)