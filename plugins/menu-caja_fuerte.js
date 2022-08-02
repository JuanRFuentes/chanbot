const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
let name = await conn.getName(m.sender)
let str = `
๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ ${name}💖✨ 

╔═════❖•ೋ° °ೋ•❖═════╗
║ㅤㅤ   🗳️𝗖𝗔𝗝𝗔 𝗙𝗨𝗘𝗥𝗧𝗘🔐
║
║- 𝙰𝚀𝚄𝙸 𝙿𝚄𝙴𝙳𝙴 𝙶𝚄𝙰𝚁𝙳𝙰𝚁 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙰𝚂 𝚅𝙴𝚁 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴
║
║         𝗔𝗚𝗥𝗘𝗚𝗔𝗥 𝗔 𝗟𝗔 𝗟𝗜𝗦𝗧𝗔
║
║⋠⃟🗳️️ _${usedPrefix}agregarmsg *<texto/comando/palabra clave>* (responde a un texto)_
║⋠⃟🗳️️ _${usedPrefix}agregarvn *<texto/comando/palabra clave>* (responde a una nota de voz)_
║⋠⃟🗳️️ _${usedPrefix}agregarvideo *<texto/comando/palabra clave>* (responde a un video)_
║⋠⃟🗳️️ _${usedPrefix}agregaraudio *<texto/comando/palabra clave>* (responde a un audio)_
║⋠⃟🗳️️ _${usedPrefix}agregarimg *<texto/comando/palabra clave>* (responde a una imagen)_
║⋠⃟🗳️️ _${usedPrefix}agregarsticker *<texto/comando/palabra clave>* (responde a un sticker)_
╚═════❖•ೋ° °ೋ•❖═════╝

╔═════❖•ೋ° °ೋ•❖═════╗
║        𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦
║
║⋠⃟🗳️️ _${usedPrefix}listamsg_
║⋠⃟🗳️️ _${usedPrefix}listavn_
║⋠⃟🗳️️ _${usedPrefix}listavideo_
║⋠⃟🗳️️ _${usedPrefix}listaaudio_
║⋠⃟🗳️️ _${usedPrefix}listaimg_
║⋠⃟🗳️️ _${usedPrefix}listasticker_
╚═════❖•ೋ° °ೋ•❖═════╝

╔═════❖•ೋ° °ೋ•❖═════╗
║        𝗩𝗘𝗥 𝗧𝗘𝗫𝗧𝗢 𝗢 𝗔𝗥𝗖𝗛𝗜𝗩𝗢𝗦
║
║⋠⃟🗳️️ _${usedPrefix}vermsg *<texto/comando/palabra clave>*_
║⋠⃟🗳️️ _${usedPrefix}vervn *<texto/comando/palabra clave>*_
║⋠⃟🗳️️ _${usedPrefix}vervideo *<texto/comando/palabra clave>*_
║⋠⃟🗳️️ _${usedPrefix}veraudio *<texto/comando/palabra clave>*_
║⋠⃟🗳️️ _${usedPrefix}verimg *<texto/comando/palabra clave>*_
║⋠⃟🗳️️ _${usedPrefix}versticker *<texto/comando/palabra clave>*_
╚═════❖•ೋ° °ೋ•❖═════╝

╔═════❖•ೋ° °ೋ•❖═════╗
║                   𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗥
║
║⋠⃟🗳️️ _${usedPrefix}eliminarmsg *<texto/comando/palabra clave>*_
║⋠⃟🗳️️ _${usedPrefix}eliminarvn *<texto/comando/palabra clave>*_
║⋠⃟🗳️️ _${usedPrefix}eliminarvideo *<texto/comando/palabra clave>*_
║⋠⃟🗳️️ _${usedPrefix}eliminaraudio *<texto/comando/palabra clave>*_
║⋠⃟🗳️️ _${usedPrefix}eliminarimg *<texto/comando/palabra clave>*_
║⋠⃟🗳️️ _${usedPrefix}eliminarsticker *<texto/comando/palabra clave>*_
╚═════❖•ೋ° °ೋ•❖═════╝`.trim()

conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/Francisco5002/Menhera-Chan-Bot', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']
], m)
}}
handler.help = ['cajafuerte']
handler.tags = ['owner']
handler.command = /^(cajafuerte)$/i
handler.rowner = true
handler.fail = null
export default handler