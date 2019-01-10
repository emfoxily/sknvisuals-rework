<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  @font-face {
    font-family: 'bebas';
    src: url('./assets/fonts/bebasneue_book-webfont.woff2') format('woff2'), url('./assets/fonts/bebasneue_book-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-image: url('./assets/darkerwood.png');
    background-attachment: fixed;
  }
</style>
