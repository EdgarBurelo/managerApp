<template>
  <v-app>
   <Header />
    <v-content>
      <v-container>
      <router-view ></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from './views/generalComponents/Header'

export default {
  name: 'App',
  components: {
    Header,
  }
};
</script>

<style>
  .v-card {
    border-radius: 10px;
    padding: 15px;
  }

  .v-toolbar__content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4px 12px
  }

  .v-content__wrap{
    max-width: 1200px !important;
    margin: 0 auto;
    padding-top: 1em;
    padding-bottom: 2em;
  }
</style>
