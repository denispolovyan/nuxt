<template>
  <div>
    <HeaderNavbar />
    <div class="app-container">
      <nuxt />
    </div>
  </div>
</template>

<style>
div#__nuxt,
#__layout,
#__layout > div,
#app {
  min-height: 100vh;
}
.app-container{
	min-height: calc(100vh - 60px);
}
</style>
