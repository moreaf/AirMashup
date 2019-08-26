const express = require('express')
const FormData = require('form-data')
const fs = require('fs')
const app = express()
var axios = require('axios');
const http = require('http');
const request = require('request')
const exec = require('child_process').exec;
const execFile = require('child_process').execFile
const formparser = require('express-formidable');
app.use(formparser())
require('dotenv').config()

console.log(' ---- API ----')
console.log("IP",process.env.VUE_APP_VUE_APP_API_IP)
console.log("PORT",process.env.VUE_APP_VUE_APP_API_PORT)
console.log(' ---- server ----')
console.log("IP",process.env.VUE_APP_SERVER_IP)
console.log("PORT",process.env.VUE_APP_SERVER_PORT)

app.use('/',express.static('./'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var sendAir = []
var sendSRoutes = []
var sendCharts = []
var sroutes = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/ROUTES/sroutes.txt', 'utf8'));
var introutes = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/ROUTES/introutes.txt', 'utf8'));
var charts = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/AIS/charts.txt', 'utf8'));
var manufacturers = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/MANUFACTURERS/manufacturers.txt', 'utf8'));
var airbusModels = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/MANUFACTURERS/AIRBUS/models.txt', 'utf8'));
var boeingModels = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/MANUFACTURERS/BOEING/models.txt', 'utf8'));
var bombardierModels = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/MANUFACTURERS/BOMBARDIER/models.txt', 'utf8'));
var embraerModels = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/MANUFACTURERS/EMBRAER/models.txt', 'utf8'));
var olsandalucia = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/OLS/olsandalucia.txt', 'utf8'));
var olsaragon = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/OLS/olsaragon.txt', 'utf8'));
var olsasturias = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/OLS/olsasturias.txt', 'utf8'));
var olsbalears = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/OLS/olsbalears.txt', 'utf8'));
var olsbasque = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/OLS/olsbasque.txt', 'utf8'));
var olscanary = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/OLS/olscanary.txt', 'utf8'));
var olscantabria = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/OLS/olscantabria.txt', 'utf8'));
var olscastillaleon = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/OLS/olscastillaleon.txt', 'utf8'));
var olscastillamancha = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/OLS/olscastillamancha.txt', 'utf8'));
var olscatalunya = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/OLS/olscatalonia.txt', 'utf8'));
var olsceuta = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/OLS/olsceuta.txt', 'utf8'));
var olsgalicia = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/OLS/olsgalicia.txt', 'utf8'));
var olsmadrid = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/OLS/olsmadrid.txt', 'utf8'));
var olsmelilla = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/OLS/olsmelilla.txt', 'utf8'));
var olsnavarra = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/OLS/olsnavarra.txt', 'utf8'));
var olsrioja = JSON.parse(fs.readFileSync(__dirname.split('CODE')[0]+'/DATABASE/OLS/olsrioja.txt', 'utf8'));

app.get('/changeolsandalucia/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(olsandalucia[req.params.id].kml))
    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/Orbit')
      });
    })
    response.send("done")
})

app.get('/changeolsaragon/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(olsaragon[req.params.id].kml))
    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/Orbit')
      });
    })
    response.send("done")
})

app.get('/getolsaragon',function(req,res){
  renderolsaragon()
  .then(function(data){
    res.json(data)
  })
})

function renderolsaragon(){
  return new Promise(function(resolve,reject){
    var sendAir = []
    olsaragon.forEach(function(olsaragon){
      var data = fs.readFileSync(olsaragon.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAir.push({id: olsaragon.id, name: olsaragon.name,img:base64})
      console.log(olsaragon.name)
    })
    resolve(sendAir)
  })
}

app.get('/changeolsasturias/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(olsasturias[req.params.id].kml))
    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/Orbit')
      });
    })
    response.send("done")
})

app.get('/getolsasturias',function(req,res){
  renderolsasturias()
  .then(function(data){
    res.json(data)
  })
})

function renderolsasturias(){
  return new Promise(function(resolve,reject){
    var sendAir = []
    olsasturias.forEach(function(olsasturias){
      var data = fs.readFileSync(olsasturias.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAir.push({id: olsasturias.id, name: olsasturias.name,img:base64})
      console.log(olsasturias.name)
    })
    resolve(sendAir)
  })
}

app.get('/changeolsbalears/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(olsbalears[req.params.id].kml))
    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/Orbit')
      });
    })
    response.send("done")
})

app.get('/getolsbalears',function(req,res){
  renderolsbalears()
  .then(function(data){
    res.json(data)
  })
})

function renderolsbalears(){
  return new Promise(function(resolve,reject){
    var sendAir = []
    olsbalears.forEach(function(olsbalears){
      var data = fs.readFileSync(olsbalears.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAir.push({id: olsbalears.id, name: olsbalears.name,img:base64})
      console.log(olsbalears.name)
    })
    resolve(sendAir)
  })
}

app.get('/changeolsbasque/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(olsbasque[req.params.id].kml))
    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/Orbit')
      });
    })
    response.send("done")
})

app.get('/getolsbasque',function(req,res){
  renderolsbasque()
  .then(function(data){
    res.json(data)
  })
})

function renderolsbasque(){
  return new Promise(function(resolve,reject){
    var sendAir = []
    olsbasque.forEach(function(olsbasque){
      var data = fs.readFileSync(olsbasque.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAir.push({id: olsbasque.id, name: olsbasque.name,img:base64})
      console.log(olsbasque.name)
    })
    resolve(sendAir)
  })
}

app.get('/changeolscanary/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(olscanary[req.params.id].kml))
    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/Orbit')
      });
    })
    response.send("done")
})

app.get('/getolscanary',function(req,res){
  renderolscanary()
  .then(function(data){
    res.json(data)
  })
})

function renderolscanary(){
  return new Promise(function(resolve,reject){
    var sendAir = []
    olscanary.forEach(function(olscanary){
      var data = fs.readFileSync(olscanary.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAir.push({id: olscanary.id, name: olscanary.name,img:base64})
      console.log(olscanary.name)
    })
    resolve(sendAir)
  })
}

app.get('/changeolscantabria/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(olscantabria[req.params.id].kml))
    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/Orbit')
      });
    })
    response.send("done")
})

app.get('/getolscantabria',function(req,res){
  renderolscantabria()
  .then(function(data){
    res.json(data)
  })
})

function renderolscantabria(){
  return new Promise(function(resolve,reject){
    var sendAir = []
    olscantabria.forEach(function(olscantabria){
      var data = fs.readFileSync(olscantabria.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAir.push({id: olscantabria.id, name: olscantabria.name,img:base64})
      console.log(olscantabria.name)
    })
    resolve(sendAir)
  })
}

app.get('/changeolscastillaleon/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(olscastillaleon[req.params.id].kml))
    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/Orbit')
      });
    })
    response.send("done")
})

app.get('/getolscastillaleon',function(req,res){
  renderolscastillaleon()
  .then(function(data){
    res.json(data)
  })
})

function renderolscastillaleon(){
  return new Promise(function(resolve,reject){
    var sendAir = []
    olscastillaleon.forEach(function(olscastillaleon){
      var data = fs.readFileSync(olscastillaleon.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAir.push({id: olscastillaleon.id, name: olscastillaleon.name,img:base64})
      console.log(olscastillaleon.name)
    })
    resolve(sendAir)
  })
}

app.get('/changeolscastillamancha/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(olscastillamancha[req.params.id].kml))
    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/Orbit')
      });
    })
    response.send("done")
})

app.get('/getolscastillamancha',function(req,res){
  renderolscastillamancha()
  .then(function(data){
    res.json(data)
  })
})

function renderolscastillamancha(){
  return new Promise(function(resolve,reject){
    var sendAir = []
    olscastillamancha.forEach(function(olscastillamancha){
      var data = fs.readFileSync(olscastillamancha.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAir.push({id: olscastillamancha.id, name: olscastillamancha.name,img:base64})
      console.log(olscastillamancha.name)
    })
    resolve(sendAir)
  })
}

app.get('/changeolsceuta/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(olsceuta[req.params.id].kml))
    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/Orbit')
      });
    })
    response.send("done")
})

app.get('/getolsceuta',function(req,res){
  renderolsceuta()
  .then(function(data){
    res.json(data)
  })
})

function renderolsceuta(){
  return new Promise(function(resolve,reject){
    var sendAir = []
    olsceuta.forEach(function(olsceuta){
      var data = fs.readFileSync(olsceuta.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAir.push({id: olsceuta.id, name: olsceuta.name,img:base64})
      console.log(olsceuta.name)
    })
    resolve(sendAir)
  })
}

app.get('/changeolsextremadura/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(olsextremadura[req.params.id].kml))
    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/Orbit')
      });
    })
    response.send("done")
})

app.get('/getolsextremadura',function(req,res){
  renderolsextremadura()
  .then(function(data){
    res.json(data)
  })
})

function renderolsextremadura(){
  return new Promise(function(resolve,reject){
    var sendAir = []
    olsextremadura.forEach(function(olsextremadura){
      var data = fs.readFileSync(olsextremadura.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAir.push({id: olsextremadura.id, name: olsextremadura.name,img:base64})
      console.log(olsextremadura.name)
    })
    resolve(sendAir)
  })
}

app.get('/changeolsgalicia/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(olsgalicia[req.params.id].kml))
    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/Orbit')
      });
    })
    response.send("done")
})

app.get('/getolsgalicia',function(req,res){
  renderolsgalicia()
  .then(function(data){
    res.json(data)
  })
})

function renderolsgalicia(){
  return new Promise(function(resolve,reject){
    var sendAir = []
    olsgalicia.forEach(function(olsgalicia){
      var data = fs.readFileSync(olsgalicia.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAir.push({id: olsgalicia.id, name: olsgalicia.name,img:base64})
      console.log(olsgalicia.name)
    })
    resolve(sendAir)
  })
}

app.get('/changeolsmadrid/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(olsmadrid[req.params.id].kml))
    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/Orbit')
      });
    })
    response.send("done")
})

app.get('/getolsmadrid',function(req,res){
  renderolsmadrid()
  .then(function(data){
    res.json(data)
  })
})

function renderolsmadrid(){
  return new Promise(function(resolve,reject){
    var sendAir = []
    olsmadrid.forEach(function(olsmadrid){
      var data = fs.readFileSync(olsmadrid.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAir.push({id: olsmadrid.id, name: olsmadrid.name,img:base64})
      console.log(olsmadrid.name)
    })
    resolve(sendAir)
  })
}

app.get('/changeolsmelilla/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(olsmelilla[req.params.id].kml))
    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/Orbit')
      });
    })
    response.send("done")
})

app.get('/getolsmelilla',function(req,res){
  renderolsmelilla()
  .then(function(data){
    res.json(data)
  })
})

function renderolsmelilla(){
  return new Promise(function(resolve,reject){
    var sendAir = []
    olsmelilla.forEach(function(olsmelilla){
      var data = fs.readFileSync(olsmelilla.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAir.push({id: olsmelilla.id, name: olsmelilla.name,img:base64})
      console.log(olsmelilla.name)
    })
    resolve(sendAir)
  })
}

app.get('/changeolsnavarra/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(olsnavarra[req.params.id].kml))
    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/Orbit')
      });
    })
    response.send("done")
})

app.get('/getolsnavarra',function(req,res){
  renderolsnavarra()
  .then(function(data){
    res.json(data)
  })
})

function renderolsnavarra(){
  return new Promise(function(resolve,reject){
    var sendAir = []
    olsnavarra.forEach(function(olsnavarra){
      var data = fs.readFileSync(olsnavarra.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAir.push({id: olsnavarra.id, name: olsnavarra.name,img:base64})
      console.log(olsnavarra.name)
    })
    resolve(sendAir)
  })
}

app.get('/changeolsrioja/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(olsrioja[req.params.id].kml))
    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/Orbit')
      });
    })
    response.send("done")
})

app.get('/getolsrioja',function(req,res){
  renderolsrioja()
  .then(function(data){
    res.json(data)
  })
})

function renderolsrioja(){
  return new Promise(function(resolve,reject){
    var sendAir = []
    olsrioja.forEach(function(olsrioja){
      var data = fs.readFileSync(olsrioja.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAir.push({id: olsrioja.id, name: olsrioja.name,img:base64})
      console.log(olsrioja.name)
    })
    resolve(sendAir)
  })
}

app.get('/changeolscatalunya/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(olscatalunya[req.params.id].kml))
    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/builder/concatenate',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(4000).then(() => {
        request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/ols')
      });
    })
    response.send("done")
})

app.get('/getolscatalunya',function(req,res){
  renderolscatalunya()
  .then(function(data){
    res.json(data)
  })
})

function renderolscatalunya(){
  return new Promise(function(resolve,reject){
    var sendAir = []
    olscatalunya.forEach(function(olscatalunya){
      var data = fs.readFileSync(olscatalunya.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAir.push({id: olscatalunya.id, name: olscatalunya.name,img:base64})
      console.log(olscatalunya.name)
    })
    resolve(sendAir)
  })
}

app.get('/changeSRoutes/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(sroutes[req.params.id].kml))
    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/FollowPath')
      });


    })
    response.send("done")
})

app.get('/changeIntRoutes/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(introutes[req.params.id].kml))
    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/FollowPath')
      });


    })
    response.send("done")
})

app.get('/changeCharts/:id',function(req,response){
  var form = new FormData();
    form.append('img', fs.createReadStream(charts[req.params.id].img))
    form.append('name', charts[req.params.id].name)
    form.append('id', charts[req.params.id].name)
    form.append('fCorner', charts[req.params.id].fCorner)
    form.append('sCorner', charts[req.params.id].sCorner)
    form.append('tCorner', charts[req.params.id].tCorner)
    form.append('ftCorner', charts[req.params.id].ftCorner)


    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/builder/addPhoto')
    response.send("done")
})

app.get('/changeAirbusModels/:id',function(req,response){
  var form = new FormData();
    form.append('img', fs.createReadStream(charts[req.params.id].img))
    form.append('name', charts[req.params.id].name)
    form.append('id', charts[req.params.id].name)
    form.append('lat', charts[req.params.id].lat)
    form.append('lon', charts[req.params.id].lon)
    form.append('range', charts[req.params.id].range)
    form.append('des', charts[req.params.id].description)

    form.submit('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/builder/addPhoto')
    response.send("done")
})

app.get('/sendAircraftSpain/',function(req,response){
  var minlat = 36
  var maxlat = 44
  var minlon = -9
  var maxlon = 3
  const child = exec(`python3 AircraftZone.py ${minlat} ${maxlat} ${minlon} ${maxlon}`);
  response.send({message:"done"})
})

app.get('/sendGlobalAircraft/',function(req,response){
  const child = exec('python3 AircraftGlobal.py');
  response.send({message:"done"})
})

app.get('/submitWing/',function(req,response){
  const child = exec('python3 DroneWing.py');
  response.send({message:"done"})
})

app.get('/submitDemo/',function(req,response){
  const child = exec('python3 demo.py');
  response.send({message:"done"})
})

app.post('/sendAircraftZone',function(req,response){
  var minlat = req.fields.minlat || 36
  var maxlat = req.fields.maxlat || 44
  var minlon = req.fields.minlon || -9
  var maxlon = req.fields.maxlon || 3
  const child = exec(`python3 AircraftZone.py ${minlat} ${maxlat} ${minlon} ${maxlon}`);
  response.send({message:"done"})
})

app.post('/sendAircraftZone',function(req,response){
  var minlat = req.fields.minlat || 36
  var maxlat = req.fields.maxlat || 44
  var minlon = req.fields.minlon || -9
  var maxlon = req.fields.maxlon || 3
  const child = exec(`python3 AircraftZone.py ${minlat} ${maxlat} ${minlon} ${maxlon}`);
  response.send({message:"done"})
})

app.post('/sendAircraftIcao',function(req,response){
  var icao24 = req.fields.icao24 || "EMPTY"

  const child = exec(`python3 AircraftIcao24.py ${icao24}`);
  response.send({message:"done"})
})

app.post('/sendAircraftCallsign',function(req,response){
  var callsign = req.fields.callsign || "EMPTY"
  console.log(callsign)
  const child = exec(`python3 AircraftCallsign.py ${callsign}`);
  response.send({message:"done"})
})

app.post('/sendAircraftCompanies',function(req,response){
  var callsign = req.fields.callsign || "EMPTY"
  console.log(callsign)
  const child = exec(`python3 AircraftCompanies.py ${callsign}`);
  response.send({message:"done"})
})

app.get('/stop',function(req,response){
  const child = execFile('pkill', ['Python'])
  axios.get('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/clean')
    .catch(function(err){
      console.log(err)
    })
  response.send('killed')
})

app.get('/orbit',function(req,response){
      request('http://'+process.env.VUE_APP_API_IP+':'+process.env.VUE_APP_API_PORT+'/kml/manage/initTour/Orbit')
      response.send('done')
})


app.get('/getolsandalucia',function(req,res){
  renderolsandalucia()
  .then(function(data){
    res.json(data)
  })
})

app.get('/getSRoutes',function(req,res){
  renderSRoutes()
  .then(function(data){
    res.json(data)
  })
})

app.get('/getIntRoutes',function(req,res){
  renderIntRoutes()
  .then(function(data){
    res.json(data)
  })
})

app.get('/getCharts',function(req,res){
  renderCharts()
  .then(function(data){
    res.json(data)
  })
})

app.get('/getManufacturers',function(req,res){
  renderManufacturers()
  .then(function(data){
    res.json(data)
  })
})

app.get('/getAirbusModels',function(req,res){
  renderAirbusModels()
  .then(function(data){
    res.json(data)
  })
})

app.get('/getBoeingModels',function(req,res){
  renderBoeingModels()
  .then(function(data){
    res.json(data)
  })
})

app.get('/getBombardierModels',function(req,res){
  renderBombardierModels()
  .then(function(data){
    res.json(data)
  })
})

app.get('/getEmbraerModels',function(req,res){
  renderEmbraerModels()
  .then(function(data){
    res.json(data)
  })
})

function renderolsandalucia(){
  return new Promise(function(resolve,reject){
    var sendAir = []
    olsandalucia.forEach(function(olsandalucia){
      var data = fs.readFileSync(olsandalucia.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAir.push({id: olsandalucia.id, name: olsandalucia.name,img:base64})
      console.log(olsandalucia.name)
    })
    resolve(sendAir)
  })
}

function renderSRoutes(){
  return new Promise(function(resolve,reject){
    var sendSRoutes = []
    sroutes.forEach(function(sroute){
      var data = fs.readFileSync(sroute.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendSRoutes.push({id: sroute.id, name: sroute.name,img:base64})
    })
    resolve(sendSRoutes)
  })
}

function renderIntRoutes(){
  return new Promise(function(resolve,reject){
    var sendIntRoutes = []
    introutes.forEach(function(introute){
      var data = fs.readFileSync(introute.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendIntRoutes.push({id: introute.id, name: introute.name,img:base64})
    })
    resolve(sendIntRoutes)
  })
}

function renderCharts(){
  return new Promise(function(resolve,reject){
    var sendCharts = []
    charts.forEach(function(chart){
      var data = fs.readFileSync(chart.cover)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendCharts.push({id: chart.id, name: chart.name,cover:base64})
    })
    resolve(sendCharts)
  })
}

function renderManufacturers(){
  return new Promise(function(resolve,reject){
    var sendManufacturers = []
    manufacturers.forEach(function(manufacturer){
      var data = fs.readFileSync(manufacturer.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendManufacturers.push({id: manufacturer.id, name: manufacturer.name,img:base64,path:manufacturer.path})
    })
    resolve(sendManufacturers)
  })
}

function renderAirbusModels(){
  return new Promise(function(resolve,reject){
    sendAirbusModels=[]
    airbusModels.forEach(function(airbusModel){
      var data = fs.readFileSync(airbusModel.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAirbusModels.push({id: airbusModel.id, name: airbusModel.name,img:base64,lon:airbusModel.lon,lat:airbusModel.lat,range:airbusModel.range,description: fs.readFileSync(airbusModel.description).toString()})
    })
    resolve(sendAirbusModels)
  })
}

function renderBoeingModels(){
  return new Promise(function(resolve,reject){
    sendBoeingModels=[]
    boeingModels.forEach(function(boeingModel){
      var data = fs.readFileSync(boeingModel.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendBoeingModels.push({id: boeingModel.id, name: boeingModel.name,img:base64,lon:boeingModel.lon,lat:boeingModel.lat,range:boeingModel.range,description: fs.readFileSync(boeingModel.description).toString()})
    })
    resolve(sendBoeingModels)
  })
}

function renderBombardierModels(){
  return new Promise(function(resolve,reject){
    sendBombardierModels=[]
    bombardierModels.forEach(function(bombardierModel){
      var data = fs.readFileSync(bombardierModel.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendBombardierModels.push({id: bombardierModel.id, name: bombardierModel.name,img:base64,lon:bombardierModel.lon,lat:bombardierModel.lat,range:bombardierModel.range,description: fs.readFileSync(bombardierModel.description).toString()})
    })
    resolve(sendBombardierModels)
  })
}

function renderEmbraerModels(){
  return new Promise(function(resolve,reject){
    sendEmbraerModels=[]
    embraerModels.forEach(function(embraerModel){
      var data = fs.readFileSync(embraerModel.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendEmbraerModels.push({id: embraerModel.id, name: embraerModel.name,img:base64,lon:embraerModel.lon,lat:embraerModel.lat,range:embraerModel.range,description: fs.readFileSync(embraerModel.description).toString()})
    })
    resolve(sendEmbraerModels)
  })
}

app.listen(process.env.VUE_APP_API_PORT)
