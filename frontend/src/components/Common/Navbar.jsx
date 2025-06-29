import React, { useState } from 'react'
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import CartDrawer from './CartDrawer'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }
    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen);
    }
    return (
        <>
            <nav className='container flex items-center justify-between py-4 px-6'>
                {/* left - logo */}
                <div className="">
                    <Link to="/" className='text-2xl font-medium'>Rabbit</Link>
                </div>
                {/* Center - Navigation Links */}
                <div className="hidden md:flex space-x-6 relative">
                    <Link to="#" className='text-gray-700 hover:text-black hover:tracking-widest hover:scale-105 relative hover:bottom-2 p-2 transition-all duration-500 text-sm font-medium uppercase'>Men</Link>
                    <Link to="#" className='text-gray-700 hover:text-black hover:tracking-widest hover:scale-105 relative hover:bottom-2 p-2 transition-all duration-500 text-sm font-medium uppercase'>Women</Link>
                    <Link to="#" className='text-gray-700 hover:text-black hover:tracking-widest hover:scale-105 relative hover:bottom-2 p-2 transition-all duration-500 text-sm font-medium uppercase'>Top Wear</Link>
                    <Link to="#" className='text-gray-700 hover:text-black hover:tracking-widest hover:scale-105 relative hover:bottom-2 p-2 transition-all duration-500 text-sm font-medium uppercase'>Bottom Wear</Link>
                </div>
                {/* right - icons */}

                {/* shopping icon */}
                <div className="flex items-center space-x-4">
                    <Link to="/profile" className='hover:text-black'>
                        <HiOutlineUser className='h-6 w-6 to-gray-700' />
                    </Link>
                    <button onClick={toggleCartDrawer} className='relative hover:text-black'>
                        <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
                        <span className='absolute -top-1 -right-4 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5'>4</span>
                    </button>
                    {/* search icon */}
                    <div className='overflow-hidden'>
                        <SearchBar />
                    </div>
                    {/* menu */}
                    <button  onClick={toggleNavDrawer} className='md:hidden'>
                        <HiBars3BottomRight className='h-6 w-6 text-gray-700' />

                    </button>
                </div>
            </nav>
            {/* Cart Drawer */}
            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
            {/* Mobile navigation menu */}
            <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:hidden h-full bg-white shadow-lg transform
    transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"
                }`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleNavDrawer}>
                        <IoMdClose className='h-6 w-6 text-gray-600' />
                    </button>
                </div>
                <div className="p-4">
                    <h2 className='text-xl font-semibold mb-4'>Menu</h2>
                    <nav className='space-y-4'>
                        <Link onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black hover:tracking-widest hover:scale-105 relative hover:bottom-2 p-2 transition-all duration-500'>
                        Men
                        </Link>
                        <Link onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black hover:tracking-widest hover:scale-105 relative hover:bottom-2 p-2 transition-all duration-500'>
                        Women
                        </Link>
                        <Link onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black hover:tracking-widest hover:scale-105 relative hover:bottom-2 p-2 transition-all duration-500'>
                        Top Wear
                        </Link>
                        <Link onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black hover:tracking-widest hover:scale-105 relative hover:bottom-2 p-2 transition-all duration-500'>
                        Bottom Wear
                        </Link>
                    </nav>
                    </div>
            </div>
        </>
    )
}

export default Navbar