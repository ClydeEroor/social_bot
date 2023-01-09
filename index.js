import {Telegraf} from 'telegraf';
import * as dotenv from 'dotenv'
import {
    actionButtons,
    terminology,
    support,
    angryEmotion
} from "./actionButtons.js";

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
        await ctx.replyWithHTML(`<b>Привіт</b> <b>${ctx.chat.first_name}!</b>`)
        await ctx.replyWithHTML('<b>Мене звати Протидія. Я можу допомогти тобі у таких обставинах як гендерно зумовлене та домашнє насильство. Можу надати таку інформацію.</b>', await actionButtons())
        // ctx.reply('Обери допомогу', )

    } catch (e) {
        console.log(e)
    }
});

// Listeners for Bot

// Terminology
bot.hears('Термінологія 📚', async (ctx) => {
    try {
        ctx.reply("Ця термінологія допоможе розібратись:", await terminology())
    } catch (e) {
        console.log(e)
    }
})
bot.hears('Що таке гендерно зумовлене насильство?', async (ctx) => {
    try {
        ctx.replyWithHTML('<b>Гендерно зумовлене насильство</b> - це індивідуальні чи колективні насильницькі дії, спрямовані переважно або виключно на певну групу осіб за ознакою гендерної приналежності.Гендерно зумовлене насильство є крайнім проявом дискримінації за ознакою статті і не має вікових, соціально-економічних чи географічних обмежень.', await terminology())
    } catch (e) {
        console.log(e)
    }
})
bot.hears('Що таке домашнє насильство?', async (ctx) => {
    try {
        ctx.replyWithHTML("<b>Домашнє насильство</b> - діяння (або бездіяльність) фізичного, сексуального, психологічного або економічного насильсва, шо створюються у сім'ї  чи між родичами (колишнім подружжям або особами, що проживали разом).", await terminology())
    } catch (e) {
        console.log(e)
    }
})

// Statistcis
bot.hears('Статистика 📊', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>28%</b> населення України вважають, що фізичне насильсвто чоловіка проти жінки можна виправдати.', await actionButtons())
        await ctx.replyWithHTML('<b>15%</b> жінок, у яких зараз є партнер, стверджують, що зазнали від нього фізичного або сексуального насильства.')
        await ctx.replyWithHTML('<b>32%</b> чоловіків вважають, що думка жінки щодо рішень, від яких залежить спільне сімейне життя, є менш  вагомою.')
    } catch (e) {
        console.log(e)
    }
})

// Help to someone
bot.hears('Допомога 🤜🤛', async (ctx) => {
    try {
        await ctx.reply('У випадку критичних ситуацій для Вас або ваших близьких, зверніться за безоплатною допомогою.', await support())
    } catch (e) {
        console.log(e)
    }
})
bot.hears('Телефони довіри 📞', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>☎️ Урядова лінія: </b><a>116123</a>', await support())
        await ctx.replyWithHTML('<b>📞 Урядова лінія: </b> <a>0800500335</a>')
        await ctx.replyWithHTML('<b><i>Кіровоградський обласний центр соціально-психологічної допомоги:</i></b> <a>0522274236</a>')
    } catch (e) {
        console.log(e)
    }
})

bot.hears('Організації 🏫', async (ctx) => {
    try {
        await ctx.replyWithHTML('🧡 <b>Кар’єрний хаб “Вона” організовує курси для жінок, що постраждали від домашнього та гендерно зумовленого насильства. </b><a>https://www.vonahub.org.ua/</a>', await support())
        await ctx.replyWithHTML('🧡 <b>Український жіночий фонд. </b><a>https://uwf.org.ua/contacty/</a>')
    } catch (e) {
        console.log(e)
    }
})

// Angry
bot.hears('Якщо ви відчуваєте гнів/роздратування 🤬', async (ctx) => {
    try {
        ctx.reply('Абсолютно нормально відчувати роздратування, гнів, сум та агресію. Це все прояви стресу внаслідок навколишнього середовища. Але чи варто випускати це на себе або близьких? Маємо декілька вправ, що допоможуть вам.', await angryEmotion())
    } catch (e) {
        console.log(e)
    }
})
bot.hears('Техніка заземлення 🧘', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>Включення у довкілля і зосередження на тому, що ви робите, називаються “заземленням”.</b>', await angryEmotion())
        await ctx.sendMessage('🧡 Спершу зверніть увагу як ви почуваєтеся, і що ви думаєте.')
        await ctx.sendMessage('🧡 Потім сповільниться і зробіть повільний видих, повільно потягніться. Притисніть свої ступні до підлоги.')
        await ctx.sendMessage('🧡 А тепер сконцентруйте увагу наколо себе. Із цікавістю спостерігайте за тим, хто чи що поруч з вами, і що ви робите.')
        await ctx.sendMessage('🧡 Сконцентруйте увагу і подумайте, які 5 предметів навколо вас? Які 3-4 звуки ви чуєте? Вдихніть повітря. Який запах відчуваєте?')
        await ctx.sendMessage('🧡 Після кількох практик ви помітите, що вам значно легше використовувати замемлення у складних ситуаціях.')
    } catch (e) {
        console.log(e)
    }
})
bot.hears('Техніка дихання 🌬', async (ctx) => {
    try {
        ctx.replyWithHTML('<b>Також називають дихання по квадрату.</b>', await angryEmotion())
        await ctx.sendMessage('🧡 За цією методикою потрібно пальцем однієї руки водити по долоні іншої, утворюючи квадрат. На вертикальних гранях уявного квадрату треба робити вдих/видих, а на горизонтальних паузи.')
        await ctx.sendMessage('🧡 Вдих – пауза – видих – пауза. Так треба повторювати хвилин з п’ять або поки не заспокоїшся.Таким чином людина починає контролювати своє дихання. Також це і тактильні відчуття – людина починає відчувати своє тіло.')
    } catch (e) {
        console.log(e)
    }
})

// Interesting sources
bot.hears('Корисні ресурси 🌏', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>Курс “Дім (не)безпеки” </b><a>https://nonviolence.ed-era.com/structure</a>')
        await ctx.replyWithHTML('<b>Гайд здоровим стосункам” </b><a>https://youtube.com/playlist?list=PLV4zy1apmIUagcdAl05ANdPo-KewIaPxq </a>')
        await ctx.replyWithHTML('<b>Виставка та збір реальних історій “Річ у тім” </b><a>https://richutim2021.rozirvykolo.org/</a>')
        await ctx.replyWithHTML('<b>Гра “Трамплін до рівності” </b><a>https://zags.org.ua/symuliator-vidnosyn/</a>')

    } catch (e) {
        console.log(e)
    }
})

//witness
bot.hears('Я став/стала свідком насильства 🗣', async (ctx) => {
    try {
        await ctx.reply('Якщо ситуація вимагає втручання і ви розцінюєте її безп</b>ечною для свого життя то ось список рекомендацій:', await actionButtons())
        await ctx.replyWithHTML('🧡 <b>Відверність увагу кривдника, можете запитати котра година, дорогу тощо.</b>')
        await ctx.replyWithHTML('🧡 <b>Знайдіть підтримку серед оточуючих людей.</b>')
        await ctx.replyWithHTML('🧡 <b>Будьте обережними. Можете показати своє занепокоєння та запропонувати постраждалій/постраждалому допомогу.\n</b>')
    } catch (e) {
        console.log(e)
    }
})

// Listen button Back
bot.hears('Повернутись ◀️', async (ctx) => {
    try {
        await ctx.reply('Ви повернулись до головного меню', await actionButtons())
    } catch (e) {
        console.log(e)
    }
})

// bot.hears('Про чат-бота 🤖', async (ctx) => {
//     try {
//         ctx.reply('Ви повернулись до головного меню', await aboutChatBot())
//     } catch (e) {
//         console.log(e)
//     }
// })


// bot.hears('Відео 📹', async (ctx) => {
//     try {
//         console.log(ctx.message.id)
//
//         // send local documents
//
//         ctx.telegram.sendDocument(ctx.from.id, {
//             source: './data/pdf/dopomogaTest.doc',
//             filename: 'dopomogaTest'
//         })
//
//         // Send video
//
//         // ctx.replyWithMediaGroup([
//         //     {
//         //         type: 'video',
//         //         media: {
//         //             source: './data/video/protect.mp4',
//         //             filename: 'BigBuckBunny'
//         //         }
//         //     }
//         // ])
//
//     } catch (e) {
//         console.log(e)
//     }
// })

// Стикер пример
//    await ctx.sendSticker(ctx.chat.id ,{sticker:'CAACAgEAAxkBAAIzAWO15MremdoT61rrLx6S9JBPPB2yAAIZAwACWv8ZROBIaOlTU1-BLQQ'})

// bot.on('sticker',async (ctx) => {
// await ctx.sendSticker({stiker:"CAACAgEAAxkBAAIzAWO15MremdoT61rrLx6S9JBPPB2yAAIZAwACWv8ZROBIaOlTU1-BLQQ"})
// console.log(await ctx.message);
// })

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));