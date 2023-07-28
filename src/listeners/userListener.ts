import type { AppStartListening } from "./listenerMiddleware"
import {
  fetchUser,
  fetchUserFailure,
} from "../redux/user/slice"

export const userListeners = (startAppListening: AppStartListening) => {
  startAppListening({
    actionCreator: fetchUser,
    effect: async (_action, listenerApi) => {
      try {
        return await Promise.resolve()
      } catch(error) {
        listenerApi.dispatch(fetchUserFailure('response error'))
      }
    }
  })
}