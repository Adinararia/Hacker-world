import { TonService } from '@/services/TonService'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTonServiceStorage = defineStore('useTonServiceStorage', () => {
  const tonService = new TonService('testnet')

  const constTextLog = () => {
    return tonService.textLog()
  }

  const tonBalance = ref(0)

  return { constTextLog, tonBalance }
})
