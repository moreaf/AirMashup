<template>
  <v-footer
    height="auto"
    color="white">
    <v-content>
      <v-layout
        align-center
        justify-space-between
        row>
          <v-flex ma-3 ml-5>
            <img src="@/assets/logoAM.png" width = '80%' aspect-ratio=1.7>
          </v-flex>
          <v-flex>
            <img src="@/assets/lg.png" width = '35%' aspect-ratio=1.7>
          </v-flex>
          <v-flex xs3>
            <img src="@/assets/lglab.png" width="90%" >
          </v-flex >
          <v-flex xs3>
            <img src="@/assets/ticlab.png" width ="55%">
          </v-flex>
          <v-flex xs3>
            <img src="@/assets/pcital.png" width="70%">
          </v-flex >
          <v-flex xs3>
            <img src="@/assets/gsoc.png" width="85%">
          </v-flex >
          <v-flex xs3 mr-5>
            <img src="@/assets/lgeu.png" width="80%">
          </v-flex>
      </v-layout>
      <v-layout
        justify-center
        row
        wrap
      >
        <v-flex
          indigo
          py-3
          text-xs-center
          white--text
          lg12
        >
          &copy;2019 — <strong>Liquid Galaxy Lab</strong>
        </v-flex>
      </v-layout>
    </v-content>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
  })
}
</script>
