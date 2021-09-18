import DataDragons from './data.js';



/*

  Arrays a utilizar

  const nombres = ["Paola", "Karina", "Jose", "Daniel", "Luis"]

  const usuarios = [
    {
      id: 1,
      nombre: "Juan",
      apellido: "Diaz",
      activo: true
    },
    {
      id: 2,
      nombre: "Diana",
      apellido: "Perez",
      activo: false
    },
    {
      id: 3,
      nombre: "Paola",
      apellido: "Acosta",
      activo: true
    },
    {
      id: 4,
      nombre: "Carlos",
      apellido: "Forero",
      activo: true
    },
    {
      id: 5,
      nombre: "Oscar",
      apellido: "Padilla",
      activo: false
    },
  ]

  1. Explicar ciclo for normal
  2. Explicar foreach
  3. Explicar map
  4. Explicar finder
  5. Explicar find
  6. Explicar como crear html con create element

  const renderizar = () => {
    const root = document.getElementById("root")
    const h1 = document.createElement("h1")
    h1.innerHTML="Soy un título"
    root.appendChild(h1)
    console.log(h1);
    // root.innerHTML = card()
    // console.log(root);
  }
*/






const filter = ()=>{
  return `
    <div class="containter-input">
      <input id="filter" type="text" placeholder="Filtra por nombre"/>
    </div>
  `
}

const card = (drake) => {
  return `
    <div class="card">
      <h2 class="name">${drake.Nombre}</h2>
      <img class="pic" src="./dragon.svg"/>
      <div class="info">
        <p class="type w-100"><span>Tipo:</span> ${drake.Tipo}</p>
        <p class="w-100"><span>Description:</span> ${drake.Descripcion}</p>
        <div class="container-attacks">
          <h4 class="w-100">Ataques</h4>
          ${
            drake.Ataque.map((ataque)=>{
              return `<p class="type w-49"><span>${ataque.Nombre}:</span> ${ataque.Daño}</p>`
            }).join("")
          }
        </div>
        <p class="type w-49"><span>Defensa:</span> ${drake.Defensa}</p>
        <p class="type w-49"><span>Vida:</span> ${drake.Vida}</p>
      </div>

    </div>
  `
}

const body = () => {
  return `
    ${filter()}
    <div class="container" id="container">
    </div>
  `
}
const cards = (data) => {
  return data.map((drake)=>{
        return card(drake)
      }).join("")
}

const renderCards = (data) => {
  const container = document.getElementById("container")
  container.innerHTML = cards(data)
}

const getFilter = () => {
  const inputFilter = document.getElementById("filter")
  let search = null;
  inputFilter.addEventListener("keyup", (e)=>{
    let valueInput = e.target.value
     search = DataDragons.filter((drake)=>{
      return (!valueInput ? drake : (drake.Nombre).toLowerCase().includes(valueInput.toLowerCase()))
    })
    renderCards(search)
  })
}



const render = () => {
  const root = document.getElementById("root")
  root.innerHTML = body()
  getFilter()
  renderCards(DataDragons)
}


render()
