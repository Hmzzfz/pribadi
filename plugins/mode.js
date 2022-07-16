let handler = async(m, { conn, usedPrefix, command }) => {
  if (/^self$/i.test(command)) {
  	var settings = db.data.settings[conn.user.jid]
    if (settings.self == true) conn.sendButton(m.chat, `sudah ${command} dari tadii bos!`, wm, 'Self', usedPrefix + 'self', m)
    if (!settings.self == true) {
      await conn.sendButton(m.chat, `Berhasil set ke ${command}!`, wm, 'Public', usedPrefix + 'public', m)
      settings.self = true
    }
  }
  if (/^Public$/i.test(command)) {
   	var settings = db.data.settings[conn.user.jid]
    if (settings.public == true) conn.sendButton(m.chat, `sudah ${command} dari tadii bos!`, wm, 'Public', usedPrefix + 'Public', m)
    if (!settings.public == true) {
      await conn.sendButton(m.chat, `Berhasil set ke ${command}!`, wm, 'Self', usedPrefix + 'Self', m)
      settings.public = true
    }
  }
}

handler.help = ["self", "public"]
handler.tags = ["owner"]
handler.command = /^(self|publi(c|k))/i

handler.rowner = true 

module.exports = handler
