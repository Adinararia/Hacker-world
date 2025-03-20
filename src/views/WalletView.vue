<template>
  <main>
    <div class="container">
      <div id="connect-wallet"></div>
    </div>
  </main>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Центрирование по горизонтали */
  align-items: center; /* Центрирование по вертикали */
  height: 90vh; /* Высота контейнера на всю высоту экрана */
  height: calc(100vh - 11.5vh);
}
</style>
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { tonConnectUI } from '@/services/TonConnectUiService'
import { useTonServiceStorage } from '@/stores/TonServiceStorage'

const tonServiceStorage = useTonServiceStorage()
console.log(tonServiceStorage.tonBalance)
onMounted(async () => {
  await tonConnectUI.connectionRestored
  tonConnectUI.uiOptions = {
    buttonRootId: 'connect-wallet',
  }
})

onUnmounted(() => {
  tonConnectUI.uiOptions = {
    buttonRootId: null,
  }
})
</script>
