const help = (prefix) => {
	return `> *Sticker Commands* <
command : *${prefix}sticker* or *${prefix}stiker*
desc : converter imagem / gif / vídeo em adesivo
usage : responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda \ n
comando : *${prefix}adesivo nobg * ou *${prefix}adesivos nobg*
desc : converter imagem em adesivo removendo o fundo
uso: responder imagem ou enviar imagem com legenda \ n
comando : *${prefix}toimg*
desc : converter adesivo em imagem
uso: adesivo de resposta \ n
command : *${prefix}tsticker* or *${prefix}tstiker*
desc : converter texto em adesivo
uso : *${prefix}texto do adesivo aqui * \ n
> * Comandos Meme * <
command : *${prefix}meme*
desc : imagens aleatórias de meme [inglês]
usage : apenas envie o comando\n
command : *${prefix}memeindo*
desc : imagens aleatórias de meme [indo]
usage : apenas envie o comando\n
> *Outros Comandos* <
command : *${prefix}gtts*
desc : converter texto em fala / áudio
usage : *${prefix}gtts [cc] [texto]*\nexemplo : *${prefix}gtts ja On2-chan*\n
command : *${prefix}loli*
desc : imagens aleatórias de loli
usage : apenas envie o comando\n
command : *${prefix}nsfwloli*
desc : imagens aleatórias de nsfw loli
usage : apenas envie o comando\n
command : *${prefix}url2img*
desc : tirar screenshots da web
usage : *${prefix}url2img [tipe] [url]*\n
command : *${prefix}simi*
desc : sua mensagem será respondida por simi
usage : *${prefix}simi sua mensagem*\n
command : *${prefix}ocr*
desc : pegue o texto na foto
usage : responder imagem ou enviar imagem com legenda \n
command : *${prefix}wait*
desc : pesquisar anime com imagem [What Anime Is This / That]
usage : responder imagem ou enviar imagem com legenda \n
command : *${prefix}setprefix*
desc : substituir prefixo
usage : *${prefix}setprefix [texto | opcional] * \ exemplo : *${prefix}setprefix ?*
note : Este comando so pode ser usado pelo fdp do reizin eu mesmo hehehddi \n
> *Group Comands* <
command : *${prefix}add*
desc : adicionar membro ao grupo
usage : *${prefix}add 55219xxxxx*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \n
command : *${prefix}kick*
desc : expulsa um fiha da puta do grupo
usage : *${prefix}kick @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \n
command : *${prefix}promote*
desc : tornar o membro do grupo como administrador do grupo
usage : *${prefix}promote @marque a porra do membro*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \n
command : *${prefix}demote*
desc : faça o administrador do grupo como membro do grupor
usage : *${prefix}demote @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \n
command : *${prefix}linkgroup*
desc : pegue o link do grupo
usage : apenas envie o comando
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \n
command : *${prefix}leave*
desc : Faça o bot sair do grupo, se fizer isso nao vou comer mais sua mae
usage : apenas envie o comando
note : Só pode ser usado por administradores de grupo e proprietário do bot da uma madada para vc usar \n 
command : *${prefix}tagall*
desc : marca os cornos do grupo incluindo os filha da puta dos adm 
usage : apenas envie o comando
note : se vc dar uma mamada do adm ai vc podera usar este comando \n
command : *${prefix}simih*
desc : ative o modo simi no grupo
usage : *${prefix}simih 1 * para ativar o modo simi e * $ {prefix} simih 0 * para desativar o modo simi
nota: este comando pode ser usado se você for um administrador de grupo, se quiser ganhar adm é so da uma mamada \n`
}

exports.help = help
