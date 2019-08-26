<template>
  <v-container fluid>
  <v-layout align-center justify-center row wrap>
    <h1 style="color:#3F51B5;font-family:roboto;font-size:350%;font-weight:700">AIRSPACE</h1>
  </v-layout>
  <v-layout align-center justify-center row wrap>
    <v-flex lg5>
       <v-card class="xxx indigo elevation-20">
          <img
            class="white--text"
            aspect-ratio = 4/3
            width="100%"
            src= "@/assets/SSAA/OLScover.png">
            <v-container fill-height fluid grid-list-xl>
              <v-layout fill-height>
                <v-flex align-end flexbox >
                  <span class="white--text display-1 font-weight-bold justify-center align-center"> OBJECT LIMITANT SURFACES (OLS) </span>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-actions class="align-center justify-space-around">
              <v-btn to ="/ols" class ="elevation-20 mb-3" color="yellow darken-4">SEE MORE</v-btn>
          </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex lg5>
       <v-card class="xxx indigo elevation-20">
          <img
            class="white--text"
            aspect-ratio = 4/3
            width="100%"
            src= "@/assets/AIS/AIScover.png">
            <v-container fill-height fluid grid-list-xl>
              <v-layout fill-height>
                <v-flex align-end flexbox >
                  <span class="white--text display-1 font-weight-bold justify-center align-center"> AERONAUTICAL INFO SERVICES (AIS) </span>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-actions class="align-center justify-space-around">
              <v-btn to ="/ais" class ="elevation-20 mb-3" color="yellow darken-4">SEE MORE</v-btn>
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
    }
  }
}

</script>
