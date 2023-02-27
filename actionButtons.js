import { Markup } from "telegraf";
//📞 Контакти допомоги ✅
//♀️♂️Гендерно зумовлене насильство
//😓Психологічне
//🤯 Газлайтинг
//⚠️ Домашнє насильство
//💔 Складні стосунки
// 🙅‍♀️Сексуальні домагання
export async function actionButtons() {
    return Markup.keyboard([
       ['♀️♂️Гендерно зумовлене насильство'],
        ['😓Психологічне насильство','🤯 Газлайтинг'],
        ['⚠️ Домашнє насильство','💔 Складні стосунки'],
        ['📞 Контакти допомоги','🙅‍♀️Сексуальні домагання'],
    ]).resize(true)
}
//
// ♀️♂️Гендерно зумовлене насильство
export async function gnz() {
    return Markup.keyboard([
        ['💔 Приклади ГЗН','🤔 Хто вчиняє ГЗН?'],
        ['🤔Хто може постраждати від ГЗН?'],
        ['💔Якщо я зазнав (-ла) ГЗН','Повернутись ◀️'],
        ]).resize(true)
}
export async function gas() {
    return Markup.keyboard([
        ['🤔Навіщо кривдникам(-цям) таке?'],
        ['🤔Як боротися з газлайтингом?'],
        ['Повернутись ◀️'],
    ]).resize(true)
}
//Domestic violence
export async function homeViolence() {
    return Markup.keyboard([
        ['💰Економічне насильство','🤯Психологічне насильство'],
        ['🆘Я зазнав(-ла) домашнього насильства'],
        ['😯Я став(-ла) свідком домашнього насильства'],
        ['🙅‍♀️Сексуальне насильство','✊Фізичне насильство'],
        ['Повернутись ◀️']
    ]).resize(true)
}
export async function angry() {
    return Markup.keyboard([
        ['🤔Як розпізнати психологічне насилля?','🆘Допомога'],
        ['😬Якщо я аб’юзер(-ка)?','Повернутись ◀️']
    ]).resize(true)
}


// export async function usefulResources() {
//     return Markup.keyboard([
//         Markup.button.callback('Книги 📚'),
//         Markup.button.callback('Відео 📹'),
//         Markup.button.callback('Платформи 🌐'),
//         Markup.button.callback('Повернутись ◀️')
//     ]).resize(true)
// }

// export async function angryEmotion() {
//     return Markup.keyboard([
//         ['Техніка заземлення 🧘' , 'Техніка дихання 🌬'],
//         ['Повернутись ◀️']
//     ]).resize(true)
// }


















