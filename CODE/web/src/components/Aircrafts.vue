  <template>
    <v-container fluid>
      <v-layout mb-3 align-center justify-center row wrap>
      <h1 style="color:#3F51B5;font-family:roboto;font-size:350%;font-weight:700">LIVE AIR TRAFFIC</h1>
    </v-layout>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="text-xs-center">
            <div>
              <v-btn color="indigo" dark large @click="sendKMLSpain()">LAUNCH SPAIN DEMO</v-btn>
            </div>
          </div>
          <v-layout mt-3 align-center justify-center row wrap>
            <h1 style="color:#3F51B5;font-family:roboto;font-size:250%;font-weight:400">SEARCH BY ZONE</h1>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-form id="nativeForm" v-model="valid">
      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex
            xs12
            md3
          >
            <v-text-field
              v-model="minlat"
              :rules="nameRules"
              :counter="6"
              label="Minimum latitude"
              required
            ></v-text-field>
          </v-flex>
          <v-flex
            xs12
            md3
          >
            <v-text-field
              v-model="maxlat"
              :rules="nameRules"
              :counter="6"
              label="Maximum latitude"
              required
            ></v-text-field>
          </v-flex>
          <v-flex
            xs12
            md3
          >
            <v-text-field
              v-model="minlon"
              :rules="nameRules"
              :counter="6"
              label="Minimum longitude"
              required
            ></v-text-field>
          </v-flex>
          <v-flex
            xs12
            md3
          >
            <v-text-field
              v-model="maxlon"
              :rules="nameRules"
              :counter="6"
              label="Maximum longitude"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="text-xs-center">
              <div>
                <v-btn color="indigo" dark large @click="submitZone()">LAUNCH</v-btn>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container fluid>
    </v-form>

    <v-layout xs12 align-center justify-space-around>
    <v-form id="nativeForm2" v-model="valid">
        <v-flex
          xs12
        >
        <v-select
              v-model="value"
              :items="test"
              label="Choose an airline"
            ></v-select>
          <v-text-field
            v-model="icao24"
            :rules="icaoRules"
            :counter="6"
            label="Icao24 ID"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <div class="text-xs-center">
            <div>
              <v-btn color="indigo" dark large @click="submitIcao()">LAUNCH</v-btn>
            </div>
          </div>
        </v-flex>
      </v-form>
  <v-form id="nativeForm3" v-model="valid">
      <h1 style="color:#3F51B5;font-family:roboto;font-size:250%;font-weight:400">SEARCH BY CALLSIGN</h1>
      <v-flex
        xs12
      >
        <v-text-field
          v-model="callsign"
          :rules="callsignRules"
          :counter="7"
          label="Callsign"
          required
        ></v-text-field>
      </v-flex>
        <v-flex xs12>
          <div class="text-xs-center">
              <v-btn color="indigo" dark large @click="submitCallsign()">LAUNCH</v-btn>
            </div>
            </v-flex>
          </v-form>
          <v-form id="nativeForm4" v-model="valid">
              <h1 style="color:#3F51B5;font-family:roboto;font-size:250%;font-weight:400">SEARCH BY AIRLINE</h1>
              <v-flex
                xs12
              >
                <v-text-field
                  v-model="airline"
                  :rules="companyRules"
                  :counter="3"
                  label="Airline ICAO Code"
                  required
                ></v-text-field>
              </v-flex>
                <v-flex xs12>
                  <div class="text-xs-center">
                      <v-btn color="indigo" dark large @click="submitCompanies()">LAUNCH</v-btn>
                    </div>
                    </v-flex>
                  </v-form>
        </v-layout>
        <v-layout>
          <v-flex ma-5 xs12>
                <v-btn color="red" dark large max-width=500 @click="stop()">STOP</v-btn>
          </v-flex>
        </v-layout>
    </v-container>
  </template>

<style media="screen">
</style>

<script>
import axios from 'axios'

export default {
  data: () => ({
    test: ['Foo', 'Bar', 'Fizz', 'Buzz'],
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
    console.log('ready')
    console.log(this.test)
  },
  methods: {
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
      axios({
        method: 'POST',
        url: urlFormPost,
        data: form
      }).then(function (response) {
        console.log(response.data)
      })
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
    value: function (old, newa) {
      console.log(newa, old)
      this.icao24 = companies[newa]
    }
  }
}
</script>
