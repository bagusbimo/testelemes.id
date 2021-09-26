<template>
  <main>
    <top-nav />
    <router-view />
    <bottom-info />
    <copyright />
    <bottom-nav />
  </main>
</template>

<script>
import TopNav from "./components/TopNav.vue";
import BottomNav from "./components/BottomNav.vue";
import BottomInfo from "./components/BottomInfo.vue";
import Copyright from "./components/Copyright.vue";

export default {
  components: { TopNav, BottomNav, BottomInfo, Copyright },
};
</script>
