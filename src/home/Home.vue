<template>
  <main>
    <mq-layout mq="sm">
      <Nav />
      <Header />
    </mq-layout>
    <mq-layout mq="md+">
      <Nav />
      <Header />
    </mq-layout>
  </main>
</template>

<script>
  import Header from '../header/Header.vue'
  import Nav from '../nav/Nav.vue'

  export default {
    name: 'Home',
    components: {
      Header,
      Nav
    }
  }
</script>

<style scope>

</style>
