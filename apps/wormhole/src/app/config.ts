import { TokenBridgeRoute, nttRoutes } from '@wormhole-foundation/wormhole-connect'
import type { WormholeConnectConfig  } from '@wormhole-foundation/wormhole-connect'


const config: WormholeConnectConfig = {
  network: 'Mainnet',
  chains: [ 'Ethereum', 'Arbitrum' ],
  tokens: [
    'ETH',
    'WETH',
    'osETH',
    'SWISE',
    'ETHarbitrum',
    'WETHarbitrum',
    'osETHarbitrum',
    'SWISEarbitrum',
  ],

  ui: {
    defaultInputs: {
      fromChain: 'Ethereum',
      toChain: 'Arbitrum',
    },
    showHamburgerMenu: false,
    walletConnectProjectId: '60c8253e84912956fc991fcb05481f93',
  },

  routes: [
    ...nttRoutes({
      tokens: {
        SWISE: [
          {
            chain: 'Ethereum',
            manager: '0xE3620C1aE560AF090704899aCA62209C31C4c77b',
            token: '0x48C3399719B582dD63eB5AADf12A40B4C3f52FA2',
            transceiver: [
              {
                address: '0x7c34962B4738BAE5DbE8577d4FB05355E0ebbC26',
                type: 'wormhole',
              },
            ],
          },
          {
            chain: 'Arbitrum',
            manager: '0xE3620C1aE560AF090704899aCA62209C31C4c77b',
            token: '0x4026AFfABd9032bCC87Fa05C02F088905f3dC09B',
            transceiver: [
              {
                address: '0x7c34962B4738BAE5DbE8577d4FB05355E0ebbC26',
                type: 'wormhole',
              },
            ],
          },
        ],
        osETH: [
          {
            chain: 'Ethereum',
            manager: '0x896B78FD7e465Fb22e80c34FF8F1c5f62fa2C009',
            token: '0xf1C9acDc66974dFB6dEcB12aA385b9cD01190E38',
            transceiver: [
              {
                address: '0xAAFE766B966219C2f3F4271aB8D0Ff1883147AB6',
                type: 'wormhole',
              },
            ],
          },
          {
            chain: 'Arbitrum',
            manager: '0x485F6Ac6a3B97690910C1546842FfE0629582aD3',
            token: '0xf7d4e7273E5015C96728A6b02f31C505eE184603',
            transceiver: [
              {
                address: '0xAf7ae721070c25dF97043381509DBc042e65736F',
                type: 'wormhole',
              },
            ],
          },
        ],
      },
    }),
    TokenBridgeRoute,
  ],

  tokensConfig: {
    osETH: {
      key: 'osETH',
      symbol: 'osETH',
      nativeChain: 'Ethereum',
      displayName: 'osETH (Ethereum)',
      tokenId: {
        chain: 'Ethereum',
        address: '0xf1C9acDc66974dFB6dEcB12aA385b9cD01190E38',
      },
      coinGeckoId: 'stakewise-v3-oseth',
      icon: 'https://app.stakewise.io/osETH.svg',
      color: '#39b1ff',
      decimals: 18,
    },

    osETHarbitrum: {
      key: 'osETHarbitrum',
      symbol: 'osETH',
      nativeChain: 'Arbitrum',
      displayName: 'osETH (Arbitrum)',
      tokenId: {
        chain: 'Arbitrum',
        address: '0xf7d4e7273E5015C96728A6b02f31C505eE184603',
      },
      coinGeckoId: 'stakewise-v3-oseth',
      icon: 'https://app.stakewise.io/osETH.svg',
      color: '#39b1ff',
      decimals: 18,
    },

    SWISE: {
      key: 'SWISE',
      symbol: 'SWISE',
      nativeChain: 'Ethereum',
      displayName: 'SWISE (Ethereum)',
      tokenId: {
        chain: 'Ethereum',
        address: '0x48C3399719B582dD63eB5AADf12A40B4C3f52FA2',
      },
      coinGeckoId: 'stakewise',
      icon: 'https://app.stakewise.io/logo180.png',
      color: '#a191c4',
      decimals: 18,
    },

    SWISEarbitrum: {
      key: 'SWISEarbitrum',
      symbol: 'SWISE',
      nativeChain: 'Arbitrum',
      displayName: 'SWISE (Arbitrum)',
      tokenId: {
        chain: 'Arbitrum',
        address: '0x4026AFfABd9032bCC87Fa05C02F088905f3dC09B',
      },
      coinGeckoId: 'stakewise',
      icon: 'https://app.stakewise.io/logo180.png',
      color: '#a191c4',
      decimals: 18,
    },
  },
}


export default config
