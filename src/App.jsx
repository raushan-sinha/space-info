import React, { useContext } from 'react'
import Navbar from './components/layout/Navbar'
import { ThemeContext } from './context/ThemeContext'
import Home from './pages/Home';

const App = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <main className={`min-h-screen ${theme === 'light' ? 'bg-[#101923] text-white' : 'bg-white text-black'}`}>
                <header>
                    <Navbar />
                </header>

                <section className='p-30'>
                    <Home />
                </section>
            </main>
        </>
    )
}

export default App;