<template>
  <div id="app"> 
    <Navbar />
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar';

export default {
  data() {
    return {

    }
  },
  components: {
    Navbar
  }
}
</script>
<style lang="scss">

</style>
