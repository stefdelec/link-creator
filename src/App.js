import React, {useState,useEffect} from 'react'
import QrCodeList from "./qrcode/qrcodeListComponent";
import {Arianee} from "@arianee/arianeejs/dist/src";

export default function App() {
    const [listOfMnemonics,setMnemonic]=useState([]);

    const searchParams = new URLSearchParams(window.location.search)

    const arianee= new Arianee().init();

    const link=searchParams.get('link');

    const qrcodes=searchParams.get("qr")


    const numberofMnemonic=searchParams.get("mnemonics")

    useEffect(()=>{
        if(numberofMnemonic>0){
            arianee
                .then(a=>{
                    const b=[];
                    for(let i=0; i<numberofMnemonic;i++){
                        let mnemo=a.fromRandomMnemonic().mnemnonic;
                        b.push(mnemo);
                    }
                    setMnemonic(b)
                })
        }
    },[numberofMnemonic])


    return (
        <div>
            {
                listOfMnemonics && <QrCodeList qrcodes={listOfMnemonics}/>
            }
            {
                qrcodes && <QrCodeList qrcodes={qrcodes}/>
            }
       {link && <h1>
           <a id={link} href={link}>LINK {link}</a>
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
