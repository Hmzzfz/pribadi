let fs = require('fs')

const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {

let hallo = fs.readFileSync('./mp3/WhatsApp-Ptt-2021-07-14-at-18.12.33.opus') 

conn.sendFile(m.chat, hallo, '', '', m, true)

//conn.sendMessage(m.chat, halojarot, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})

// await conn.sendMessage(m.chat, { audio: { url: helloaine }, mimetype: 'audio/mp4'}, m)

}



handler.customPrefix = /^(hi|hii|hiii|hi bot|tes|tes|hy|halo|hallo|helo|hello|hy aine|halo aine|hallo aine|helo aine|hello aine)$/i

handler.command = new RegExp



handler.limit = true

handler.mods = false 

handler.premium = false

handler.group = false

handler.private = false



module.exports = handler

