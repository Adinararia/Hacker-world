<template>
  <header>
    <div class="header-container">
      <div class="header-score">1000 $HACKS</div>
      <div class="header-info">
        {{ userDataTelegram?.first_name + ' ' + userDataTelegram?.last_name }}
        <div class="header-img">
          <img :src="userDataTelegram?.photo_url" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { getUserData } from '../../services/Telegram'

const userDataTelegram = getUserData()
</script>

<style>
.header-container {
  border-radius: 200px;
  display: flex;
  flex-direction: row;
  align-items: center; /* Вертикальное выравнивание контента */
  color: #e2dbdb;
  height: var(--header-height);
  margin-top: var(--header-margin-top-height);
  opacity: 94%;
  background: linear-gradient(rgb(23, 23, 27), rgb(12, 10, 10));
}
.header-info {
  align-items: center; /* Вертикальное выравнивание контента */
  display: flex;
  justify-items: flex-end;
  gap: 10px;
  margin-left: auto;
}

.header-img {
  width: 40px; /* Ширина контейнера для изображения */
  height: 40px; /* Высота контейнера для изображения */
  overflow: hidden; /* Скрыть всё, что выходит за пределы контейнера */
  padding-left: 15px;
  padding-right: 10px;
  padding-bottom: 7px;
  padding-top: 7px;
}

.header-img img {
  border-radius: 50%; /* Сделать изображение круглым */
  width: 100%; /* Изображение будет растягиваться по ширине контейнера */
  height: 100%; /* Изображение будет растягиваться по высоте контейнера */
  object-fit: contain; /* Изображение будет заполненно, чтобы заполнить контейнер */
  image-rendering: optimizeQuality; /* для улучшения */
}
.header-score {
  margin-left: 5%;
}
</style>
