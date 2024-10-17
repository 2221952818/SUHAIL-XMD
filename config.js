const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_04_10_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjksXG4gICAgICAgIDYwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1LFxuICAgICAgICA2MCxcbiAgICAgICAgNyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxODksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDg0LFxuICAgICAgICA0MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDY0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDU2LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc1LFxuICAgICAgICA1NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjExLFxuICAgICAgICA0LFxuICAgICAgICA3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQxLFxuICAgICAgICA1NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc5LFxuICAgICAgICAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOCxcbiAgICAgICAgMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvcWtCTnlJbE1CM2oyc0tFU2VMYkdkOFo3L0hwbWNKN3RXSU05T2lHZ1NNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFZlFoSEVsQ1NfNjJUTTZjYm9IbjJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjkyZDczNWNjLTQ5MjMtNDg0Ni1hNjg4LWYzYTAzOTdiNTEzYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDI1NSxcbiAgICAgIDIxMCxcbiAgICAgIDI0MixcbiAgICAgIDk4LFxuICAgICAgMjUsXG4gICAgICAxNjYsXG4gICAgICA5NCxcbiAgICAgIDgsXG4gICAgICAyMjIsXG4gICAgICA4OSxcbiAgICAgIDE5NCxcbiAgICAgIDExMyxcbiAgICAgIDIwOSxcbiAgICAgIDExOSxcbiAgICAgIDUzLFxuICAgICAgMTM4LFxuICAgICAgMjM1LFxuICAgICAgMjM1LFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OCxcbiAgICAgIDIwMyxcbiAgICAgIDI0NCxcbiAgICAgIDEzMCxcbiAgICAgIDkyLFxuICAgICAgMjUzLFxuICAgICAgMjM1LFxuICAgICAgMjQwLFxuICAgICAgMTg4LFxuICAgICAgMTE1LFxuICAgICAgMTM1LFxuICAgICAgNCxcbiAgICAgIDE1NCxcbiAgICAgIDY2LFxuICAgICAgMjE3LFxuICAgICAgMTI5LFxuICAgICAgMTUsXG4gICAgICA5NixcbiAgICAgIDE5MyxcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHTURHWE5NWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2NjUwNjg5OTo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFjdGl2ZSBBZG1pblwiLFxuICAgIFwibGlkXCI6IFwiMTQzNDgyNTQyOTE1NjA0OjQ4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05MN2srd0JFTWFUeHJnR0dBc2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVkNMWUlBSDErazVrK1QxQTZlYUVDZ1I1aEtQNUJ4dVR0SjY0aFVSdG9XOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGdDBWR0hOS0VKRk9zQXhOT1JWZWs5bEZSR2J4RzQrek9TYzNaZFNMU3d6NVlWeHJ0NEFIZmtkazJTbDlXbENZc2xvUUVxMk5vR0RKeDgyMnpjNEFEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOOFJMVVU3RlFITC9kSUQ0MklTREg3M052MVZYY243cnAyb2dXVDhCU29yNDE2b3hmVUo5a2IxZVNqVVBmWTZQb3BMeXdzWmlUU21INHpIRGl4MkVpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDY2NTA2ODk5OjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5MjAyNjM0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
