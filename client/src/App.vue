<template>
  <div>
    <!-- <img src="./assets/logo.png"> -->
    <transition
        name="fade"
        mode="out-in"
      >
        <router-view/>
    </transition>
  </div>
</template>

<script>
// import Drawer from '@/components/Drawer'
export default {
  name: 'App'
  // components: {Drawer}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
