import { Markup } from "telegraf";

export async function actionButtons() {
    return Markup.keyboard([
        ['Корисні ресурси 🌏', 'Про чат-бота 🤖'],
        ['Стереотипи 👥', 'Червоні прапорці у стосунка 💔'],
        ['Підтримка 🤜🤛', 'Якщо я відчуваю гнів та Роздратування 🤬'],
        ['Термінологія 📚']
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

export async function aboutChatBot() {
    return Markup.keyboard(
        ['Основна інформація ⚙️', 'Повернутись ◀️'],
    ).resize(true)
}

export async function stereotypes() {
    return Markup.keyboard([
        ['Файли зі стреотипами та іх спрощення 🗃' , 'Повернутись ◀️']
    ]).resize(true)
}







