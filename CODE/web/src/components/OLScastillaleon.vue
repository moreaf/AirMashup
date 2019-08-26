<template>
  <v-container fluid>
    <v-layout align-center justify-center row wrap>
      <h1 style="color:#3F51B5;font-family:roboto;font-size:350%;font-weight:700">OBJECT LIMITANT SURFACES</h1>
    </v-layout>
  <v-layout align-center justify-center row wrap>
    <v-flex lg3 v-for="olscastillaleon in olscastillaleons">
       <v-card  v-bind:key="olscastillaleon.id" class="xxx indigo elevation-20">
          <img
            class="white--text"
            aspect-ratio = 4/3
            width="100%"
            :src= "olscastillaleon.img">
            <v-container fill-height fluid grid-list-xl>
              <v-layout fill-height>
                <v-flex align-end flexbox >
                  <span class="white--text display-1 font-weight-bold justify-center align-center" >{{ olscastillaleon.name }} </span>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-actions class="align-center justify-space-around">
            <v-btn class ="elevation-20 mb-3" color="yellow darken-4" dark @click="sendKML(olscastillaleon.id)" >LAUNCH OLS</v-btn>
            <v-btn class ="elevation-20 mb-3" color="light-blue lighten-1" dark @click="orbit(olscastillaleon.id)" >ORBIT</v-btn>
            <v-btn class ="elevation-20 mb-3" color="red" dark @click="stop()" >STOP</v-btn>
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
export default {
  data: () => {
    return {
      olscastillaleons: []
    }
  },
  mounted () {
    console.log('ready')
    var vm = this
    var myUrl = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/getolscastillaleon/'
    axios({

      method: 'GET',
      url: myUrl
    })
      .then(function (response) {
        console.log(response.data[0])
        vm.olscastillaleons = response.data
      })
  },
  methods: {
    sendKML (id) {
      var myUrl = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/changeolscastillaleon/' + id
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
    orbit () {
      var myUrl = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/kml/builder/orbit/'
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
      var myUrl = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/kml/manage/stoptour'
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
