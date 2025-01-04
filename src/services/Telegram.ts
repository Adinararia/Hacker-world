import WebApp from '@twa-dev/sdk'
import type { WebAppUser } from '@twa-dev/types'

// export interface UserDataTelegram {
//   full_name: string | undefined
//   photo_url: string | undefined
// }

// export const userData = (): UserDataTelegram | undefined => {
//   console.log(WebApp.initDataUnsafe.user?.first_name)
//   const userTelegram = WebApp.initDataUnsafe.user

//   if (typeof userTelegram === 'undefined') {
//     return undefined
//   }

//   const user: UserDataTelegram = {
//     full_name: userTelegram.first_name + ' ' + userTelegram.last_name,
//     photo_url: userTelegram.photo_url,
//   }

//   return user
// }

export const getUserData = ():
  | (WebAppUser & {
      added_to_attachment_menu?: boolean
      allows_write_to_pm?: boolean
    })
  | undefined => {
  return WebApp.initDataUnsafe?.user
}
