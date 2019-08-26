<template>
  <v-container fluid>
    <v-layout align-center justify-center row wrap>
      <h1 style="color:#3F51B5;font-family:roboto;font-size:350%;font-weight:700">INTERNATIONAL FLIGHT ROUTES</h1>
    </v-layout>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 lg7 mb-3>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            v-for="introute in introutes"
            v-bind:key="introute.id"
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">{{ introute.name }}</div>
            </template>
            <v-card>
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn class ="elevation-20 mb-1" color="yellow darken-4" @click="loadTour('test',41.398441,2.177510,1000000,introute.id)" >LAUNCH AIR ROUTE</v-btn>
                <v-btn class ="elevation-20 mb-1" color="yellow darken-4" @click="initOrbit('test')" >ORBIT</v-btn>
                <v-btn class ="elevation-20 mb-1" color="red" @click="stop()" >STOP</v-btn>
              </v-card-actions>
              <img
              aspect-ratio = 4/3
              width="100%"
              :src= "introute.img">
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
      introutes: []
    }
  },
  mounted () {
    console.log('ready')
    var vm = this
    var myUrl = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/getIntRoutes/'
    axios({

      method: 'GET',
      url: myUrl
    })
      .then(function (response) {
        console.log(response.data[0])
        vm.introutes = response.data
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
    orbit (name, lat, lon, range) {
      var myUrl = 'http://' + process.env.VUE_APP_API_IP + ':' + process.env.VUE_APP_API_PORT + '/kml/builder/orbit'
      console.log(myUrl)
      var form = new FormData()
      form.append('id', name)
      form.append('name', name)
      form.append('longitude', lon)
      form.append('latitude', lat)
      form.append('range', 100000)
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
    sendKML(id) {
      var myUrl = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/changeIntRoutes/' + id
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
      this.flyTo(2.177510,41.398441,5000000)
    },
    loadTour (name, lat, lon, range,introuteid) {
      this.orbit(name,lat,lon,range)
      this.sendKML(introuteid)
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
