import React, { useState } from 'react'
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import CartDrawer from './CartDrawer'

const Navbar = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
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
                    <Link to="#" className='text-gray-700 hover:text-black hover:scale-105 relative hover:bottom-2 p-2 transition-all duration-500 text-sm font-medium uppercase'>Men</Link>
                    <Link to="#" className='text-gray-700 hover:text-black hover:scale-105 relative hover:bottom-2 p-2 transition-all duration-500 text-sm font-medium uppercase'>Women</Link>
                    <Link to="#" className='text-gray-700 hover:text-black hover:scale-105 relative hover:bottom-2 p-2 transition-all duration-500 text-sm font-medium uppercase'>Top Wear</Link>
                    <Link to="#" className='text-gray-700 hover:text-black hover:scale-105 relative hover:bottom-2 p-2 transition-all duration-500 text-sm font-medium uppercase'>Bottom Wear</Link>
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
                    <button className='md:hidden'>
                        <HiBars3BottomRight className='h-6 w-6 text-gray-700' />

                    </button>
                </div>
            </nav>
            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
        </>
    )
}

export default Navbar