<template>
  <v-container fluid>
    <!-- Si no va treure el seguent layout -->
    <v-layout>
      <v-flex>
        <h1 style="color:#3F51B5;font-family:roboto;font-size:350%;font-weight:700">PROJECT WING</h1>
      </v-flex>
    </v-layout>
    <v-layout  align-center>
      <v-flex lg7>
            <img
          src="@/assets/wing.png"
          ></img>
      </v-flex>
      <v-flex ma-5>
          <img
        src="@/assets/LogoWing.png"
        width="500px"
        ></img>
        <v-btn  dark block class="indigo" outlined large @click="submitWing()">LAUNCH DEMO</v-btn>
        <v-btn  dark block class="red" outlined large @click="kill()">STOP</v-btn>
     </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    submitWing () {
      var url = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/submitWing'
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
    kill () {
      var myUrl = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/stop'
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

<style>
</style>
