<template>
  <v-app>

    <Navbar />

    <v-content class="green lighten-5">
      <!--<HelloWorld/>-->
      <v-container>
        
        <router-view></router-view>

      </v-container>
    </v-content>

  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    //HelloWorld
    Navbar
  },// END-components
  data () {
    return {
      //
    }
  },// END-data
}// END-export

</script>
