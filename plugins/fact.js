/*created by Kgtech 🕵
contact dev1 237656520674 ♻️
contact dev2 237650564445 ♻️
© Copy coder alert ⚠
*/




const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "fact",
    desc: "🧠 Get a random fun fact",
    react: "😝",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = 'https://uselessfacts.jsph.pl/random.json?language=en';  // API for random facts
        const response = await axios.get(url);
        const fact = response.data.text;

        const funFact = `
🤣 *KERM_MD-V4 RANDOM FACT* 🤣

${fact}

Isn't that interesting ? 😄
`;

        return reply(funFact);
    } catch (e) {
        console.log(e);
        return reply("⚠️ An error occurred while fetching a fun fact. Please try again later🤕.");
    }
});

cmd({
    pattern: "joke",
    desc: "😂 Get a random joke",
    react: "🤣",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = 'https://official-joke-api.appspot.com/random_joke';  // API for random jokes
        const response = await axios.get(url);
        const joke = response.data;
        const jokeMessage = `
*😂Here's a random joke for you😂.*

*${joke.setup}*
${joke.punchline} 😄

> *POWERED BY KG TECH*
`;
        return reply(jokeMessage);
    } catch (e) {
        console.log(e);
        return reply("⚠️ Couldn't fetch a joke right now. Please try again later.");
    }
});
cmd({
    pattern: "minutor",
    desc: "Start a countdown timer for a specified duration.",
    react: "⏳",
    category: "utility",
    use: ".minutor <time><s|m|h>",
    filename: __filename,
}, async (conn, mek, m, { args, reply }) => {
    try {
        // Validate input
        if (!args[0]) {
            return reply("❌ Please provide a valid duration.\nExamples: `.minutor 10s`, `.minutor 5m`, `.minutor 1h`");
        }

        // Extract time value and unit
        const input = args[0];
        const timeValue = parseInt(input.slice(0, -1)); // Extract number
        const timeUnit = input.slice(-1).toLowerCase(); // Extract unit (s, m, h)

        if (isNaN(timeValue) || timeValue <= 0 || !["s", "m", "h"].includes(timeUnit)) {
            return reply("❌ Invalid format. Use `<number><s|m|h>`.\nExamples: `.minutor 10s`, `.minutor 5m`, `.minutor 1h`");
        }

        // Convert time to milliseconds
        let duration;
        switch (timeUnit) {
            case "s": // Seconds
                duration = timeValue * 1000;
                break;
            case "m": // Minutes
                duration = timeValue * 60 * 1000;
                break;
            case "h": // Hours
                duration = timeValue * 60 * 60 * 1000;
                break;
            default:
                return reply("❌ Unsupported time unit. Use `s` for seconds, `m` for minutes, or `h` for hours.");
        }

        // Notify user that the countdown has started
        reply(`⏳ Countdown started for ${timeValue}${timeUnit}. I'll notify you when the time is up!`);

        // Wait for the specified duration
        await new Promise(resolve => setTimeout(resolve, duration));

        // Send message after the time is up
        reply(`⏰ Time's up! ${timeValue}${timeUnit} have passed.\n\n> POWERED BY KERM🧞‍♂️.`);
    } catch (error) {
        console.error("Error in minutor command:", error);
        reply("❌ An error occurred while starting the timer. Please try again.");
    }
});
cmd({
  pattern: "lyrics",
  alias: ["songlyrics", "lyric"],
  desc: "Searches for song lyrics using artist and song title.",
  category: "music",
  use: "<artist> <song title>",
  filename: __filename
}, async (_0x1cec94, _0x4f8131) => {
  try {
    if (!_0x4f8131 || !_0x4f8131.trim().includes(" ")) {
      return await _0x1cec94.reply("*_Please provide the artist and song title separated by a space: Artist SongTitle_*");
    }

    const args = _0x4f8131.trim().split(" ");
    const artist = args[0];
    const song = args.slice(1).join(" ");

    if (!artist || !song) {
      return await _0x1cec94.reply("*_Invalid format! Use: Artist SongTitle_*");
    }

    const searchUrl = `https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(song)}`;

    const response = await axios.get(searchUrl);
    const lyrics = response.data?.lyrics;

    if (!lyrics) {
      return await _0x1cec94.reply(`*_No lyrics found for the song "${song}" by "${artist}"_*`);
    }

    const result = `*🎶 Lyrics for "${song}" by "${artist}" 🎵*\n\n${lyrics.substring(0, 4000)}\n\n`;

    await _0x1cec94.reply(result);
  } catch (error) {
    console.error(error);
    await _0x1cec94.reply("*_An error occurred while fetching the lyrics. Try again later!_*");
  }
});