import QRCode from 'qrcode'
import React, { useState } from 'react'
import './App.css'


const App = () => {
  const [ url, setUrl ] = useState('')
  const [ qrcode, setQrcode ] = useState('')

  
  const GenerateQRCode = () => {
    QRCode.toDataURL( url, (err, url) => {
      if (err) return console.error(err)

      console.log(url)
      setQrcode(url)
    } )
  }

  return (
    <>
      <main>
        <h1>QR Generator</h1>
        <input
          type='text'
          placeholder='Enter URL or text'
          value={url}
          onChange={e => setUrl(e.target.value)} />
          
          <div class='btn'>
          <button onClick={GenerateQRCode}>Generate</button>
          </div>

          

          {qrcode && <>
            <img src={qrcode} alt='qr-code' />
            <a href={qrcode} download='qr-code.png'> Download </a>
          </> }
      </main>
    </>
  )
}

export default App;
