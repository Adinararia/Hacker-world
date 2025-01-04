<script setup lang="ts">
const rivals = [
  { id: 1, name: 'Vasya', chance: 59, reward: 4 },
  { id: 2, name: 'Lesha', chance: 45, reward: 5 },
  { id: 2, name: 'Sanya', chance: 80, reward: 1 },
]
</script>

<template>
  <main>
    <div class="home-container">
      <div class="home-info">
        <span>TODO Need Proggress bar, for execute hacking</span>
      </div>
      <div class="home-info">
        <span>Select your oponent for hack</span>
      </div>
      <div class="home-list-container">
        <!-- need select list oponents -->
        <div class="home-item" v-for="rival in rivals" :key="rival.id">
          <div class="home-item-content">
            <div class="home-item-info__name">{{ rival.name }}</div>
            <div class="home-item-info-numbers">
              <span class="home-item-info__chance">Chance: {{ rival.chance }} %</span>
              <span class="home-item-info__reward">Reward: {{ rival.reward }} $HACK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.home-container {
  position: absolute;
  top: 50%; /* Отступ сверху */
  left: 50%; /* Отступ слева */
  width: 60vw;
  transform: translate(-50%, -50%); /* Центрируем по обоим осям */
}
.home-item {
  border-radius: 40px;
  margin-top: 2vh;
  width: 100%;
  background: linear-gradient(rgb(23, 23, 27), rgb(12, 10, 10));
  align-content: center;
  opacity: 94%;
  height: 8vh;
}

.home-info {
  justify-content: center; /* Центрируем текст по горизонтали */
  align-items: center; /* Центрируем текст по вертикали */
  display: flex;
  font-size: 22px;
}

.home-item-content {
  display: flex;
  align-items: center; /* Центрируем по вертикали */
  justify-content: space-between; /* Имя справа, числа слева */
  justify-items: center;
  padding-left: 20px;
  padding-right: 20px;
}

.home-item-info-numbers {
  display: flex;
  flex-direction: column; /* Числа располагаются друг под другом */
  gap: 3px; /* Отступ между числами */
  align-content: center;
}

.home-item-info__name {
  font-weight: bold;
}

.home-item-info__chance,
.home-item-info__reward {
  color: #ffffff;
}
</style>
