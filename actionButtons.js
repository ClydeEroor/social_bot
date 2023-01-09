import { Markup } from "telegraf";
// Термінологія
// Статистика
// Допомога
// Якщо ви відчуваєте гнів/роздратування
// Корисні ресурси
// Став/стала свідком насильства
export async function actionButtons() {
    return Markup.keyboard([
        ['Термінологія 📚', 'Статистика 📊'],
        ['Допомога 🤜🤛', 'Якщо ви відчуваєте гнів/роздратування 🤬'],
        ['Корисні ресурси 🌏', 'Я став/стала свідком насильства 🗣']
    ]).resize(true)
}
//
// Terminology
export async function terminology() {
    return Markup.keyboard(
        ['Що таке гендерно зумовлене насильство?', 'Що таке домашнє насильство?','Повернутись ◀️']
    ).resize(true)
}

export async function support() {
    return Markup.keyboard([
        ['Телефони довіри 📞' , 'Організації 🏫'],
        ['Повернутись ◀️']
    ]).resize(true)
}

export async function usefulResources() {
    return Markup.keyboard([
        Markup.button.callback('Книги 📚'),
        Markup.button.callback('Відео 📹'),
        Markup.button.callback('Платформи 🌐'),
        Markup.button.callback('Повернутись ◀️')
    ]).resize(true)
}

export async function angryEmotion() {
    return Markup.keyboard([
        ['Техніка заземлення 🧘' , 'Техніка дихання 🌬'],
        ['Повернутись ◀️']
    ]).resize(true)
}


















