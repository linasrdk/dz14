document.cookie = "name=Liza";
document.cookie = "age=14"
const cookies = document.cookie.split("; ");
let name, age;
for (let i = 0; i < cookies.length; i++) {
  const [cookieName, cookieValue] = cookies[i].split("=");
  if (cookieName === "name") {
    name = cookieValue;
  } else if (cookieName === "age") {
    age = cookieValue;
  }
}
document.write(`Name: ${name}<br>`);
document.write(`Age: ${age}<br>`);



