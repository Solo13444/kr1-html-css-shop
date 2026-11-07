# SocialMarket — учебный интернет-магазин

Учебный многостраничный сайт по дисциплине «Фронтенд и бэкенд разработка». Тема проекта — каталог аккаунтов социальных сетей Instagram, TikTok, Telegram, Snapchat и WhatsApp.

Информация о товарах, количестве подписчиков и ценах приведена для примера. Настоящие аккаунты не продаются, сервер и платёжная система не подключены.

## Страницы

- `index.html` — главная страница с преимуществами и популярными карточками.
- `catalog.html` — каталог аккаунтов и статический блок категорий.
- `product.html` — карточка товара с описанием и таблицей характеристик.
- `order.html` — форма оформления заявки.
- `contacts.html` — контактная информация и ссылка на форму.

## Файлы проекта

```text
kr1-html-css-shop/
├── index.html
├── catalog.html
├── product.html
├── order.html
├── contacts.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── instagram.svg
│   ├── tiktok.svg
│   ├── telegram.svg
│   ├── snapchat.svg
│   └── whatsapp.svg
├── README.md
└── .gitignore
```

## Технологии

- HTML5: семантические теги, ссылки, карточки, таблица и форма.
- CSS3: внешний файл стилей, переменные `:root`, `var()`, состояния `:hover`, `:focus-visible`, `:disabled`, Flexbox и CSS Grid.
- JavaScript: открытие и закрытие модального окна, базовая проверка формы и вывод сообщения.

## Как открыть сайт

1. Распаковать архив.
2. Открыть папку `kr1-html-css-shop` в Visual Studio Code.
3. Открыть файл `index.html` в браузере.

Форма работает в демонстрационном режиме. После заполнения выводится сообщение, но данные никуда не отправляются. Фильтр каталога является статическим блоком с переходами к карточкам.

## Публикация через GitHub Pages

Создайте репозиторий `kr1-html-css-shop`, загрузите файлы в ветку `main` и включите GitHub Pages в настройках репозитория: **Settings → Pages → Deploy from a branch → main → / (root)**.

После публикации ссылка обычно имеет вид:

`https://ВАШ-ЛОГИН.github.io/kr1-html-css-shop/`

Вставьте фактическую ссылку сюда после публикации: **[ссылка на GitHub Pages]**.

## Выполненные практические занятия

- №1 — подготовлена структура проекта, README и `.gitignore`.
- №2 — создан HTML-каркас и добавлены базовые CSS-стили.
- №3 — добавлена форма заявки, модальное окно и базовая валидация.
- №4 — добавлены CSS-переменные и состояния элементов.
- №5 — созданы дополнительные страницы, общая навигация, хлебные крошки и якорные ссылки.
- №6 — меню оформлено через Flexbox, карточки и страница каталога используют CSS Grid.

## Git-команды

```bash
git init -b main
git add .
git commit -m "Add SocialMarket project"
git remote add origin https://github.com/ВАШ-ЛОГИН/kr1-html-css-shop.git
git push -u origin main
```

Для практических работ методички предусматривают отдельные ветки и Pull Request. Например, для практической №6:

```bash
git switch -c feature/flex-grid-navigation
git add .
git commit -m "Add flex navigation and grid catalog layout"
git push -u origin feature/flex-grid-navigation
```

Затем создайте Pull Request `feature/flex-grid-navigation → main` на GitHub и выполните Merge.

## Данные студента

- ФИО: Облов Арнольд Александрович
- Группа: ЭФБО-14-25
qweryt