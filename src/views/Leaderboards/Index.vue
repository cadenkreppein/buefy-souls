<template>
  <keep-alive include="games">
    <main>
      <navbar class="is-primary" />
      <router-view :key="$router.fullPath" class="main-content" />
    </main>
  </keep-alive>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;

  .main-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
}
</style>
