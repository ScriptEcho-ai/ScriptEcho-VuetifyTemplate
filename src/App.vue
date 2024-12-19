<template>
<v-app>
    <v-main>
      <router-view />
    </v-main>

  </v-app>
  
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  data(){
    return {
    }
  },
  mounted(){
    setTimeout(() => {
      window.parent?.postMessage({ action: 'on-code-ok' }, '*');
    }, 5000);
  }
}
</script>

<style scoped>
</style>
