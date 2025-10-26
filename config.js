const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0Z2OUtQVFhmcDNMblVXTkIxWVB5UkkrdFhCNGRuckxtaEV1MDlqcjZuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOU1GdS9FMTZZdEpBSFBxTC84YUNLdnJTUU9qQ0VKN2ZzenFISEtsK0lVVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQ2t2SCtOMm11ejZMV1B1alRBNnNOREw5YXp0NUpmWksvSXFGQi96WVdVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlcGgzVk5wc3Q4TUV4VUFReUl0N3Z2YzRhTEZ5ZmFlUDk2UCtWSmRUQ3lnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZBMUtudmkzSi9xQTBCbUE5enNoUWJPNi9MTWNSZjdyaTc3VkVjazdybnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikg2UmZSK1dQSkhvYWVlcjlxdWtJcytpZ1V2bzBTMlg3UmsxTUVpQnQyd1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUx4UStVZExkU1ptZ3JxVU1LZi8zVEZRL3QxZnE1OWJjOVo3Yk83ZDRXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDdHUzM4TnErb0xVSjVJNEFJVlE3MzY0Smx5T2E5TWZnUC9POUl6NmduVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFCbnF0QklDeWo5S3hodVQ4VDJpS0R6bTRJQlJseWxYWWwvYXAzQlNQT1lMdWhaRElkamw3RzJ5K0R6U2diK3FpRStOVGl6SnlpUXIvV1VhckFnL0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6IlNWeXdRSm9aN3hodVNWLzYwclV3OUdXVW4yRXl6dzgyYnVRaEpjU1VJUDQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjI0RjdZTVNNIiwibWUiOnsiaWQiOiI5MjMyMjk4NTQ3MTE6MzJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI1OTI3NDkyNzU4MzM5NzozMkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l6VXg1b0ZFTUd6OXNjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjliZC9rYUJyMCtIYW45ZFEzb2N2azZMMjFDd1JjLzVWTEUwcVgvQmNhaTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikt3ekJueVNWYkRKMEk3Sjlka2dacFFGMzdna1ZCQzlyaTVmSkordWJHcmRJdmR4T0lPN2FYMWpnSmR3Z0lYd0xkSXRyc0oxanVHbm52L2IvMXFCVUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjOE1Wclc2Q1VEYVJacktUT1FUOWR0K1pUZmVGQXdMSmk3KzBqRkFxYzM2L2lQV21TR0dIanJSRmVPZWtmUTkvdUJpYjZzWGZjZlJENmxNZnM1N0pCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzIyOTg1NDcxMTozMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmVzNmNUdnYTlQaDJwL1hVTjZITDVPaTl0UXNFWFArVlN4TktsL3dYR290In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjE0NTA0MzYsImxhc3RQcm9wSGFzaCI6IlBXazVCIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW E3-AHMII-MD𓅓*",
// set the auto reply massage on status reply
AUTO_CHATBOT: process.env.AUTO_CHATBOT || "false", 
// "true" = default ON, "false" = default OFF
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ibb.co/mCR978BC",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "E3-AHMII-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Powered By E3-AHMII-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "923229854711",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "E3-AHMII-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3-AHMII-MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ibb.co/mCR978BC",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923229854711",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
