<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <div class="app-container">
    <header class="pb-3">
      <Header />
    </header>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.app-container {
  display: grid;
  grid-template-rows: 0.1fr 1fr;
  height: 100%;
}
.fade-enter-active {
  transition: 0.5s;
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-active {
  transition: 0.5s;
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
</style>
