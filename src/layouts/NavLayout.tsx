import React from 'react'
import { AnimatePresence } from 'framer-motion'
import NavBar from '@components/navbar/NavBar'
import SideBar from '@components/sidebar/SideBar'

interface NavLayoutProps {
  children?: React.ReactElement | React.ReactNode
}
const NavLayout = (props: NavLayoutProps) => {
  const [sideOpen, setSideOpen] = React.useState(false)

  const handleSideBar = () => {
    if (sideOpen) {
      setSideOpen(false)
    }else {
      setSideOpen(true)
    }
  }

  const { children } = props
  return (
    <div className='flex flex-col mt-16'>
      <NavBar handleSideBar={handleSideBar} />
      <AnimatePresence>
        {sideOpen && <SideBar /> }
      </AnimatePresence>
      <div>
        {children}
      </div>
    </div>
  )
}

export default NavLayout
