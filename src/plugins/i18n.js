import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);


const messages = {
    'uk': {
        lang: 'Мова',
        contact: 'Контакт',
        gallery: 'Галерея',
        main: 'Головна',
        app_title: 'Кузня Пальмира',
        contact_title: 'Зворотній зв\'язок',
        contact_name: 'Ім\'я',
        contact_email: 'Ваша електронна пошта',
        contact_message: 'Повідомлення',
        contact_send: 'Надіслати',
    },
    'ru': {
        lang: 'Язык',
        contact: 'Контакт',
        gallery: 'Галлерея',
        main: 'Главная',
        app_title: 'Кузница Пальмира',
        contact_title: 'Обратная связь',
        contact_name: 'Имя',
        contact_email: 'Ваш електронный адрес',
        contact_message: 'Сообщение',
        contact_send: 'Отправить',
    },
    'en': {
        lang: 'Language',
        contact: 'Contact',
        gallery: 'Gallery',
        main: 'Home',
        app_title: "Palmir's Smithy",
        contact_title: 'Contact',
        contact_name: 'Name',
        contact_email: 'e-mail',
        contact_message: 'Message text',
        contact_send: 'Send',
    },
    'de': {
        lang: 'Sprache',
        contact: 'Kontakt',
        gallery: 'Galerie',
        main: 'Home',
        app_title: "Palmir's Smithy",
        contact_title: 'Kontakt',
        contact_name: 'Name',
        contact_email: 'E-Mail',
        contact_message: 'Nachrichtentext',
        contact_send: 'Senden',
    }
};

const i18n = new VueI18n({
    locale: 'uk', // set locale
    fallbackLocale: 'uk', // set fallback locale
    messages, // set locale messages
});

export default i18n;
