const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: ABCR_MD,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function ABCR_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_ABCR_MD = ABCR_MD({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_ABCR_MD.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_ABCR_MD.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_ABCR_MD.ev.on('creds.update', saveCreds)
            Pair_Code_By_ABCR_MD.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_ABCR_MD.sendMessage(Pair_Code_By_ABCR_MD.user.id, { text: '' + b64data });

               let ABCR_MD_TEXT = `
*_Pair Code Connected by ABCR MD*
*_Made With 🤍_*
______________________________________
╔════◇
║ *『 WOW YOU'VE CHOSEN ABCR MD 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Ytube:* _youtube.com/@ABCRMD1_
║❒ *Owner:* _https://wa.me/923192173398_
║❒ *Repo:* _https://github.com/ABCRxd/ABCR-MD
║❒ *WaGroup:* _https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j
║❒ *WaChannel:* _https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j
║❒ *Plugins:* _https://github.com/ABCRxd/ABCR-MD-PLUGINS_
╚════════════════════════╝
_____________________________________

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_ABCR_MD.sendMessage(Pair_Code_By_ABCR_MD.user.id,{text:ABCR_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_ABCR_MD.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    ABCR_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await ABCR_MD_PAIR_CODE()
});
module.exports = router
