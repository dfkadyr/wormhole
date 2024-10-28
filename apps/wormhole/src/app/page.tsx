'use client'
import React from 'react'
import dynamic from 'next/dynamic'

import { lightTheme, darkTheme } from './themes'
import config from './config'


const Wormhole: React.FC = () => {
  const WormholeConnect = dynamic(() => import('@wormhole-foundation/wormhole-connect'), {
    loading: () => (
      <div>
        Loading....
      </div>
    ),
    ssr: false,
  })

  return (
    <WormholeConnect config={config} theme={lightTheme} />
  )
}


export default React.memo(Wormhole)
