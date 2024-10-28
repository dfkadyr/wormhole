import { Inter } from 'next/font/google'
import type { WormholeConnectTheme } from '@wormhole-foundation/wormhole-connect'

const font = Inter({ 
  preload: true,
  display: 'block',
  weight: [ '400', '500', '700' ],
  subsets: [ 'latin', 'cyrillic' ]
})

export const lightTheme: WormholeConnectTheme = {
  mode: 'light',
  input: '#e5e6f1', // Titanium
  primary: '#3559e4', // Ocean
  secondary: '#ee8f20', // autumn
  text: '#00060f', // moon
  textSecondary: '#6b6b94', // stone
  error: '#ff4f38', // volcano
  success: '#3cc37a', // jungle
  badge: '#f1f2fd', // smoke
  font: font.style.fontFamily,
}

export const darkTheme: WormholeConnectTheme = {
  mode: 'dark',
  input: '#242224', // Titanium
  primary: '#627eea', // Ocean
  secondary: '#ee8f20', // autumn
  text: '#ffffff', // moon
  textSecondary: '#787887', // stone
  error: '#c64e50', // volcano
  success: '#4cd48b', // jungle
  badge: '#1f1f32', // smoke
  font: font.style.fontFamily,
}
