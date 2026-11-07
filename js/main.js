/* JavaScript для модального окна, формы и страницы товара. */

const dialog = document.getElementById("order-dialog");
const openButtons = document.querySelectorAll("[data-open-dialog]");
const closeButtons = document.querySelectorAll("[data-close-dialog]");

/* Открытие модального окна */
if (dialog) {
  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedProduct = dialog.querySelector("[data-selected-product]");
      if (selectedProduct) {
        selectedProduct.value = button.dataset.product || "";
      }
      dialog.showModal();
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      dialog.close();
    });
  });
}

/* Проверка и демонстрационная отправка форм */
const forms = document.querySelectorAll("[data-request-form]");

forms.forEach((form) => {
  form.addEventListener("invalid", (event) => {
    event.target.setAttribute("aria-invalid", "true");
  }, true);

  form.querySelectorAll("input, select, textarea").forEach((field) => {
    field.addEventListener("input", () => {
      field.removeAttribute("aria-invalid");
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const message = form.querySelector("[data-form-message]");
    if (message) {
      message.textContent = "Заявка заполнена. Это демонстрация, данные не отправляются на сервер.";
      message.classList.add("is-visible");
    }

    form.reset();
  });
});

/* Данные для одной страницы товара */
const products = {
  "instagram-creator": {
    title: "Instagram · Creator Start",
    platform: "Instagram",
    audience: "12,4 тыс.",
    description: "Демонстрационный профиль для визуального контента и публикаций.",
    content: "Визуальный контент",
    price: "2 900 ₽",
    image: "images/instagram.svg"
  },
  "tiktok-creator": {
    title: "TikTok · Video Start",
    platform: "TikTok",
    audience: "8,2 тыс.",
    description: "Демонстрационный профиль для коротких видео и публикаций.",
    content: "Короткие видео",
    price: "1 800 ₽",
    image: "images/tiktok.svg"
  },
  "telegram-channel": {
    title: "Telegram · Channel Start",
    platform: "Telegram",
    audience: "4,6 тыс.",
    description: "Демонстрационный канал для тематических публикаций.",
    content: "Посты и обновления",
    price: "2 400 ₽",
    image: "images/telegram.svg"
  },
  "snapchat-profile": {
    title: "Snapchat · Profile Start",
    platform: "Snapchat",
    audience: "3,1 тыс.",
    description: "Демонстрационный профиль для визуальных историй.",
    content: "Истории и фото",
    price: "1 200 ₽",
    image: "images/snapchat.svg"
  },
  "whatsapp-business": {
    title: "WhatsApp · Business Profile",
    platform: "WhatsApp",
    audience: "—",
    description: "Демонстрационный профиль для общения.",
    content: "Переписка",
    price: "900 ₽",
    image: "images/whatsapp.svg"
  },
  "instagram-visual": {
    title: "Instagram · Visual Brand",
    platform: "Instagram",
    audience: "6,8 тыс.",
    description: "Демонстрационный профиль для портфолио и творческого проекта.",
    content: "Визуальный контент",
    price: "2 100 ₽",
    image: "images/instagram.svg"
  }
};

const productPage = document.querySelector("[data-product-id]");

if (productPage) {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("item") || productPage.dataset.productId;
  const product = products[productId] || products["instagram-creator"];

  document.querySelector("[data-product-title]").textContent = product.title;
  document.querySelector("[data-product-platform]").textContent = product.platform;
  document.querySelector("[data-product-platform-short]").textContent = product.platform;
  document.querySelector("[data-product-description]").textContent = product.description;
  document.querySelector("[data-product-price]").textContent = product.price;
  document.querySelector("[data-detail-platform]").textContent = product.platform;
  document.querySelector("[data-detail-audience]").textContent = product.audience;
  document.querySelector('[data-detail-row="platform"]').textContent = product.platform;
  document.querySelector('[data-detail-row="audience"]').textContent = product.audience;
  document.querySelector('[data-detail-row="content"]').textContent = product.content;
  document.querySelector('[data-detail-row="price"]').textContent = product.price;

  const image = document.querySelector("[data-product-image]");
  image.src = product.image;
  image.alt = "Иконка " + product.platform;

  const orderButton = productPage.querySelector("[data-open-dialog]");
  orderButton.dataset.product = product.title;
}
