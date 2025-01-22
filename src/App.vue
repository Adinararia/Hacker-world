<script setup lang="ts">
import './assets/base.css'
import AppHeader from './components/common/AppHeader.vue'
import AppFooter from './components/common/AppFooter.vue'
</script>
<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>
