let handler  = async (m, { conn, usedPrefix }) => { 

conn.reply(m.chat, `

╭─˗ˏˋ *INFORMASI GROUP BOT* ´ˎ˗

│ ✎ _Official Grup 1_ :

│    https://chat.whatsapp.com/IqZke0cAG6G3iVsnB9myfL

│ ✎ _Official Grup 2_ :

│    https://chat.whatsapp.com/HjRHck1G3WRHOx97fJkdMN

│ ✎ _Youtube _:

│    https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ

│ ✎ _Instagram_ : 

│    https://instagram.com/oscarbotz_

│ ✎ _WhatsApp_ :

│    wa.me/6285850539404

╰───────────────────

`.trim(), m)

}

handler.help = ['infogroupbot']

handler.tags = ['main', 'utama']

handler.command = /^(infobot)$/i

handler.exp = 150

module.exports = handler
