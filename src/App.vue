<template>
  <keep-alive include="home">
    <router-view class="root" />
  </keep-alive>
</template>

<style lang="scss">
.root {
  min-height: 100vh;
}
</style>
