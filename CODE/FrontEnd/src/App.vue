<template>
  <v-app id="app" wrap>
    <app-toolbar></app-toolbar>
    <v-layout ma-3 row align-center>
      <v-flex lg12>
            <v-btn  color="red" dark large @click="stop()">CLEAN CURRENT VISUALIZATION</v-btn>
      </v-flex>

    </v-layout>
      <router-view/>
      <app-footer style=""> </app-footer>
  </v-app>
</template>

<script>
import AppFooter from './components/AppFooter'
import AppToolbar from './components/AppToolbar'
import Aircrafts from './components/Aircrafts'
import FlightRoutes from './components/FlightRoutes'
export default {
  name: 'App',
  components: { AppToolbar, AppFooter, Aircrafts, FlightRoutes },
  data: () => ({
  }),
  methods: {
    stopTour () {
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
    },
    stop () {
      var myUrl = 'http://' + process.env.VUE_APP_API_IP + ':' + process.env.VUE_APP_API_PORT + '/kml/manage/clean'
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
      this.stopTour()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
