const result = document.getElementById('resultado')
const listItems = []

async function Datos() {
  
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/`)
    const { results } = await res.json()
     result.innerHTML = ''
  
    results.forEach(user => {
      const li = document.createElement('li')
      
      listItems.push(li)
  
      li.innerHTML = `
          <div class="user-info">
            <h4>${user.name} ${user.username}</h4>
            <p>${user.email}</p>
            <p>${user.phone}</p>
          </div>
        `
        result.appendChild(li)
    })
  }
  Datos()