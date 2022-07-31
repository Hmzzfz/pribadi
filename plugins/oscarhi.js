let fs = require('fs')
let handler = async (m) => {
let helloscar = fs.readFileSync('./mp3/Sound.opus')
conn.sendFile(m.chat, hellooscar, '', '', m, true)
}

handler.customPrefix = /^(jarot)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
