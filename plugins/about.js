













































const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "binfo",
    react: "💰",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ☆ *𝚝𝚑𝚒𝚜 𝚒𝚜 𝙼𝙰𝙵𝙸𝙰 𝙼𝙳     
*│  ☆ *𝚌𝚛𝚎𝚊𝚝𝚎𝚍 𝚋𝚢 𝙼𝙰𝙵𝙸𝙰 𝙰𝙳𝙴𝙴𝙻🔥
*│  ✩ *𝚕𝚘𝚌𝚊𝚝𝚒𝚘𝚗 𝙿𝙰𝙺𝙸𝚂𝚃𝙰𝙽🇹🇿
*│  ☆ *𝚌𝚒𝚝𝚢  𝙹𝙰𝙼𝙿𝚄𝚁
*╰┈───────────────•*
> *☆☆☆☆☆☆☆☆☆*

*[ ★ 𝙼𝙰𝙵𝙸𝙰 𝙼𝙳 𝙳𝙴𝚅𝚂★ ]*
*╭┈───────────────•*
*│  ༄ 𝙼𝙰𝙵𝙸𝙰 𝙰𝙳𝙴𝙴𝙻
*│  ༄ 𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴 𝙼𝚈 𝚈𝚃 𝙲𝙷𝙰𝙽𝙽𝙸𝙻
*│  ༄ 𝙼𝙰𝙵𝙸𝙰𝙼𝙳𝙱𝙾𝚃
*│  ༄ 𝚂𝙴𝙻𝙸𝙽𝚃 𝙻𝙾𝚆𝙴𝚁
*│  ༄ 𝙲𝙾𝙼𝙸𝙼𝙶 𝚂𝙾𝙽
*╰┈───────────────•*
*•────────────•★*
> © 𝚌𝚘𝚍𝚎 𝚋𝚢 𝙼𝙰𝙵𝙸𝙰 𝙰𝙳𝙴𝙴𝙻 🔥
*•────────────•★*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
