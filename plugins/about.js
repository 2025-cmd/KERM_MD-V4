/*created by Kgtech 🕵
contact dev1 237656520674 ♻️
contact dev2 237650564445 ♻️
© Copy coder alert ⚠
*/


const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
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
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs 𝖪𝖾𝗋𝗆_𝖬𝖽-𝖵𝟦*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ 𝟣 𝖫𝗈𝗋𝖽 𝖪𝖾𝗋𝗆²³⁷*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ 𝟤 𝖳𝗁𝖾 𝖦𝗂𝖿𝖿𝖺𝗋𝖾𝗇𝗈²³⁷*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➠ 𝖡𝗎𝗍 𝖪𝖾𝗋𝗆😂.*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ 𝖪𝖾𝗋𝗆*
*│  ◦* *ᴀɢᴇ➠ ᴛᴡᴇɴᴛʏ ʏᴇᴀʀ*
*│  ◦* *ᴄɪᴛʏ➠ 𝖣𝗈𝗎𝖺𝗅𝖺*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • 𝖪𝖤𝖱𝖬_𝖬𝖣－𝖵𝟦 - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠𝖫𝗈𝗋𝖽 𝖪𝖾𝗋𝗆²³⁷*
*│  ◦* *▢➠𝖳𝗁𝖾 𝖦𝗂𝖿𝖿𝖺𝗋𝖾𝗇𝗅²³⁷*
*│  ◦* *▢➠ɴᴏᴛʜɪɴɢ*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝖪𝗀 𝖳𝖾𝖼𝗁
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
