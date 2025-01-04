<script setup lang="ts"></script>

<template>
  <main>
    <div class="home-container">
      <div class="home-list-container">
        <div class="home-item"><span>SUKA</span></div>
        <div class="home-item"><span>YA</span></div>
        <div class="home-item"><span>NENAVIJU</span></div>
        <div class="home-item"><span>EBANIY</span></div>
        <div class="home-item"><span>JAVASCRIPT</span></div>
      </div>
    </div>
  </main>
</template>

<style>
.home-list-container {
  position: absolute;
  top: 50%; /* Отступ сверху */
  left: 50%; /* Отступ слева */
  width: 60vw;
  transform: translate(-50%, -50%); /* Центрируем по обоим осям */
  text-align: center; /* Центрируем текст по горизонтали */
}
.home-item {
  border-radius: 40px;
  display: flex;
  margin-top: 2vh;
  color: white;
  width: 100%;
  background: linear-gradient(rgb(23, 23, 27), rgb(12, 10, 10));
  opacity: 94%;
  height: 5vh;
  justify-content: center; /* Центрируем текст по горизонтали */
  align-items: center; /* Центрируем текст по вертикали */
}
</style>
