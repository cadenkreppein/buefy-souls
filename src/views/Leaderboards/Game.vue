<template>
  <div>
    <h1>Categories</h1>
    <ul>
      <li v-for="category in categories" :key="category.id">
        <router-link :to="`/leaderboards/${game.abbreviation}/${category.hash}`">{{ category.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Leaderboard from "@/components/Leaderboard.vue";
import { speedsouls } from "@/api";

export default {
  props: {
    // props from router
    abbreviation: {
      type: String,
      required: true
    }
  },
  components: {
    Leaderboard
  },
  asyncComputed: {
    game() {
      return speedsouls.getGame(this.abbreviation);
    },
  },
  computed: {
    categories() {
      return this.game ? this.game.categories : [];
    }
  }
};
</script>