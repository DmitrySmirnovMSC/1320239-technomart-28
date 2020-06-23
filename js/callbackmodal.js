let callbackModal = document.querySelector("div.callback-container");
let callbackForm = callbackModal.querySelector("form");
let callbackName = callbackModal.querySelector('input[type="text"]');
let callbackEmail = callbackModal.querySelector('input[type="email"]');
let callbackText = callbackModal.querySelector("textarea");

let isStorageSupport = true;
let storageName = "";
let = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}


function callbackModalOpen(e) {
  e.preventDefault();
  callbackModal.classList.add("callback-container-open");

  if (storageName && storageEmail) {
    callbackName.value = storageName;
    callbackEmail.value = storageEmail;
    callbackText.focus();
  } else if (storageName == false && storageEmail) {
    callbackEmail.value = storageEmail;
    callbackName.focus();
  } else if (storageName && storageEmail == false) {
    callbackName.value = storageName;
    callbackEmail.focus();
  } else {
    callbackName.focus();
  }
}

function callbackModalClose(e) {
  e.preventDefault();
  callbackModal.classList.remove("callback-container-open");
  callbackModal.classList.remove("callback-container-error");
}

callbackForm.addEventListener("submit", function(evt) {
  if (!callbackName.value || !callbackEmail.value || !callbackText.value) {
    evt.preventDefault();
    callbackModal.classList.remove("callback-container-error");
    callbackModal.offsetWidth = callbackModal.offsetWidth;
    callbackModal.classList.add("callback-container-error");
    console.log(callbackModal);
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", callbackName.value);
      localStorage.setItem("email", callbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (callbackModal.classList.contains("callback-container-open")) {
      evt.preventDefault();
      callbackModal.classList.remove("callback-container-open");
      callbackModal.classList.remove("callback-container-error");
    }
  }
});