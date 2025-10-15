import { MenuIcon } from 'lucide-react'
import { useState } from 'react'
import { menuItems } from '../constants'
import { FaBehance, FaDribbble } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const iconSize = 18

  return (
    <div className='p-5 z-10'>
      <div className='hidden md:flex justify-center mt-8'>
        {/* Large devices */}
        <ul className='flex gap-12 items-center text-white'>
          {menuItems.map((item, index) => (
            <li key={index} className='cursor-pointer hover:text-gray-200'>
              <a href={item.url}>
                {item.name == 'dribbble' ? (
                  <FaDribbble size={iconSize} />
                ) : item.name == 'behance' ? (
                  <FaBehance size={iconSize} />
                ) : (
                  item.name
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='md:hidden flex justify-end'>
        <MenuIcon
          size={30}
          className='text-white drop-shadow-md'
          onClick={() => setIsOpen(!isOpen)}
        />

        <MobileMenu isOpen={isOpen} />
      </div>
    </div>
  )
}

export default Header

const MobileMenu = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } absolute right-6 top-16 bg-white shadow-sm rounded-sm`}
    >
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className='cursor-pointer hover:bg-gray-200 px-5 py-1'
          >
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
