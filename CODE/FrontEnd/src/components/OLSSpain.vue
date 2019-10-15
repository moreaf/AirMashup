<template>
  <v-container fluid>
    <v-layout align-center justify-center row wrap>
      <h1 style="color:#3F51B5;font-family:roboto;font-size:350%;font-weight:700">SPANISH AUTONOMOUS REGIONS</h1>
    </v-layout>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 lg7 >
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">ANDALUCÍA</div>
            </template>
            <v-card>
              <img
              aspect-ratio = 4/3
              width="100%"
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn to=/olsandalucia class ="elevation-20 " color="yellow darken-4" @click="initOrbit('test')" >SEE MORE</v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 lg7 >
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">ARAGÓN</div>
            </template>
            <v-card>
              <img
              aspect-ratio = 4/3
              width="100%"
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn to=/olsaragon class ="elevation-20 " color="yellow darken-4" @click="initOrbit('test')" >SEE MORE</v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 lg7 >
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">ASTURIAS</div>
            </template>
            <v-card>
              <img
              aspect-ratio = 4/3
              width="100%"
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn to=/olsasturias class ="elevation-20 " color="yellow darken-4" @click="initOrbit('test')" >SEE MORE</v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 lg7 >
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">BALEARIC ISLANDS</div>
            </template>
            <v-card>
              <img
              aspect-ratio = 4/3
              width="100%"
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn to=/olsbalears class ="elevation-20 " color="yellow darken-4" @click="initOrbit('test')" >SEE MORE</v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 lg7 >
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">BASQUE COUNTRY</div>
            </template>
            <v-card>
              <img
              aspect-ratio = 4/3
              width="100%"
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn to=/olsbasque class ="elevation-20 " color="yellow darken-4" @click="initOrbit('test')" >SEE MORE</v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 lg7 >
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">CANARY ISLANDS</div>
            </template>
            <v-card>
              <img
              aspect-ratio = 4/3
              width="100%"
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn to=/olscanary class ="elevation-20 " color="yellow darken-4" @click="initOrbit('test')" >SEE MORE</v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 lg7 >
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">CANTABRIA</div>
            </template>
            <v-card>
              <img
              aspect-ratio = 4/3
              width="100%"
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn to=/olscantabria class ="elevation-20 " color="yellow darken-4" @click="initOrbit('test')" >SEE MORE</v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 lg7 >
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">CASTILLA Y LEÓN</div>
            </template>
            <v-card>
              <img
              aspect-ratio = 4/3
              width="100%"
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn to=/olscastillaleon class ="elevation-20 " color="yellow darken-4" @click="initOrbit('test')" >SEE MORE</v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 lg7 >
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">CASTILLA Y LA MANCHA</div>
            </template>
            <v-card>
              <img
              aspect-ratio = 4/3
              width="100%"
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn to=/olscastillamancha class ="elevation-20 " color="yellow darken-4" @click="initOrbit('test')" >SEE MORE</v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 lg7 >
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">CATALUNYA</div>
            </template>
            <v-card>
              <img
              aspect-ratio = 4/3
              width="100%"
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn to=/olscatalunya class ="elevation-20 " color="yellow darken-4" @click="initOrbit('test')" >SEE MORE</v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 lg7 >
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">CEUTA</div>
            </template>
            <v-card>
              <img
              aspect-ratio = 4/3
              width="100%"
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn to=/olsceuta class ="elevation-20 " color="yellow darken-4" @click="initOrbit('test')" >SEE MORE</v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 lg7 >
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">EXTREMADURA</div>
            </template>
            <v-card>
              <img
              aspect-ratio = 4/3
              width="100%"
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn to=/olsextremadura class ="elevation-20 " color="yellow darken-4" @click="initOrbit('test')" >SEE MORE</v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 lg7 >
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">GALICIA</div>
            </template>
            <v-card>
              <img
              aspect-ratio = 4/3
              width="100%"
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn to=/olsgalicia class ="elevation-20 " color="yellow darken-4" @click="initOrbit('test')" >SEE MORE</v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 lg7 >
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">MADRID</div>
            </template>
            <v-card>
              <img
              aspect-ratio = 4/3
              width="100%"
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn to=/olsmadrid class ="elevation-20 " color="yellow darken-4" @click="initOrbit('test')" >SEE MORE</v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 lg7 >
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">MELILLA</div>
            </template>
            <v-card>
              <img
              aspect-ratio = 4/3
              width="100%"
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn to=/olsmelilla class ="elevation-20 " color="yellow darken-4" @click="initOrbit('test')" >SEE MORE</v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 lg7 >
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">NAVARRA</div>
            </template>
            <v-card>
              <img
              aspect-ratio = 4/3
              width="100%"
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn to=/olsnavarra class ="elevation-20 " color="yellow darken-4" @click="initOrbit('test')" >SEE MORE</v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex xs12 lg7 >
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <div class="display-1 font-weight-bold white--text">LA RIOJA</div>
            </template>
            <v-card>
              <img
              aspect-ratio = 4/3
              width="100%"
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-btn to=/olsrioja class ="elevation-20 " color="yellow darken-4" @click="initOrbit('test')" >SEE MORE</v-btn>
              </v-card-actions>
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
    }
  }
}
</script>
