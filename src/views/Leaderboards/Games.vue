<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-mobile is-multiline">
          <div
            v-for="game in games"
            :key="game.id"
            class="column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-fullhd"
          >
            <game-card
              :game="game"
              :to="{
                name: 'game',
                params: { abbreviation: game.abbreviation }
              }"
            />
          </div>
        </div>
      </div>
    </section>
    <b-loading :is-full-page="false" :active="$asyncComputed.games.updating"></b-loading>
    <ss-footer />
  </div>
</template>

<script>
import GameCard from "@/components/GameCard.vue";
import { speedsouls } from "@/api";

export default {
  name: "games",
  components: {
    GameCard
  },
  asyncComputed: {
    games: {
      get() {
        return speedsouls.getGames();
      },

      default() {
        return [];
      }
    }
  },
};
</script>

<style lang="scss" scoped>
section {
  flex-grow: 1;
}
</style>
