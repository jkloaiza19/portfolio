import React from "react"
import type { PropsWithChildren } from "react"
import { useSession } from "next-auth/react"
import ReduxProvider from "@/redux/provider"

// components
import NavBar from "node_modules/components/NavBar"

interface LayoutProps {
  children: React.ReactNode
  withRedux?: boolean
}

const MainLayout = (props: PropsWithChildren<LayoutProps>): React.ReactElement => (
  <main className="layout">
    {useSession()?.data && <NavBar />}
    {props.withRedux ? (
      <ReduxProvider>{props.children}</ReduxProvider>
    ) : props.children}
  </main>
)

export default MainLayout
