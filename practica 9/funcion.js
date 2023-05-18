const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

const datos = [
    {
        "link":"../Patica 1/index.html",
        "nombre":"Practica 1"
    },
    {
        "link":"../TAREA 2/index.html",
        "nombre":"Practica 2"
    },
    {
        "link":"../Menu/index.html",
        "nombre":"Practica 3"
    },
    {
        "link":"../Cedula/index.html",
        "nombre":"Practica 4"
    },
    {
        "link":"../Menu con js/index.html",
        "nombre":"Practica 5"
    },
    {
        "link":"../Formulario Medico/Registro.html",
        "nombre":"Practica 6"
    },
    {
        "link":"../Formulario de contacto/formulario.html",
        "nombre":"Practica 7"
    },
    {
        "link":"../formulariio con grafico/index.html",
        "nombre":"Practica 8"
    }
]


    for (const i of datos) {
          crearOpcion(i.link,i.nombre)
          console.log(i)
    }

function crearOpcion(link="#",name="Practica") {
    const padre = document.getElementById("nav")
    const a = document.createElement("a")
    a.setAttribute("href",link)
    a.innerText = name
    const li = crearli()
    li.appendChild(a)
    padre.append(li)
}

function crearli(){
    const li = document.createElement("li")
    li.setAttribute("class","nav-item")

    return li
}


   

