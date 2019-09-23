<template>
  <v-app-bar app>
    <v-toolbar-title class="headline">
      <span>AMBOSS</span>
    </v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-toolbar-items>
      <!-- <v-btn :to="{path: '/'}" class="toolbar-btn" text>
        <span class="mr-2">Home</span>
      </v-btn> -->
      <v-btn :to="{path: '/'}" class="toolbar-btn" text>
        <span class="mr-2">Group Manager</span>
      </v-btn>
    </v-toolbar-items>
    
  </v-app-bar>
</template>

<script>
export default {
    name: 'Header'    
}
</script>

<style scoped>
  a {
    color:rgba(0, 0, 0, 0.5) !important;
    text-decoration: none
  }

</style>