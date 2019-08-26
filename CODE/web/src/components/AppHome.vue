<template>
  <div>
    <v-content>
      <v-layout ma-5 row wrap align-center justify-center>
        <v-flex xs12>
          <div class="text-xs-center">
            <div>
              <v-btn color="indigo" dark large @click="submitDemo()">LAUNCH DEMO</v-btn>
              <v-btn class ="elevation-20 mb-1" color="red" dark large @click="kill()" >STOP</v-btn>
            </div>
          </div>
        </v-flex>
      </v-layout>
      <v-layout
        align-center
        justify-space-between
        row>
          <v-flex ma-3 ml-5>
            <img src="@/assets/logoAM.png" width = '50%' aspect-ratio=1.7>
          </v-flex>
      </v-layout>
    </v-content>
  </div>
</template>

<script>
export default {
  methods: {
    submitDemo () {
      var url = 'http://' + process.env.VUE_APP_SERVER_IP + ':' + process.env.VUE_APP_SERVER_PORT + '/submitDemo'
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

<style lang="css" scoped>
</style>
