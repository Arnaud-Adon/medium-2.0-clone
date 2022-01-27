import React, { PropsWithChildren, ReactElement } from 'react'
import Header from './Header'

interface Props {}

const Layout = ({ children }: PropsWithChildren<Props>): ReactElement => {
  return <div>{children}</div>
}

export default Layout
