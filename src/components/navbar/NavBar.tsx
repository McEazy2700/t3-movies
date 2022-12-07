import React from 'react'
import NavBrand from '@components/navbar/NavBrand'
import MenuButton from '@components/common/buttons/MenuButton'
import SearchInput from '@components/movie/search/SearchInput'

interface NavBarProps {
  handleSideBar?: () => void
}
const NavBar = (props: NavBarProps) => {
  const { handleSideBar } = props
  return (
    <nav className='bg-dark-2 justify-between fixed top-0 z-[1000] w-screen shadow-md shadow-black/60 max-h-14 py-2 flex items-center rounded-b-md'>
      <div className='flex gap-3 items-center'>
          <NavBrand />
          <SearchInput />
      </div>
      <MenuButton onClick={handleSideBar}/>
    </nav>
  )
}

export default NavBar
