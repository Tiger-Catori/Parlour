import { useState } from "react";
import { NavLink } from "react-router";
import { FaComment, FaTimes, FaBars } from "react-icons/fa";

const NavbarComponent = () => {
  return (
    <>
      <Navbar/>
    </>
  )
}
export default NavbarComponent;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const base = 'transition hover:text-green-400';
  const active = 'text-green-400 font-semibold';
  return (
    <>
      <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <NavLink to='/' className='flex items-center gap-2 text-lg font-bold text-green-300'>
            <FaComment className="text-green-400 text-xl" />
            <span>Parlour</span>
          </NavLink>

          {/*Desktop Nav*/}
          <div className="hidden md:flex items-center gap-6">
            <div className="space-x-4 text-sm text-gray-300">
              <NavLink className={({isActive}) => isActive ? active: base} to='/'>Home</NavLink>
              <NavLink className={({isActive}) => isActive ? active: base} to='/projects'>Projects</NavLink>
              <NavLink className={({isActive}) => isActive ? active: base} to='/blog'>Blog</NavLink>
              <NavLink className={({isActive}) => isActive ? active: base} to='/about'>About</NavLink>
              <NavLink className={({isActive}) => isActive ? active: base} to='/contact'>Contact</NavLink>
            </div>
          </div>

          {/*Hamburger*/}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-green-400 text-xl cursor-pointer"
              title="Menu">
              { menuOpen ? <FaTimes/> : <FaBars/> }
            </button>
          </div>
        </div>
        {/*Mobile Nav*/}
        {
          menuOpen && (
            <div className="md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 space-y-2 space-x-4 text-center">
              <NavLink className={({isActive}) => isActive ? active: base} to='/'>Home</NavLink>
              <NavLink className={({isActive}) => isActive ? active: base} to='/projects'>Projects</NavLink>
              <NavLink className={({isActive}) => isActive ? active: base} to='/blog'>Blog</NavLink>
              <NavLink className={({isActive}) => isActive ? active: base} to='/about'>About</NavLink>
              <NavLink className={({isActive}) => isActive ? active: base} to='/contact'>Contact</NavLink>
            </div>
          )
        }

      </nav>
    </>
  )
}
