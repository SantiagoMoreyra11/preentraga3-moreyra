// 2. **Instrucciones**:

//    a. Abre un archivo HTML y crea un contenedor con el id "productos-container" donde se mostrarán las tarjetas de productos.

//    b. En un archivo JavaScript, crea un array de objetos con 10 productos.

//    c. Escribe una función llamada `generarTarjetas` que reciba el array de productos como argumento.
//    Dentro de esta función, utiliza un reduce para crear elementos HTML para cada producto,
//    estilízalos mínimamente y agrega un botón "Agregar al Carrito" que al hacer clic lo agregue al almacenamiento local.

const producto = [
  {
    id: 1,
    producto: "Creatina 300 grs de XXL Pro Nutrition",
    categoria: "Suplemento",
    precio: 49.99,
    marca: "XXL",
    imagen: "img/creatina1.jpg",
    descripcion:
      "Ideal para prevenir fatiga muscular, aumento muscular y mejorar el rendimiento.",
  },
  {
    id: 2,
    producto: "Protein Star Nutrition",
    categoria: "Suplemento",
    precio: 49.99,
    marca: "Star Nutrition",
    imagen: "img/creatina2.jpg",
    descripcion:
      "Envase de 300 gramos. Ideal para cualquier tipo de deportes. Masa muscular. Recuperación. Grandes beneficios. Sin sabor..",
  },
  {
    id: 3,
    producto: "TrueMade Whey Protein",
    categoria: "Suplemento",
    precio: 29.99,
    marca: "Ena",
    imagen: "img/creatina3.jpg",
    descripcion:
      "Whey Protein Isolate (WPI) es la forma más pura de proteína de suero que existe actualmente.",
  },
  {
    id: 4,
    producto: "Bcaa 6000 de Nutrex 255 gramos",
    categoria: "Suplemento",
    precio: 9.99,
    marca: "Ena",
    imagen: "img/creatina4.jpg",
    descripcion:
      "Aminos BCAA de Nutrex. Importados. Masa muscular. Rendimiento. Previene fatiga.",
  },
  {
    id: 5,
    producto: "Vaso Shakers",
    categoria: "Accesorio",
    precio: 25.99,
    marca: " Shark Design",
    imagen: "img/creatina6.jpg",
    descripcion:
      "Vaso mezclador de Game of Thrones. Semi transparente. Con tapa a rosca y pico a presión.",
  },
  {
    id: 6,
    producto: "Hydro BCAA 300 grs de Xtrenght Nutrition",
    categoria: "Suplemento",
    precio: 32.5,
    marca: "Xtrenght Nutrition",
    imagen: "img/creatina5.jpg",
    descripcion:
      "Aminoácido en polvo de rápida asimilación Con Beta Alanina, previene la fatiga muscular..",
  },
  {
    id: 7,
    producto: "Quemador de grasa Super Cuts 3 de Universal Nutrition",
    categoria: "Suplemento",
    precio: 10.2,
    marca: "Universal Nutrition",
    imagen: "img/creatina7.jpg",
    descripcion: "Quemador de grasas importado de USA  Aprobado en Argentina",
  },
  {
    id: 8,
    producto: "Carbo Energy 550 grs de Ena Sport",
    categoria: "Suplemento",
    precio: 49.99,
    marca: "Ena",
    imagen: "img/creatina8.jpg",
    descripcion:
      "Carbohidratos. Ideal para recuperación. Rendimiento. Aumento de energía. Sin Tacc.",
  },
  {
    id: 9,
    producto: "Ganador de peso XXL 2 kg Proteína",
    categoria: "Suplemento",
    precio: 29.99,
    marca: "XXL",
    imagen: "img/creatina9.jpg",
    descripcion:
      "Uno de los mejores ganadores de peso que existe en el mercado.",
  },
  {
    id: 10,
    producto: "Ganador de peso NitroGain 5 kg Big Size",
    categoria: "Suplemento",
    precio: 259.99,
    marca: "Xtrenght Nutrition ",
    imagen: "img/creatina10.jpg",
    descripcion:
      "Activa el anabolismo real para los músculos más grandes, más fuertes.",
  },
];

console.log(producto);

const productoContainer = document.querySelector(".productos-container");
console.log(productoContainer);

const generarTarjetas = (productos) => {
  const contenedor = document.getElementById("productos-container");

  const tarjetasHTML = productos.reduce((acumulador, producto) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-producto");

    const nombre = document.createElement("h2");
    nombre.textContent = producto.producto;

    const precio = document.createElement("p");
    precio.textContent = `Precio: $${producto.precio}`;

    const descripcion = document.createElement("p");
    descripcion.textContent =
      producto.descripcion || "Descripción no disponible";

    const imagen = document.createElement("img");
    if (producto.imagen) {
      imagen.src = producto.imagen;
      imagen.alt = producto.producto;
    } else {
      imagen.src = "imagen_por_defecto.jpg";
      imagen.alt = "Imagen no disponible";
    }

    const botonAgregar = document.createElement("button");
    botonAgregar.textContent = "Agregar al Carrito";

    botonAgregar.addEventListener("click", () => {
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      alert("Producto agregado al carrito.");
    });

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(botonAgregar);

    acumulador.appendChild(tarjeta);
    return acumulador;
  }, document.createElement("div"));

  contenedor.innerHTML = "";
  contenedor.appendChild(tarjetasHTML);
};

generarTarjetas(producto);
