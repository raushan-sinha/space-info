import React, { useEffect } from 'react'

const Home = () => {
    // useEffect(() => {
        const handleResponse = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_SPACE_INFO_API);
                if (!response.ok) throw new Error("API is not fetching");

                const data = await response.json();
                console.log('Data', data);
            } catch (error) {
                console.log('Error', error)
            }
        }

        // handleResponse()
    // }, [])

    return (
        <main className='min-h-screen p-30'>
            <h1>Space Info</h1>

            <button onClick={handleResponse}>Get Info</button>
        </main>
    )
}

export default Home;