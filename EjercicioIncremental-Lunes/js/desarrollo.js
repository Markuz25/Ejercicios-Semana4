const URL_API = `https://jsonplaceholder.typicode.com/users/`;
const result = document.getElementById('resultado');
const listItems = [];

async function Datos() {

  const res = await fetch(URL_API);
  const results = await res.json();
  result.innerHTML = '';

  results.forEach(user => {
    const li = document.createElement('li');

    li.innerHTML = `
          <div class="user-info">
            <h4>${user.name} ${user.username}</h4>
            <p>${user.email}</p>
            <p>${user.phone}</p>
          </div>
        `
    listItems.push(li);
    result.appendChild(li);
  })
}
Datos();
