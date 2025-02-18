import { THEME, TonConnectUI, type WalletInfo } from '@tonconnect/ui'

export const tonConnectUI = new TonConnectUI({
  manifestUrl: 'https://adinararia.github.io/Hacker-world/manifest.json',
})

tonConnectUI.uiOptions = {
  language: 'ru',
  uiPreferences: { theme: THEME.DARK },
}

export type { WalletInfo }
