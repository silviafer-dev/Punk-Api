import React, { useState } from 'react';
import { ListBeers } from '../components/ListBeers';
import './Home.css';

export function Home() {
    const [keyword, setKeyword] = useState('');
    const handleChange = (e) => {
        setKeyword(e.target.value);
    };
    return (
        <>
            <div className="home">
                <h1 className="title-app">Punk API</h1>
                <form
                    className="input-container"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <input
                        className="input-search"
                        type="text"
                        placeholder="Search"
                        value={keyword}
                        onChange={handleChange}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="input-icon"
                        viewBox="0 0 20 20"
                        fillRule="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                        />
                    </svg>
                </form>
            </div>
            <ListBeers keyword={keyword} />
        </>
    );
}
