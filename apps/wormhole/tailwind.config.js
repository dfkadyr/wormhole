import base from '../../tailwind.config'


/** @type {import('tailwindcss').Config} */
export default {
  ...base,
  content: [
    './src/**/*.{js,ts,tsx}',
    ...base.content
      .map((path) => `../../${path}`),
  ],
}
