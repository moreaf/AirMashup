<template>
  <v-container fluid>
    <v-layout align-center justify-center row wrap>
      <h1 style="color:#3F51B5;font-family:roboto;font-size:350%;font-weight:700">SPAIN FLIGHT ROUTES</h1>
    </v-layout>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 lg7 mb-3>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            v-for="sroute in sroutes"
            v-bind:key="sroute.id"
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">{{ sroute.name }}</div>
            </template>
            <v-card>
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn class ="elevation-20 mb-1" color="yellow darken-4" @click="sendKML(sroute.id)" >LAUNCH AIR ROUTE</v-btn>
                <v-btn class ="elevation-20 mb-1" color="yellow darken-4" @click="initOrbit('test')" >ORBIT</v-btn>
                <v-btn class ="elevation-20 mb-1" color="red" @click="stop()" >STOP</v-btn>
              </v-card-actions>
              <img
              aspect-ratio = 4/3
              width="100%"
              :src= "sroute.img">
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data: () => {
    return {
      sroutes: []
    }
  },
  mounted () {
    console.log('ready')
    var vm = this
    var myUrl = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/getSRoutes/'

    axios({

      method: 'GET',
      url: myUrl
    })
      .then(function (response) {
        console.log(response.data[0])
        vm.sroutes = response.data
      })
  },
  methods: {
    initOrbit (name) {
      var url = 'http://' + process.env.VUE_APP_API_IP + ':' + process.env.VUE_APP_API_PORT + '/kml/manage/initTour/' + name
      console.log('init orbit', url)
      axios({

        method: 'GET',
        url: url
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    orbit (name, lon, lat, range) {
      var myUrl = 'http://' + process.env.VUE_APP_API_IP + ':' + process.env.VUE_APP_API_PORT + '/kml/builder/orbit'
      console.log(myUrl)
      var form = new FormData()
      form.append('id', name)
      form.append('name', name)
      form.append('longitude', lat)
      form.append('latitude', lon)
      form.append('range', 10000)
      console.log(form.longitude)

      axios({

        method: 'POST',
        url: myUrl,
        data: form
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    flyTo (lon,lat,range) {
      var myUrl = 'http://' + process.env.VUE_APP_API_IP + ':' + process.env.VUE_APP_API_PORT + '/kml/flyto/' + lon + '/' + lat + '/'+range
      axios({

        method: 'GET',
        url: myUrl
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    sendKML (id) {
      var myUrl = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/changeSRoutes/' + id
      axios({

        method: 'GET',
        url: myUrl
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      this.flyTo(-3.02,40.49,500000)
      this.orbit(id,-3.02,40.49,500000)
    },
    loadTour (name, lat, lon, range,srouteid) {
      this.orbit(name,lat,lon,range)
      this.sendKML(srouteid)
    },
    stop () {
      var myUrl = 'http://' + process.env.VUE_APP_API_IP + ':' + process.env.VUE_APP_API_PORT + '/kml/manage/stoptour'
      axios({

        method: 'GET',
        url: myUrl
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
