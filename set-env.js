const fs = require('fs')
const env = process.argv[2]

// copy the env config file to the gitignored config.json
fs.copyFileSync(`./src/config/${env}.config.ts`, './src/config/index.ts')
