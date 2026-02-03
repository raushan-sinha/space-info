import React, { useEffect, useReducer } from 'react';

//TODO: Initialize the values -
const initialValues = {
    date: '',
    title: '',
    explanation: '',
    imageUrl: '',
    loading: false,
    error: null
}

function reducer(state, action) {
    switch (action.type) {
        case "API_START":
            return { ...state, loading: true, error: null }

        case "API_SUCCESS":
            return {
                ...state,
                loading: false,
                date: action.payload.date,
                title: action.payload.title,
                explanation: action.payload.explanation,
                imageUrl: action.payload.url
            }

        case "ERROR":
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}

const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialValues);

    useEffect(() => {
        const handleResponse = async () => {
            dispatch({ type: 'API_START' });

            try {
                const response = await fetch(import.meta.env.VITE_SPACE_INFO_API);
                if (!response.ok) throw new Error('API isn`t fetching correctly');

                const data = await response.json();

                dispatch({
                    type: 'API_SUCCESS',
                    payload: data
                });
            } catch (error) {
                dispatch({
                    type: 'ERROR',
                    payload: error.message
                });
                console.error('Network issue. Please check your connection.');
            }
        }

        handleResponse();
    }, []);

    return (
        <main className="min-h-screen">
            {state.loading ? (
                <p className="text-green-500 text-lg md:text-xl text-center mb-6">
                    Loading...
                </p>
            ) : (
                <section className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-14">
                    <article className="w-full lg:w-1/2 flex flex-col items-center gap-6">
                        <h1 className="font-mono font-bold text-xl md:text-2xl text-center">
                            Posted Image of Today
                        </h1>

                        {state.imageUrl && (
                            <img
                                src={state.imageUrl}
                                alt="Space-Image"
                                className="w-full max-h-105 object-contain rounded-lg shadow-md"
                            />
                        )}
                    </article>

                    <article className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h2 className="font-mono font-bold text-lg md:text-xl wrap-break-word">
                                Title: {state.title}
                            </h2>

                            <span className="font-mono font-medium text-sm md:text-base text-gray-400 whitespace-nowrap">
                                Date: {state.date}
                            </span>
                        </div>

                        <p className="font-sans text-sm md:text-base leading-relaxed">
                            <span className="font-semibold"></span>{state.explanation}
                        </p>
                    </article>

                </section>
            )}

            {state.error && (
                <p className="text-red-500 text-lg md:text-xl text-center mt-8">
                    Network connection error
                </p>
            )}
        </main>
    )
}

export default Home;