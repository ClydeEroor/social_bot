import { Telegraf } from 'telegraf';
import { actionButtons, usefulResources, aboutChatBot, stereotypes } from "./actionButtons.js";
import * as dotenv from 'dotenv'
dotenv.config()

export const bot = new Telegraf(process.env.BOT_TOKEN);

// Commands for BOT

bot.command('quit', async (ctx) => {
    try {
        await ctx.telegram.leaveChat(ctx.message.chat.id);
        await ctx.leaveChat();
    } catch (e) {
        console.log(e)
    }

});

bot.command('start', async (ctx) => {
    try {
        await ctx.sendMessage("Привіт, цей бот тобі допоможе справитись з насиллям")
        ctx.reply('Обери допомогу', await actionButtons())

    } catch (e) {
        console.log(e)
    }
});

bot.command(`info`, async (ctx) => {
    try {
        await ctx.sendMessage('Добро пожаловать')
        await ctx.reply('Какойто аргумент')
    } catch (e) {
        console.log(e)
    }

});


// Listeners for Bot

bot.hears('Корисні ресурси 🌏', async ctx => {
       try {
        ctx.reply('adas', await usefulResources())

    } catch (e) {
        console.log(e)
    }
})

bot.hears('Про чат-бота 🤖', async ctx => {
    try {
     ctx.reply('Ви повернулись до головного меню' , await aboutChatBot())
 } catch (e) {
     console.log(e)
 }
})

bot.hears('Стереотипи 👥', async ctx => {
    try {
     ctx.reply('Ви повернулись до головного меню' , await stereotypes())
 } catch (e) {
     console.log(e)
 }
})

bot.hears('Підтримка 🤜🤛', async ctx => {
    try {
     ctx.reply('Ви повернулись до головного меню' , await stereotypes())
 } catch (e) {
     console.log(e)
 }
})




// Button Back

bot.hears('Повернутись ◀️', async ctx => {
    try {
     ctx.reply('Ви повернулись до головного меню' , await actionButtons())
 } catch (e) {
     console.log(e)
 }
})


bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));