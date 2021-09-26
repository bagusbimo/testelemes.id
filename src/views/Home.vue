<template>
  <main>
    <hero />
    <category />
    <trending />
  </main>
</template>

<script>
import Hero from "../components/Hero.vue";
import Category from "../components/Category.vue";
import Trending from "../components/Trending.vue";

export default {
  components: { Hero, Category, Trending },
};
</script>
