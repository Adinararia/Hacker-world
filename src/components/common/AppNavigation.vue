<template>
  <router-link :to="{ name: 'home' }" class="footer-button" id="home-button">
    <img src="../icons/home.svg" alt="Home" class="footer-icon" />
    <span class="footer-text"> Home</span>
  </router-link>

  <router-link :to="{ name: 'friends' }" class="footer-button" id="frineds-button">
    <img src="../icons/friends.svg" alt="Friends" class="footer-icon" />
    <span class="footer-text"> Friends</span>
  </router-link>

  <router-link :to="{ name: 'wallet' }" class="footer-button" id="friends-button">
    <img src="../icons/wallet.svg" alt="Wallet" class="footer-icon" />
    <span class="footer-text">Wallet</span>
  </router-link>
</template>

<script setup lang="ts"></script>
