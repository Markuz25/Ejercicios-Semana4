const URL_API = `https://jsonplaceholder.typicode.com/users/`;
const result = document.getElementById('resultado');
const listItems = [];

async function Datos() {

  try{
    const results = await (await fetch(URL_API)).json();
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
  }catch(error){
    console.error("Error: " + error);
  }
  
}
Datos();
