<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { API } from '../api/api-common'
export default {
  name: 'about',
  data () {
    return {
      info: null,
    }
  },
  mounted () {
    this.getInfo();
  },
  methods:  {
    getInfo () {
      API.get().then(response => {
        this.info = response.data;
        // eslint-disable-next-line
        console.log(this.info);
      });
    }
  }
}
</script>