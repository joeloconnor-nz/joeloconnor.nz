/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],

  // Built-in options
  tabWidth: 2,
  semi: false,
  singleQuote: true,

  // Import sorting options
  importOrder: [
    '^react$', // React imports
    '<BUILTIN_MODULES>', // Built-in Node.js modules imports
    '<THIRD_PARTY_MODULES>', // Imports not matched by other special words or groups.
    '', // Empty line
    '^@/.*$', // Aliased imports, e.g. '@/server' or '@/server/auth'
    '^[.]', // Relative imports, e.g. './utils' or '../utils'
  ],
  importOrderTypeScriptVersion: '5.4.5',

  // Tailwind options
  tailwindFunctions: ['cva', 'cn'],
}

export default config
