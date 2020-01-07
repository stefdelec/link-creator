import React from 'react'
import QrCode from "./qrcodeComponent";

export default function QrCodeList({qrcodes}) {

   const qrcodesToDisplay=  typeof qrcodes ==='string'?  qrcodes
       .split(","):qrcodes;

   console.log(qrcodes)
   return <div className='row'>{
      qrcodesToDisplay
          .map(qrcode=> {
             return <div className="col-4" key={qrcode}>
                <QrCode qrcode={qrcode} />
             </div>;
          })
   }</div>
}
