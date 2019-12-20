import React from 'react'

export default function App() {
    const searchParams = new URLSearchParams(window.location.search)

    const link=searchParams.get('a');

    return (
        <div>

       {link && <h1>
           <a href={link}>LINK {link}</a>
       </h1>}

            <h1>
                <a href=" https://arian.ee/12425,76!Pprg">LINK  https://arian.ee/12425,76!Pprg</a>
            </h1>

            <h1>
                <a href='https://test.arian.ee/12312,xx3crfrcew4z'>LINK https://test.arian.ee/12312,xx3crfrcew4z</a>
            </h1>

        </div>

    );
}
