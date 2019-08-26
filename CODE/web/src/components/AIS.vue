<template>
  <v-container fluid>
    <v-layout align-center justify-center row wrap>
      <h1 style="color:#3F51B5;font-family:roboto;font-size:350%;font-weight:700">AERONAUTICAL INFORMATION SERVICES</h1>
    </v-layout>
  <v-layout align-center justify-center row wrap>
    <v-flex lg5 v-for="chart in charts">
       <v-card  v-bind:key="chart.id" class="xxx indigo elevation-20">
          <img
            class="white--text"
            aspect-ratio = 4/3
            width="100%"
            :src= "chart.cover">
            <v-container fill-height fluid grid-list-xl>
              <v-layout fill-height>
                <v-flex align-end flexbox >
                  <span class="white--text display-1 font-weight-bold justify-center align-center" >{{ chart.name }} </span>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-actions class="align-center justify-space-around">
            <v-btn class ="elevation-20 mb-3" color="yellow darken-4" @click="sendOverlay(chart.id)" >LAUNCH CHART</v-btn>
            <!-- <v-btn flat color="orange">Explore</v-btn> -->
          </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<style>
.xxx{
    margin: 20px;
}
</style>

<script>
import axios from 'axios'
require('dotenv').config()
export default {
  data: () => {
    return {
      charts: []
    }
  },
  mounted () {
    console.log('ready')
    console.log(process.env.VUE_APP_SERVER_IP)
    var vm = this
    var myUrl = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/getCharts/'
    axios({

      method: 'GET',
      url: myUrl
    })
      .then(function (response) {
        console.log(response.data[0])
        vm.charts = response.data
      })

  },
  methods: {
    sendOverlay (id) {
      var myUrl = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/changeCharts/' + id
      var APIurl = 'http://' + process.env.VUE_APP_API_IP + ':' + process.env.VUE_APP_API_PORT + '/kml/manage/clean'
      axios({

        method: 'GET',
        url: APIurl
      })
        .then(function (response) {
          axios({

            method: 'GET',
            url: myUrl
          })
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
