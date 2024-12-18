/*created by Kgtech 🕵
contact dev1 237656520674 ♻️
contact dev2 237650564445 ♻️
© Copy coder alert ⚠
*/




const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
pattern: "delete",
react: "🧹",
alias: ["del"],
desc: "delete message",
category: "group",
use: '.del',
filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner ||  !isAdmins) return;
try{
if (!m.quoted) return reply(mg.notextfordel);
const key = {
            remoteJid: m.chat,
            fromMe: false,
            id: m.quoted.id,
            participant: m.quoted.sender
        }
        await conn.sendMessage(m.chat, { delete: key })
} catch(e) {
console.log(e);
reply('successful..👨‍💻✅')
} 
});
cmd({
    pattern: "del",
    desc: "Delete a message sent by the bot (in groups or private chats).",
    react: "🗑️",
    category: "utility",
    filename: __filename,
}, async (conn, mek, m, {
    from,
    quoted,
    reply
}) => {
    try {
        // Check if the command was used in response to a message
        if (!quoted) return reply(`❌ Please reply to a message sent by me to delete it.`);

        // Extract the key of the message to delete
        const { remoteJid, id, fromMe } = quoted.key;

        // Ensure the message to delete was sent by the bot
        if (!fromMe) return reply(`❌ I can only delete messages that I have sent.`);

        // Delete the message
        await conn.sendMessage(remoteJid, { delete: quoted.key });
    } catch (e) {
        console.error('Error in del command:', e);
    }
});
