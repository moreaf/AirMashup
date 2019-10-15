<template>
  <v-container wrap>
    <v-layout align-center justify-center row wrap>
      <h1 indigo style="font-family:roboto;font-size:350%;font-weight:700">LIVE AIR TRAFFIC</h1>
    </v-layout>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <h1 style="font-size:40px" class="white--text">DEMOs</h1>
            </template>
            <v-card>
              <v-card-actions class="align-center indigo lighten-1 justify-space-around">
                <v-layout justify-space-around>
                    </v-flex>
                      <v-flex lg3 mb-3 indigo lighten-1>
                            <v-btn color="#f07b3f" block dark large @click="sendGlobalKML()">LAUNCH GLOBAL DEMO</v-btn>
                            <v-flex xs12 mt-3>
                              <img src="@/assets/warning.png" width="90%" >
                            </v-flex >
                          </v-flex>
                          <v-flex lg3>
                                <v-btn color="#f07b3f" block dark large @click="sendKMLSpain()">LAUNCH SPAIN DEMO</v-btn>
                              </v-flex>
                          <v-flex  lg3>
                                <v-btn color="#ea5455" dark large block max-width=500 @click="stop()">STOP</v-btn>
                          </v-flex>
                        </v-layout>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <h1 class="white--text" style="font-size:40px" >SEARCH BY ZONE</h1>
            </template>
            <v-card>
              <v-card-actions class="indigo lighten-1">
                  <v-layout wrap justify-space-around>
                    <v-flex lg2 ma-3>
                      <v-text-field
                        v-model="minlat"
                        :rules="nameRules"
                        :counter="6"
                        label="Minimum latitude"
                        required
                        dark
                      ></v-text-field>
                    </v-flex>
                    <v-flex lg2 ma-3>
                      <v-text-field
                        v-model="maxlat"
                        :rules="nameRules"
                        :counter="6"
                        label="Maximum latitude"
                        required
                        dark
                      ></v-text-field>
                    </v-flex>
                    <v-flex lg2 ma-3>
                      <v-text-field
                        v-model="minlon"
                        :rules="nameRules"
                        :counter="6"
                        label="Minimum longitude"
                        required
                        dark
                      ></v-text-field>
                    </v-flex>
                    <v-flex lg2 ma-3>
                      <v-text-field
                        v-model="maxlon"
                        :rules="nameRules"
                        :counter="6"
                        label="Maximum longitude"
                        required
                        dark
                      ></v-text-field>
                    </v-flex>
                    <v-flex lg5 ma-3>
                          <v-btn color="yellow darken-4" block dark large @click="submitZone()">LAUNCH</v-btn>
                    </v-flex>
                    <v-flex lg5 ma-3>
                          <v-btn color="red" dark block large max-width=500 @click="stop()">STOP</v-btn>
                    </v-flex>
                    </v-layout>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <h1 style="font-size:40px" class="white--text">SEARCH BY ICAO24</h1>
            </template>
            <v-card>
              <v-card-actions class="align-center justify-center indigo lighten-1">
              <v-layout row wrap justify-space-around align-center>
                    <v-flex lg3>
                      <v-text-field
                        v-model="icao24"
                        :rules="icaoRules"
                        :counter="6"
                        label="Icao24 ID"
                        required
                        dark
                      ></v-text-field>
                    </v-flex>
                    <v-flex lg3>
                          <v-btn block color="yellow darken-4" dark large @click="submitIcao()">LAUNCH</v-btn>
                    </v-flex>
                    <v-flex lg3>
                          <v-btn block color="red" dark large max-width=500 @click="stop()">STOP</v-btn>
                    </v-flex>
                  </v-layout>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <h1 style="font-size:40px" class="white--text">SEARCH BY CALLSIGN</h1>
            </template>
            <v-card>
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-layout justify-space-around>
                    <v-flex lg3>
                      <v-text-field
                        v-model="callsign"
                        :rules="callsignRules"
                        :counter="7"
                        label="Callsign"
                        dark
                      ></v-text-field>
                    </v-flex>
                      <v-flex lg3>
                        <div class="text-xs-center">
                            <v-btn color="yellow darken-4" block dark large @click="submitCallsign()">LAUNCH</v-btn>
                          </div>
                          </v-flex>
                          <v-flex  lg3>
                                <v-btn color="red" dark large block max-width=500 @click="stop()">STOP</v-btn>
                          </v-flex>
                        </v-layout>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            class="indigo lighten-1">
            <template v-slot:header>
              <h1 style="font-size:40px" class="white--text">SEARCH BY AIRLINE</h1>
            </template>
            <v-card>
              <v-card-actions class="align-center justify-space-around indigo lighten-1">
                <v-layout ma-2 row justify-space-around>
                    <v-flex ml-4 mr-4 lg2>
                      <v-text-field
                        v-model="airline"
                        :rules="companyRules"
                        :counter="3"
                        label="Airline ICAO Code"
                        required
                        dark
                      ></v-text-field>
                    </v-flex>
                    <v-select label="Select an existing airline" ml-3 lg3 dark :items="companies" v-model="value"></v-select>
                      <v-flex lg3 ma-3>

                            <v-btn block color="yellow darken-4" dark large @click="submitCompanies()">LAUNCH</v-btn>
                          </v-flex>

                          <v-flex lg3 ma-3>
                                <v-btn color="red" block dark large max-width=500 @click="stop()">STOP</v-btn>
                          </v-flex>
                        </v-layout>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-layout align-center justify-space-around>
          <v-flex xs6 mt-5>
            <h2> Data provided by: </h2>
            <img src="@/assets/openskynetwork.png" width="90%" >
          </v-flex >
        </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import Airlines from '@/assets/AIRLINES/airlines.json'
export default {
  data: () => ({
    companies: [],
    airlines : Airlines,
    value: '',
    valid: false,
    minlat: '',
    maxlat: '',
    minlon: '',
    maxlon: '',
    icao24: '',
    callsign: '',
    airline: '',
    nameRules: [
      v => !!v || 'Coordinate is required',
      v => v.length <= 6 || 'Coordinate must be less than 6 characters'
    ],
    callsignRules: [
      v => !!v || 'Callsign is required',
      v => v.length <= 7 || 'Coordinate must be less than 7 characters'
    ],
    icaoRules: [
      v => !!v || 'Icao24 is required',
      v => v.length <= 6 || 'Coordinate must be less than 6 characters'
    ],
    companyRules: [
      v => !!v || 'Airline ICAO code is required',
      v => v.length <= 3 || 'Coordinate must be less than 3 characters'
    ]

  }),
  mounted () {
    var vm = this
    console.log('ready')
    console.log(this.airlines[0].name)
    this.airlines.forEach(function(al){
      vm.companies.push(al.name)
    })
  },
  methods: {
    flyTo (lon, lat) {
      var myUrl = 'http://' + process.env.VUE_APP_API_IP + ':' + process.env.VUE_APP_API_PORT + '/kml/flyto/' + lon + '/' + lat + '/50000'
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
    openBalloon (placemarkid) {
      var myUrl = 'http://' + process.env.VUE_APP_API_IP + ':' + process.env.VUE_APP_API_PORT + '/kml/manage/balloon/' + placemarkid + '1'
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
    sendKMLSpain () {
      var myUrl = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/sendAircraftSpain/'
      axios({

        method: 'GET',
        url: myUrl
      })
        .then(function (response) {
          console.log(response)
          console.log('request done')
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    sendGlobalKML () {
      var myUrl = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/sendGlobalAircraft/'
      axios({

        method: 'GET',
        url: myUrl
      })
        .then(function (response) {
          console.log(response)
          console.log('request done')
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    sendKML () {
      var myUrl = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/sendAircraft/' + minlat + '/' + maxlat + '/' + minlon + '/' + maxlon
      axios({

        method: 'GET',
        url: myUrl
      })
        .then(function (response) {
          console.log(response)
          console.log('request done')
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    stop () {
      var myUrl = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/stop'
      axios({

        method: 'GET',
        url: myUrl
      })
        .then(function (response) {
          console.log(response)
          console.log('request done')
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    submitZone () {
      var urlFormPost = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/sendAircraftZone'
      var form = new FormData()
      form.append('minlat', this.minlat)
      form.append('maxlat', this.maxlat)
      form.append('minlon', this.minlon)
      form.append('maxlon', this.maxlon)

      axios({
        method: 'POST',
        url: urlFormPost,
        data: form
      }).then(function (response) {
        console.log(response.data)
      })
    },
    submitIcao () {
      var urlFormPost = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/sendAircraftIcao'
      var form = new FormData()
      form.append('icao24', this.icao24)
      axios({
        method: 'POST',
        url: urlFormPost,
        data: form
      }).then(function (response) {
        console.log(response.data)
      })
    },
    submitCallsign () {
      var urlFormPost = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/sendAircraftCallsign'
      var form = new FormData()
      form.append('callsign', this.callsign)
      console.log(this.callsign, this.lon, this.lat, this.range)
      axios({
        method: 'POST',
        url: urlFormPost,
        data: form
      }).then(function (response) {
        console.log(response.data)
      })
      this.flyTo(this.lon, this.lat, this.range)
      this.openBalloon(name)
    },
    submitCompanies () {
      var urlFormPost = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/sendAircraftCompanies'
      var form = new FormData()
      form.append('callsign', this.airline)
      console.log(form)
      axios({
        method: 'POST',
        url: urlFormPost,
        data: form
      }).then(function (response) {
        console.log(response.data)
      })
    }
  },
  watch: {
    value: function (newa){
      var vm = this
      this.airlines.forEach(function(al){
        console.log(al,"al")
        console.log(newa, al.name)
        if(al.name == newa){
          vm.airline = al.callsign
        }

      })
      console.log(vm.airline)
    }
  }
}
</script>
