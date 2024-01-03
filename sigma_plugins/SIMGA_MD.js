//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                   MULTI-DEVICE WHATSAPP BOT                                          //
//                                                                                                      //
//                                            𝚅.𝟷.𝟸.𝟽                                                   // 
//                                                                                                      //
//              ███████╗██╗ ██████╗ ███╗   ███╗ █████╗     ███╗   ███╗██████╗                           //
//              ██╔════╝██║██╔════╝ ████╗ ████║██╔══██╗    ████╗ ████║██╔══██╗                          //
//              ███████╗██║██║  ███╗██╔████╔██║███████║    ██╔████╔██║██║  ██║                          //
//              ╚════██║██║██║   ██║██║╚██╔╝██║██╔══██║    ██║╚██╔╝██║██║  ██║                          //
//              ███████║██║╚██████╔╝██║ ╚═╝ ██║██║  ██║    ██║ ╚═╝ ██║██████╔╝                          //
//              ╚══════╝╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝    ╚═╝     ╚═╝╚═════╝                           //
//                                                                                                      //
//                                          BY:MAHER-ZUBAIR                                             //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
  const os = require('os')
  let menus = false
  const moment = require("moment-timezone")
  const fs = require("fs")

  let { fancytext, tlang, tiny, runtime, formatp, botpic, getBuffer ,prefix, sck1,name, Module_Exports } = require("../lib");
  const long = String.fromCharCode(8206)
  const sɪɢᴍᴀ_readmore = long.repeat(4001)
  const sɪɢᴍᴀ_speed = require('performance-now')
  const sɪɢᴍᴀ_ᴍᴅ = require('../lib/sigma_plugins')
  

  //------------------------------------------------------------------------------------


  sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
          kingcmd: "owner",
          infocmd: "to check owner number",
          kingclass: "general",

      },
      async(bot, person) => {
          const name = require('../Setting')
          const thmb = await getBuffer(global.THUMB_IMAGE)
          const vcard = 'BEGIN:VCARD\n' +
              'VERSION:3.0\n' +
              'FN:' + name.ownername + '\n' +
              'ORG:;\n' +
              'TEL;type=CELL;type=VOICE;waid=' + global.owner + ':+' + global.owner + '\n' +
              'END:VCARD'
          let buttonMessaged = {
              contacts: { displayName: name.ownername, contacts: [{ vcard }] },
              contextInfo: {
                  externalAdReply: {
                      title: name.ownername,
                      body: 'ᴛᴀᴘ ʜᴇʀᴇ ᴛᴏ ᴍᴇssᴀɢᴇ ᴍᴇ',
                      renderLargerThumbnail: true,
                      thumbnailUrl: ``,
                      thumbnail: thmb,
                      mediaType: 1,
                      mediaUrl: '',
                      sourceUrl: `https://wa.me/+` + owner + '?text=Hii+bro,I+am+' + person.pushName,
                  },
              },
          };
          return await bot.sendMessage(person.chat, buttonMessaged, {   quoted: person, });
  
      }
  )

  const readDirectory = (text) => {
    return new Promise((resolve, reject) => {
      fs.readdir(text, (err, files) => {
        if (err) {reject('Error reading directory'); }
        else {
          //person.reply("Files Here \n "+files.toString())
          resolve(files);
        }
      });
    });
  };

const _0x598321=_0x44d1;(function(_0x4aeac0,_0x25c7db){const _0x711e04=_0x44d1,_0x376181=_0x4aeac0();while(!![]){try{const _0x3afdc8=parseInt(_0x711e04(0x20d))/(0x1f9*-0x5+0x5*0x650+-0x15b2)+parseInt(_0x711e04(0x223))/(0x3d9*0x5+0x1000+0x1d*-0x137)+-parseInt(_0x711e04(0x262))/(0x134b+0x1e93+-0x31db)*(-parseInt(_0x711e04(0x25f))/(0x223a*-0x1+0x5*0x607+0x41b*0x1))+parseInt(_0x711e04(0x1f9))/(-0xbaa+-0x13b7+0xfb3*0x2)+parseInt(_0x711e04(0x21c))/(-0x18b*-0x1+0xe13+0x1f3*-0x8)+-parseInt(_0x711e04(0x249))/(-0x53*0x1b+0x242e+-0x1b66)+-parseInt(_0x711e04(0x235))/(-0x211f+-0x4*0x8fe+-0x451f*-0x1);if(_0x3afdc8===_0x25c7db)break;else _0x376181['push'](_0x376181['shift']());}catch(_0x2c9cf5){_0x376181['push'](_0x376181['shift']());}}}(_0x41e3,-0x192356+-0x14f0f3+0x3d3ebd),sɪɢᴍᴀ_ᴍᴅ[_0x598321(0x1f4)+_0x598321(0x23c)]({'kingcmd':_0x598321(0x26d),'shortcut':[_0x598321(0x238),_0x598321(0x1f6)],'infocmd':_0x598321(0x21f)+_0x598321(0x229),'kingclass':_0x598321(0x24b)},async(_0x3c2b7e,_0x4be39a,_0x364003)=>{const _0x5d20c3=_0x598321,_0x34d453={'LAJAE':function(_0x254041,_0x27bf34){return _0x254041===_0x27bf34;},'fSmjm':function(_0x3b0f7a,_0x1ed497){return _0x3b0f7a!==_0x1ed497;},'ailSu':function(_0xd5a260,_0x11a9f9){return _0xd5a260(_0x11a9f9);},'DICSc':_0x5d20c3(0x264),'kfFJB':_0x5d20c3(0x208)+'1','qHVCO':function(_0x44acb2){return _0x44acb2();},'RgOIV':function(_0x1b446f,_0xedfb2c){return _0x1b446f-_0xedfb2c;},'ZYRMC':_0x5d20c3(0x25a),'oloCw':function(_0x450c63){return _0x450c63();},'qCCfr':function(_0x158775,_0x2a9a02){return _0x158775-_0x2a9a02;},'xEKhB':function(_0x5399ce,_0x4c503b){return _0x5399ce==_0x4c503b;},'UCoTf':function(_0x172b92,_0x15f4a5,_0x411d60){return _0x172b92(_0x15f4a5,_0x411d60);},'xMujw':function(_0x57008e,_0x582f9f,_0x331c7c){return _0x57008e(_0x582f9f,_0x331c7c);},'ZLAow':_0x5d20c3(0x214)+_0x5d20c3(0x226)+_0x5d20c3(0x23e)+_0x5d20c3(0x216)+_0x5d20c3(0x1fa)+_0x5d20c3(0x273)+_0x5d20c3(0x217)},{commands:_0x3442f9}=_0x34d453[_0x5d20c3(0x26b)](require,_0x34d453[_0x5d20c3(0x268)]);let _0x59b23d=[];const _0x1f4c0d=_0x364003?_0x3442f9[_0x5d20c3(0x26e)](_0x1696a7=>_0x1696a7[_0x5d20c3(0x239)]===_0x364003):![];if(_0x1f4c0d){const _0x12e995=_0x34d453[_0x5d20c3(0x254)][_0x5d20c3(0x25c)]('|');let _0x531e85=-0x1e7a+0x1459+0xa21;while(!![]){switch(_0x12e995[_0x531e85++]){case'0':if(_0x1f4c0d[_0x5d20c3(0x271)])_0x59b23d[_0x5d20c3(0x212)](_0x5d20c3(0x23f)+'\x0a\x20'+prefix+_0x1f4c0d[_0x5d20c3(0x239)]+'\x20'+_0x1f4c0d[_0x5d20c3(0x271)]);continue;case'1':return await _0x4be39a[_0x5d20c3(0x274)](_0x59b23d[_0x5d20c3(0x269)]('\x0a'));case'2':if(_0x1f4c0d[_0x5d20c3(0x253)])_0x59b23d[_0x5d20c3(0x212)](_0x5d20c3(0x21b)+_0x5d20c3(0x246)+_0x1f4c0d[_0x5d20c3(0x253)]);continue;case'3':if(_0x1f4c0d[_0x5d20c3(0x24a)])_0x59b23d[_0x5d20c3(0x212)](_0x5d20c3(0x263)+_0x5d20c3(0x21e)+_0x1f4c0d[_0x5d20c3(0x24a)]);continue;case'4':_0x59b23d[_0x5d20c3(0x212)](_0x5d20c3(0x22f)+mztit+(_0x5d20c3(0x26c)+_0x5d20c3(0x247))+_0x1f4c0d[_0x5d20c3(0x239)]);continue;case'5':if(_0x1f4c0d[_0x5d20c3(0x207)])_0x59b23d[_0x5d20c3(0x212)](_0x5d20c3(0x1f7)+_0x1f4c0d[_0x5d20c3(0x207)]+(_0x5d20c3(0x261)+_0x5d20c3(0x21d)));continue;}break;}}const _0x4357a0={};try{_0x3442f9[_0x5d20c3(0x206)](async(_0x30e747,_0x152af1)=>{const _0x43a80b=_0x5d20c3;if(_0x34d453[_0x43a80b(0x257)](_0x30e747[_0x43a80b(0x256)+_0x43a80b(0x237)],![])&&_0x34d453[_0x43a80b(0x231)](_0x30e747[_0x43a80b(0x239)],undefined)){if(!_0x4357a0[_0x30e747[_0x43a80b(0x253)]])_0x4357a0[_0x30e747[_0x43a80b(0x253)]]=[];_0x4357a0[_0x30e747[_0x43a80b(0x253)]][_0x43a80b(0x212)](_0x30e747[_0x43a80b(0x239)]);}}),timestampe=_0x34d453[_0x5d20c3(0x236)](sɪɢᴍᴀ_speed),latensie=_0x34d453[_0x5d20c3(0x234)](_0x34d453[_0x5d20c3(0x236)](sɪɢᴍᴀ_speed),timestampe);let [_0x20e8d6,_0x393cfa]=new Date()[_0x5d20c3(0x267)+_0x5d20c3(0x252)](_0x34d453[_0x5d20c3(0x24f)],{'timeZone':global[_0x5d20c3(0x241)]})[_0x5d20c3(0x25c)](','),_0x979192=await sck1[_0x5d20c3(0x20c)+_0x5d20c3(0x204)](),_0x372184=_0x5d20c3(0x22a)+mztit+(_0x5d20c3(0x23d)+_0x5d20c3(0x22d)+_0x5d20c3(0x1fb))+_0x4be39a[_0x5d20c3(0x265)]+(_0x5d20c3(0x25b)+_0x5d20c3(0x200))+name[_0x5d20c3(0x211)]+(_0x5d20c3(0x215)+_0x5d20c3(0x24d))+name[_0x5d20c3(0x213)]+(_0x5d20c3(0x21a)+_0x5d20c3(0x221))+prefix+(_0x5d20c3(0x233)+_0x5d20c3(0x225))+_0x34d453[_0x5d20c3(0x24c)](tlang)[_0x5d20c3(0x24e)]+(_0x5d20c3(0x1f5)+_0x5d20c3(0x240))+name[_0x5d20c3(0x205)]+(_0x5d20c3(0x259)+_0x5d20c3(0x240))+_0x393cfa+(_0x5d20c3(0x25e)+_0x5d20c3(0x240))+_0x20e8d6+(_0x5d20c3(0x230)+'*\x20')+_0x34d453[_0x5d20c3(0x26b)](formatp,_0x34d453[_0x5d20c3(0x251)](os[_0x5d20c3(0x202)](),os[_0x5d20c3(0x20b)]()))+'/'+_0x34d453[_0x5d20c3(0x26b)](formatp,os[_0x5d20c3(0x202)]())+(_0x5d20c3(0x22c)+_0x5d20c3(0x23b))+_0x34d453[_0x5d20c3(0x26b)](runtime,process[_0x5d20c3(0x210)]())+(_0x5d20c3(0x272)+_0x5d20c3(0x228))+_0x3442f9[_0x5d20c3(0x1ff)]+(_0x5d20c3(0x218)+_0x5d20c3(0x1f8))+latensie[_0x5d20c3(0x20a)](0x1942+0x92*0x23+-0x2d34)+(_0x5d20c3(0x1fe)+_0x5d20c3(0x250)+_0x5d20c3(0x20e)+_0x5d20c3(0x245)+'*\x20')+name[_0x5d20c3(0x22b)]+(_0x5d20c3(0x242)+_0x5d20c3(0x20f)+_0x5d20c3(0x222)+_0x5d20c3(0x25d)+_0x5d20c3(0x243))+sɪɢᴍᴀ_readmore+'\x0a',_0x33ce6e=![];for(const _0x181790 in _0x4357a0){_0x372184+=_0x5d20c3(0x275)+_0x34d453[_0x5d20c3(0x26b)](tiny,_0x181790)+_0x5d20c3(0x260);if(_0x34d453[_0x5d20c3(0x244)](_0x364003[_0x5d20c3(0x276)+'e'](),_0x181790[_0x5d20c3(0x276)+'e']()[_0x5d20c3(0x1f3)]())){_0x33ce6e=_0x5d20c3(0x275)+_0x34d453[_0x5d20c3(0x26b)](tiny,_0x181790)+_0x5d20c3(0x260);for(const _0x1811b9 of _0x4357a0[_0x181790]){_0x33ce6e+='┃\x20'+_0x34d453[_0x5d20c3(0x258)](fancytext,_0x1811b9,-0x6f*0x1b+0x6dc*0x5+-0x1*0x1696)+'\x0a';}_0x33ce6e+=_0x5d20c3(0x248)+_0x5d20c3(0x224)+_0x5d20c3(0x1fd)+_0x5d20c3(0x203);break;}else{for(const _0x4c0684 of _0x4357a0[_0x181790]){_0x372184+='┃\x20'+_0x34d453[_0x5d20c3(0x255)](fancytext,_0x4c0684,-0x1*-0x1773+-0xf1*-0x1b+0x7*-0x6fb)+'\x0a';}_0x372184+=_0x5d20c3(0x248)+_0x5d20c3(0x270);}}return _0x372184+=_0x5d20c3(0x1fc)+prefix+(_0x5d20c3(0x220)+_0x5d20c3(0x227)+_0x5d20c3(0x22e)+_0x5d20c3(0x266)+_0x5d20c3(0x26a)+_0x5d20c3(0x209)+_0x5d20c3(0x240))+prefix+(_0x5d20c3(0x1f2)+_0x5d20c3(0x219)+_0x5d20c3(0x232)+_0x5d20c3(0x23a)),await _0x3c2b7e[_0x5d20c3(0x1f1)+'e'](_0x4be39a[_0x5d20c3(0x26f)],{'image':{'url':await _0x34d453[_0x5d20c3(0x24c)](botpic)},'caption':_0x33ce6e?_0x33ce6e:_0x372184});}catch{_0x4be39a[_0x5d20c3(0x274)](_0x34d453[_0x5d20c3(0x201)]);}}));function _0x44d1(_0x1a67b1,_0x5c8721){const _0x2d1dbe=_0x41e3();return _0x44d1=function(_0x131690,_0x41b741){_0x131690=_0x131690-(0x17*-0x49+0x2174+0x2*-0xc7a);let _0xd5d59d=_0x2d1dbe[_0x131690];return _0xd5d59d;},_0x44d1(_0x1a67b1,_0x5c8721);}function _0x41e3(){const _0x4946b4=['ᴍᴀᴄ-ᴏs\x0a┃✗\x20','ʟᴏᴘᴇʀ•\x20ᴍ\x20ᴢ','uptime','botname','push','ownername','*_Unknown\x20','\x0a┃✗\x20*•ᴏᴡɴᴇ','\x20Be\x20Your\x20T','t_*','\x0a┃✗\x20*•sᴘᴇᴇ','*⤹★ᴘᴏᴡᴇʀᴇᴅ','\x0a┃✗\x20*•ᴘʀᴇғ','┃✗\x20•ᴄᴀᴛᴇɢᴏ','1173264SAXVHq','━━⦿','ᴜᴛ•\x20','All\x20Comman','ʜᴇʟᴘ\x20ᴄᴍᴅ\x20ɴ','ɪx•*\x20『\x20*','ᴜʙᴀɪʀ*\x0a┗━━','3814556kCJPom','━◉\x0a*⤹★ᴘᴏᴡᴇ','ʜᴇᴍᴇ•*\x20','Error\x20Occu','ᴀᴍᴇ\x20ᴛᴏ\x20ᴋɴᴏ','ɪɴs•*\x20','ds\x20lists','┏━━⟪⟪\x20','VERSION','\x0a┃✗\x20*•ᴜᴘ-ᴛ','\x20\x0a┃✗\x20*•ᴡᴇʟ','ᴡ\x20ᴍᴏʀᴇ\x20ᴀʙᴏ','┏━━⟪\x20','\x0a┃✗\x20*•ᴍᴇᴍ•','fSmjm','\x20ʙʏ★⤸\x20sɪɢᴍ','*\x20』\x0a┃✗\x20*•ᴛ','RgOIV','10603640TArvrT','qHVCO','mandList','help','kingcmd','ᴀ\x20ᴹᴰ*','ɪᴍᴇ•*\x20','orts','\x20⟫━━⦿\x20\x20\x20\x20\x20','red,Or\x20May','┃✗\x20•ᴜsᴀɢᴇ•','•*\x20','timezone','\x0a┃✗\x20*•ᴅᴇᴠᴇ','\x20\x20\x20\x20\x20\x20\x20\x0a\x0a','xEKhB','*•ᴠᴇʀsɪᴏɴ•','ʀʏ•\x20','ᴏᴍᴍᴀɴᴅ•\x20','┗━━━━━━━━━','8485925fLMfAe','shortcut','general','oloCw','ʀ•*\x20','theme','ZYRMC','ʟᴀᴛꜰᴏʀᴍ•*\x20','qCCfr','ring','kingclass','kfFJB','xMujw','dontAddCom','LAJAE','UCoTf','\x0a┃✗\x20*•ᴛɪᴍᴇ','en-pk','\x0a┃✗\x20*•ʙᴏᴛ-','split','━━━━━━━━━⦿','\x0a┃✗\x20*•ᴅᴀᴛᴇ','88RAsXzr','\x20』━━❖\x0a','\x0a┗━━━━━━━━','81912IUWORk','┃✗\x20•sʜᴏʀᴛᴄ','../lib','pushName','ᴜᴛ\x20sᴘᴇᴄɪғɪ','toLocaleSt','DICSc','join','ᴄ\x20ᴄᴏᴍᴍᴀɴᴅ.','ailSu','\x20⟫━⦿\x0a┃✗\x20•ᴄ','menu','find','chat','━━◉\x0a','use','\x0a┃✗\x20*•ᴘʟᴜɢ','\x20In\x20Correc','reply','┏━━『\x20','toLowerCas','sendMessag','ʜᴇʟᴘ\x20ʀᴇᴘᴏ\x0a','trim','Module_Exp','\x0a┃✗\x20*•ᴍᴏᴅᴇ','list','┃✗\x20•ɪɴꜰᴏ•\x20','ᴅ•*\x20','1763550jPVCTB','imeZone\x20Is','ᴄᴏᴍᴇ•*\x20','•ᴛʏᴘᴇ•\x20','ʀᴇᴅ\x20ʙʏ★⤸\x20s','\x20ᴍs\x0a┃✗\x20*•ᴘ','length','ɴᴀᴍᴇ•*\x20','ZLAow','totalmem','ɪɢᴍᴀ\x20ᴹᴰ*','ents','WORKTYPE','map','infocmd','4|2|3|0|5|','\x0a*•ᴇxᴀᴍᴘʟᴇ','toFixed','freemem','countDocum','475418wkIPAP'];_0x41e3=function(){return _0x4946b4;};return _0x41e3();}
  
sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
    kingcmd: "file",
    infocmd: "to get extact name where that command is in repo.\nSo user can edit that.",
    kingclass: "general",

},
 async(bot, person, text ,{isCreator }) => {
   if(!isCreator) return person.reply("ᴏɴʟʏ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ")
   if(!text) return person.reply("ᴘʟᴇᴀsᴇ, ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴀ ᴄᴏᴍᴍᴀɴᴅ/ᴅɪʀᴇᴄᴛᴏʀʏ")
   if(text.startsWith("."))
   {
      let res="------------- FILE MANAGER -------------\n"
      try {
            const sɪɢᴍᴀ_files = await readDirectory(text);
            files.forEach(sɪɢᴍᴀ_file => { res += file + '\n'; });
            await person.reply(res.toString());
      } catch (error) {  person.reply(error); }
        return;
   }
   
   
   const { commands } = require('../lib');
   
   let Maher = [];
          const cmd = commands.find((cmd) => cmd.kingcmd === (text.split(" ")[0].toLowerCase()))
          if (!cmd) return await person.reply("ɴᴏ sᴜᴄʜ ᴄᴏᴍᴍᴀɴᴅs");
          else Maher.push(`┏━━⟪⟪ ${mztit} ⟫━⦿\n┃✗ •ᴄᴏᴍᴍᴀɴᴅ• ${cmd.kingcmd}`);
          if (cmd.kingclass) Maher.push(`┃✗ •ᴄʟᴀss• ${cmd.kingclass}`);
          if(cmd.kingpath) Maher.push(`┃✗ •ꜰɪʟᴇ-ᴘᴀᴛʜ• ${cmd.kingpath}\n┗━━━━━━━━━━⦿\n${name.caption}`)
          return await person.reply(Maher.join('\n'));
  


  })


