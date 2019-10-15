app.get('/changeolsextremadura/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(olsextremadura[req.params.id].kml))
    form.submit('http://'+process.env.API_IP+':'+process.env.API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.API_IP+':'+process.env.API_PORT+'/kml/manage/initTour/Orbit')
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
