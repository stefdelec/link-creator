import React from 'react'

export default function App() {
    const searchParams = new URLSearchParams(window.location.search)

    const link=searchParams.get('a');

    return (
        <h1>
            <a href={link}>LINK {link}</a>
        </h1>
    );
}
