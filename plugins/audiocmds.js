const skl = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require ('axios')
const Config = require('../config');
 if (Config.WORKTYPE == 'private') {
    skl.addCommand({pattern: 'audio', fromMe: true, desc: 'Gives audio commands' , dontAddCommandList: true }, async (message, match) => {

        
        const cmd = "```Juan```\n```Ayinu```\n```Bgm```\n```Bot```\n```Bye```\n```Good night```\n```Hello```\n```Hi```\n```Neymar```\n```Pm```\n```Sed```\n```alive```\n```assist```\n```ban```\n```bgm```\n```bot```\n```converting```\n```fake```\n```fork```\n```fuck```\n```music```\n```myre```\n```njan```\n```number```\n```oombi```\n```poda```\n```raganork```\n```remove```\n```reply```\n```sed```\n```subscribe```\n```xxxtentation```";
        const {data} = await axios(`https://gist.githubusercontent.com/SISACO/e29413927f93b5e8e9a1fb9c4469f487'`)
        const { souravkl11 } = data
        await message.client.sendMessage(message.jid, cmd, MessageType.text, { quoted: message.data });
   });
    }
 
if (Config.WORKTYPE == 'public') {
    skl.addCommand({pattern: 'audio', fromMe: false, desc: 'Gives audio commands' , dontAddCommandList: true }, async (message, match) => {

        const cmd = "```Juan```\n```Ayinu```\n```Bgm```\n```Bot```\n```Bye```\n```Good night```\n```Hello```\n```Hi```\n```Neymar```\n```Pm```\n```Sed```\n```alive```\n```assist```\n```ban```\n```bgm```\n```bot```\n```converting```\n```fake```\n```fork```\n```fuck```\n```music```\n```myre```\n```njan```\n```number```\n```oombi```\n```poda```\n```raganork```\n```remove```\n```reply```\n```sed```\n```subscribe```\n```xxxtentation```";
        const {data} = await axios('https://gist.githubusercontent.com/SISACO/e29413927f93b5e8e9a1fb9c4469f487')
        const { souravkl11 } = data
        await message.client.sendMessage(message.jid, cmd, MessageType.text, { quoted: message.data });
   });
    }
