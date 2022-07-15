import fetch from 'node-fetch'

let handler = async (m) => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    //let wibu = `https://api.zacros.my.id/randomimg/loli`
    let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let cita = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(cita)).buffer()
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `*▸ - - - —「 BIG THANKS TO 」— - - - ◂*
*❉ Adiwajshing:*
https://github.com/adiwajshing
*❉ Nurutomo:*
https://github.com/Nurutomo
*❉ Istikmal:* 
https://github.com/BochilGaming
*❉ Ariffb:*
https://github.com/Ariffb25
*❉ Ilman:*
https://github.com/ilmanhdyt
*❉ Amirul:*
https://github.com/amiruldev20
*❉ Rasel:*
https://github.com/raselcomel
*❉ Fatur:*
https://github.com/Ftwrr
*❉ Rominaru:*
https://github.com/Rominaru
*❉ Kannachann:*
https://github.com/Kannachann
*❉ The.sad.boy01:*
https://github.com/kangsad01
*❉ Ameliascrf:*
https://github.com/Ameliascrf
*❉ Fokus ID:*
https://github.com/Fokusdotid
*❉ Johannes:*
https://github.com/Johannes2803
*❉ BrunoSobrino:*
https://github.com/BrunoSobrino
*❉ Krisna:*
https://github.com/NevtBotz
*❉ Andhyca:*
https://github.com/andhyca-offc
*❉ Rlxfly:*
https://github.com/Rlxfly
*❉ Aine:*
https://github.com/Aiinne
*▸ - - - —「 KANG RECODE 」— - - - ◂*
*❉ Andhyca:*
https://github.com/andhyca-offc
*▸ - - - —「 SPESIAL HELPER 」— - - - ◂*
*❉ Kannachan:*
*❉ Johannes:*
*❉ Krisna:*
*❉ Rlxfly:*
`
conn.sendButtonDoc(m.chat, tqto, wm,'Thanks','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/andhycarsrofficial",
    mediaType: "VIDEO",
    description: "https://Instagram.com/andhycarsrofficial", 
    title: '「 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ | © Ⓚ︎🅘︎Ⓝ︎🅖︎ • 𝐴𝑛𝑑ℎ𝑦𝑐𝑎ᵍᵃⁿᶻ 」',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
}
} })
        }
handler.help = ['tqto']
handler.tags = ['main','info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i
export default handler
