import React from "react"
import { Provider } from "react-redux"
import store from './store'

interface Props {
  children: React.ReactNode
}

/**
 * The ReduxProvider component is a wrapper that provides the Redux store to its children
 * components in a TypeScript React application.
 * @param {Props}  - - `ReduxProvider`: The name of the functional component being defined.
 */
const ReduxProvider = ({ children }: Props): React.ReactElement => (
  <Provider store={store}>{children}</Provider>
)

export default ReduxProvider
