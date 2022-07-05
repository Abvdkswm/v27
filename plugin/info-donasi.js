import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` Terimakasih atas niat anda untuk membantu Bot berkembang dengan cara donasi. Tapi sepertinya kami belum membutuhkannya.
Jadi kami belum menerima donasi Anda. Terimakasih.`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://www.facebook.com/frel.frel.908132', 'Facebook', null, null, [
['𝙼𝙴𝙽𝚄', '.m']
], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
