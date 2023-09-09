<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Header from "../components/Header.vue";

const store = useStore();
const router = useRouter();
</script>
<template>
  <h1>CreateTask.vue</h1>
</template>
