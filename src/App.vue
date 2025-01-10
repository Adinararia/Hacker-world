<script setup lang="ts">
import AppHeader from './components/common/AppHeader.vue'
import './assets/base.css'
import AppFooter from './components/common/AppFooter.vue'
</script>
<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>
