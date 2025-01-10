<template>
  <main>
    <div class="container">
      <div id="connect-wallet"></div>
      Закончить с css, переменные, и body должен быть 100%, зафиксировать экран
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
import { onMounted } from 'vue'
import { THEME, TonConnectUI } from '@tonconnect/ui'
onMounted(() => {
  const tonConnectUI = new TonConnectUI({
    manifestUrl: 'https://adinararia.github.io/Hacker-world/manifest.json',
    buttonRootId: 'connect-wallet',
  })
  tonConnectUI.uiOptions = { language: 'ru', uiPreferences: { theme: THEME.DARK } }
})
</script>
