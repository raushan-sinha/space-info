import React, { useContext } from 'react'
import spaceLogo from '../../assets/space-logo.jpg';
import { BsMoon, BsSun } from 'react-icons/bs';
import { ThemeContext } from '../../context/ThemeContext';

const Navbar = () => {
    //TODO: Navbar Title -
    const title = 'AstroScope';
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <nav className='w-[95%] px-4 py-2 flex flex-row justify-between items-center bg-[#101923] rounded-xl m-auto fixed top-4 left-1/2 -translate-x-1/2 border-cyan-500 border-2'>
            <div className='flex flex-row justify-center items-center gap-1.5'>
                <img src={spaceLogo} alt="Space-Logo" className='w-8 h-8 object-cover' />
                <h1 className='text-cyan-500 font-mono font-medium text-2xl md:text-3xl'>
                    {title.split('').map((char, idx) => (
                        <span key={idx} className={`${idx > 4 ? 'text-yellow-300' : ''}`}>{char}</span>
                    ))}
                </h1>
            </div>

            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === 'light' ? <BsSun className='text-yellow-300 text-3xl' /> : <BsMoon className='text-white text-2xl' />}
            </button>
        </nav>
    )
}

export default Navbar;