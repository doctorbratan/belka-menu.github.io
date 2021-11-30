let selected_language = "ru";
const candidate = localStorage.getItem('language');

const swipe = document.getElementById('swipe');
var scrollBollean = false
swipe.style.display =  "none"

window.addEventListener('scroll', function() {
    
    if (window.scrollY >= 120) {
        scrollBollean = true
        swipe.style.display =  "none"
    }

})

window.onload = function() {
    setTimeout(() => {
        if (!scrollBollean) {
            swipe.style.display =  "block"
        }
    }, 10000);
}

function ScrollToMenu() {
    let language = document.getElementById("language-section");
    language.scrollIntoView();
}

if (candidate) {
    selected_language = candidate
} 

const component = new Vue({
    el: '#section',
    data: {
        menu: menu,
        language: selected_language
    }
})


function loading (data) {
    localStorage.setItem('language', data)
    selected_language = data
    component.language = selected_language
    if (data == "ru") {
        menu.cost = "ЛЕЙ"
    }
    if (data == "en") {
        menu.cost = "LEI"
    }
}

loading(selected_language);
