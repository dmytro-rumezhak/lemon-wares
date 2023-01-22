// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const list = document.querySelectorAll('.tabs__navigation button')
list.forEach(item =>{ 
    item.addEventListener('click', (e) =>{
    list.forEach(el=>{ el.classList.remove('_subscr-tab--active'); });
    item.classList.add('_subscr-tab--active')
})
})
