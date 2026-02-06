import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['51969754673', 'U -Streaming', true],
  ['51901437507', 'Sunkovv', true],
]


global.ownerLid = [
  ['127114623864833', 'U -Streaming', true],
  ['114263544885392', 'Sunkovv', true],
]

global.sessions = 'Sessions'
global.bot = 'Serbot' 
global.AFBots = true

global.grupos = false

global.packname = ''
global.namebot = 'U - STREAMING'
global.author = 'U - STREAMING'
global.moneda = ''


global.canal = ''

global.ch = {
ch1: '',
}

global.mods =   []
global.prems = []

global.multiplier = 69 
global.maxwarn = '2'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
