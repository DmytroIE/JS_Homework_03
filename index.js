function addLogin(logins, login) {
  if (!checkLoginValidity(login)) {
    alert("Ошибка! Логин должен быть от 4 до 16 символов");
    return false;
  }

  if (checkIfLoginExists(logins, login)) {
    alert("Такой логин уже используется!");
    return false;
  }

  logins.push(login);
  alert("Логин успешно добавлен!");
  return true;
}

function checkLoginValidity(login) {
  return login.length >= 4 && login.length <= 16;
}

function checkIfLoginExists(logins, login) {
  let check = false;
  const loginUppercased = login.toUpperCase();
  for (let i = 0; i < logins.length; i++) {
    if (logins[i].toUpperCase() === loginUppercased) check = true;
  }
  return check;
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = "";

do {
  login = prompt("Введите логин");
} while (login !== null && !addLogin(logins, login));

console.log(logins);
