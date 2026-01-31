import React from 'react'
import spaceLogo from '../../assets/space-logo.jpg';

const Navbar = () => {
    //TODO: Navbar Title -
    const title = 'AstroScope';

    return (
        <nav className='w-[95%] p-2 flex flex-row justify-between items-center bg-[#101923] rounded-xl m-auto mt-3'>
            <div className='flex flex-row justify-center items-center gap-1.5'>
                <img src={spaceLogo} alt="Space-Logo" className='w-8 h-8 object-cover' />
                <h1 className='text-cyan-500 font-mono font-medium text-2xl md:text-3xl'>
                    {title.split('').map((char, idx) => (
                        <span key={idx} className={`${idx > 4 ? 'text-yellow-300' : ''}`}>{char}</span>
                    ))}
                </h1>
            </div>
            <button className='bg-blue-600 text-white text-base font-bolder px-3 py-1 rounded-xl cursor-pointer'>Light</button>
        </nav>
    )
}

export default Navbar;