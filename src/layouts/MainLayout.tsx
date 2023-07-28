import ReduxProvider from "@/redux/provider"
import React from "react"

interface Props {
  children: React.ReactNode
  withRedux?: boolean
}

const MainLayout = ({ children, withRedux }: Props): React.ReactElement => (
  <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
    {withRedux ? (
      <ReduxProvider>{children}</ReduxProvider>
    ) : children}
  </main>
)

export default MainLayout
