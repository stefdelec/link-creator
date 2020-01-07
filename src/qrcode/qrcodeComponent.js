import React from 'react'
import QRCode from 'qrcode.react'

export default function QrCode({qrcode}) {
    return <div className='d-flex flex-column justify-content-center align-items-center'>
        <div>{qrcode}</div>
        <QRCode value={qrcode}></QRCode>
    </div>
}
