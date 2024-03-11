import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  en: {
    translations: {
      "DriverQ":"Time to check your query",
      "pNumber":"Phone number",
      "notInQ":"Not in query?",
      "sCheck":"check",
      "sReturn":"return",
      "sRegistrate":"registrate",
      "sYourQuery":"Your query",
      "sSubmit":"submit",
      "sEstimateTime":"Estimatid time",
      "sFactorySelect":"factory select",
      "sYaTsZ":"YaTsZ",
      "sHTsZ":"HTsZ",
      "sNoTsZ":"NoTsZ",
      "sZhTsZ":"ZhTsZ",
      "sNaTsZ":"NaTsZ",
      "sErorrTitle":"We are working really hard!",
      "sErorrText":"Apologies for 404. Reach out to our team at ABC-DEF-GHIJ.",
      "sHome":"Home",
      "sQuery":"query",
      "sAllQuery":"all query", 
      "sLogin": "Login",
      "sLogout":"Logout",
      "sUserName":"User name",
      "sPassword":"Password",
      "sLoginTitle":"Time to login",
      "sFinished":"Finished",
      "sFinish":"Finish",
      "sDelete":"Delete",
      "sMoveDown":"Move ↓",
      "sMoveUp":"Move ↑",
      "sCall":"♫",
      "sQueryControlFactory":"Query Control Factory",
      "sQueryFactory":"Query Factory"
    }
  },
  ua: {
    translations: {
      "DriverQ":"Перевірити чергу",
      "pNumber":"номер телефону",
      "notInQ":"Не в черзі?",
      "sCheck":"перевірити",
      "sReturn":"повернутися",
      "sRegistrate":"регістрація",
      "sYourQuery":"Ваша черга",
      "sSubmit":"реестрація",
      "sEstimateTime":"очікуванний час прибуття",
      "sFactorySelect":"Обрати місце призначення",
      "sYaTsZ":"ЯЦЗ",
      "sHTsZ":"ГЦЗ",
      "sNoTsZ":"НоЦЗ",
      "sZhTsZ":"ЖЦЗ",
      "sNaTsZ":"НЦЗ",
      "sErorrTitle":"Ми працюємо над помилкой!",
      "sErorrText":"Вибачте за 404. Зверніться до нашої команди за адресою ABC-DEF-GHIJ.",
      "sHome":"Головна",
      "sQuery":"Керування чергою",
      "sAllQuery":"Загальна черга", 
      "sLogin": "Логін",
      "sLogout":"Вихід",
      "sUserName":"Ім'я користувача",
      "sPassword":"Пароль",
      "sLoginTitle":"Aвторизація",
      "sFinished":"Виконано",
      "sFinish":"Закінчити",
      "sDelete":"Видалити",
      "sMoveDown":"Рухати ↓",
      "sMoveUp":"Рухати ↑",
      "sCall":"♫",
      "sQueryControlFactory":"Керeвання чергою заводу",
      "sQueryFactory":"Черга заводу"          
    }
  }
};

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'ua',
  resources: resources,
  ns: ['translations'],
  defaultNS: 'translations'
});



i18n.languages = ['en', 'ua'];

export default i18n;