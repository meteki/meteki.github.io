let tg = window.Telegtam.WebApp;

tg.expand(); //расширение экрана в мобильном окне телеграма

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
