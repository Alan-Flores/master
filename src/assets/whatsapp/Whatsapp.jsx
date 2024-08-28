import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import consofLogo from '../img/consofCS.svg'

export const Whatsapp = ({ cellphone, name, slogan, mensaje }) => {
  return (

    <FloatingWhatsApp
      phoneNumber={cellphone}
      accountName={name}
      statusMessage={slogan}
      chatMessage={mensaje}
      allowClickAway='true'
      allowEsc='true'
      chatboxHeight={300}
      avatar= {consofLogo}

    />
  )
}
