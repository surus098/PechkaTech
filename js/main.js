/* АВТОПЛЭЙ ВИДЕО В FSLightbox*/
document.addEventListener('DOMContentLoaded', function () {
    // Настраиваем FSLightbox
    const lightbox = fsLightboxInstances['video'];
    if (lightbox) {
        lightbox.props.onOpen = () => {
            const video = document.querySelector('.fslightbox-container video');
            if (video) {
                video.muted = true; // Отключаем звук для автопроигрывания
                video.play(); // Запускаем видео
                video.loop = true; // Зацикливаем (опционально)
            }
        };
    }
});

/* BURGER */
document.addEventListener('click', burgerInet)

function burgerInet(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return

    if (!document.body.classList.contains('body--opened-menu')) {
        document.body.classList.add('body--opened-menu')
    } else {
        document.body.classList.remove('body--opened-menu')
    }
}
/* BURGER END */

/* АККОРДИОН */
const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {
    el.addEventListener('click', (e) => {
        const accordionList = e.currentTarget;
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return;
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        // Закрываем ранее открытый элемент, если он есть и это не текущий ЧАСТОИСПОЛЬЗОВАТЬ
        if (accordionOpenedItem && accordionItem !== accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened');
            const accordionOpenedContent = accordionOpenedItem.querySelector('.accordion-list__content');
            if (accordionOpenedContent) {
                accordionOpenedContent.style.maxHeight = null;
            }
        }
        //

        accordionItem.classList.toggle('accordion-list__item--opened');
        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }
    });
});
/* АККОРДИОН END*/

/* СЛАЙДЕР-ГАЛЛЕРЕЯ  ТРЕНИНГ*/

new Swiper('.training__slider', {

    spaceBetween: 60,
    slidesPerView: 3,
    centeredSlides: true,

    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },

    scrollbar: {
        el: '.training__scrollbar',
        draggable: true,
    },

    breakpoints: {
        293: {
            spaceBetween: 30,
            slidesPerView: 1.3,
        },
        301: {
            spaceBetween: 15,
            slidesPerView: 1.3,
        },
        351: {
            spaceBetween: 15,
            slidesPerView: 1.5,
        },
        421: {
            spaceBetween: 15,
            slidesPerView: 1.7,
        },
        451: {
            spaceBetween: 10,
            slidesPerView: 2,
        },
        601: {
            spaceBetween: 15,
            slidesPerView: 2.5,
        },
        801: {
            spaceBetween: 30,
            slidesPerView: 3,
        },

        1101: {
            spaceBetween: 30,
            slidesPerView: 3,
        }
    }

});


/* ========Кнопка еще в карточке новостей=========== */

document.addEventListener('DOMContentLoaded', function () {
    // Находим все контейнеры новостей
    const newsContainers = document.querySelectorAll('.news__news-information-t');

    newsContainers.forEach(container => {
        // Для каждого контейнера находим текст и кнопку
        const text = container.querySelector('.news__news-information-text');
        const btn = container.querySelector('.toggleBtn');

        if (text && btn) {
            btn.addEventListener('click', () => {
                text.classList.toggle('webkit-box');
                btn.textContent = text.classList.contains('webkit-box') ? 'Ещё' : 'Скрыть';
            });
        } else {
            console.error('Элементы не найдены для контейнера:', container);
        }
    });
});
/* ================================================= */


/* ========Кнопка еще в карточке "Проекты клиентов"===== */

document.addEventListener('DOMContentLoaded', function () {
    // Находим все контейнеры новостей
    const newsContainers = document.querySelectorAll('.projects__news-information-t');

    newsContainers.forEach(container => {
        // Для каждого контейнера находим текст и кнопку
        const text = container.querySelector('.projects__news-information-text');
        const btn = container.querySelector('.toggleBtn');

        if (text && btn) {
            btn.addEventListener('click', () => {
                text.classList.toggle('webkit-box');
                btn.textContent = text.classList.contains('webkit-box') ? 'Ещё' : 'Скрыть';
            });
        } else {
            console.error('Элементы не найдены для контейнера:', container);
        }
    });
});
/* ================================================= */


/* запуск видео при наведении на карточку товара */
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.production__cards-product');

    cards.forEach((card) => {
        const video = card.querySelector('video');

        if (video) {
            // Убедитесь, что видео на паузе при загрузке страницы
            video.pause();
            video.currentTime = 0;

            card.addEventListener('mouseenter', function () {
                video.play().catch(e => console.error("Ошибка воспроизведения видео:", e));
            });

            card.addEventListener('mouseleave', function () {
                video.pause();
                video.currentTime = 0; // Возвращаем видео в начало
            });
        } else {
            console.error('Видео не найдено для карточки:', card);
        }
    });
});
/* ================================================ */