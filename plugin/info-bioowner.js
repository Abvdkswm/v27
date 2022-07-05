let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Rel_Botz
*✉️ Nama RL* : Farel
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 26 April 2007
*🎨 Umur* : 15
*🧮 Kelas* : 9
*🧩 Hobby* : Nonton Hanime, Chatting, ngocok
*💬 Sifat* : Baik, sopan, asik klo udah kenal.
*🗺️ Tinggal* : Indo, sulteng, kabupaten buol, desa pajeko 
*❤️ Suka* : Yang baca>\\\<
*💔 Benci* : autis, anak epep, yang spam bot

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @farel
*🇫  Facebook* : Farel Rel
*

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
