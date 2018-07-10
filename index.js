function addLogin(logins, login) {
  if (checkLoginValidity(login)) {
    if (!checkIfLoginExists(logins, login)) {
      logins.push(login);
      alert("Логин успешно добавлен!");
      return true;
    } else {
      alert("Такой логин уже используется!");
    }
  } else {
    alert("Ошибка! Логин должен быть от 4 до 16 символов");
  }
  return false;
}

function checkLoginValidity(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
}

function checkIfLoginExists(logins, login) {
  let check=false;
  const loginUppercased=login.toUpperCase();
  for(let i=0; i< logins.length; i++){
    if (logins[i].toUpperCase()===loginUppercased)
    check=true;
  }
  return check;
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = "";

do {
  login = prompt("Вевдите логин");
} while (login !== null && !addLogin(logins, login));

console.log(logins);
