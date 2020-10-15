var productos = [
	{
	  id:1,
	  nombre: "Bicicleta",
	  img: "https://images.pexels.com/photos/212185/pexels-photo-212185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	  descripcion: "Actívate y sal a ejercitarte! , especial para ti que te encanta estar en contacto con la naturaleza ¡ve de paseo al parque, a la montaña o simplemente toma el carril para bicis en tu ciudad! Ve siempre con precaución.",
	  precio: 2464,
	  fecha_publicacion: "26/9/2020 20:40:2",
	  stock: 15,
	  categoria: "Deporte"
	},
	{
	  id:2,
	  nombre: "LABIALES INDELEBLES",
	  img: "https://images.pexels.com/photos/3373725/pexels-photo-3373725.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	  descripcion: "En el momento que estás por escoger un labial indeleble más allá de tener en cuenta todos sus beneficios, la fórmula, la duración, etc. siempre cuenta tu estado de ánimo, ¡no existe mal día cuando llevas un labial del que estás mega in love! ¡Y más si lo vas a usar todos los días! Con los labios vibrantes",
	  precio: 155,
	  fecha_publicacion: "26/9/2020 20:40:2",
	  stock: 5,
	  categoria: "Cosméticos"
	},
	{
	  id:3,
	  nombre: "Flores",
	  img: "https://images.pexels.com/photos/4618517/pexels-photo-4618517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	  descripcion: "Regala este florero, demuestra tu amor con un tierno detalle que jamás olvidará, no hay mejor manera para sorprender a tu amada que con este hermoso florero. ¡Es perfecto para celebrar cualquier tipo de ocasión! ",
	  precio: 399,
	  fecha_publicacion: "26/9/2020 20:40:2",
	  stock: 20,
	  categoria: "Bolsas"
	},
	{
	  id:4,
	  nombre: "Ropa",
	  img: "https://images.pexels.com/photos/4458521/pexels-photo-4458521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	  descripcion: "Composición: Algodón 79% Poliamida 21%. Instrucciones de lavado:Lavar a máquina, máx. 30ºC, No usar cloro, Planchar máx. 110ºC, No usar secadora.",
	  precio: 1060,
	  fecha_publicacion: "26/9/2020 20:40:2",
	  stock: 20,
	  categoria: "Ropa"
	},
  
	{
	  id:5,
	  nombre: "Sueter",
	  img: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	  descripcion: "Suéter liso. Composición: Algodón 79% Poliamida 21%. Instrucciones de lavado:Lavar a máquina, máx. 30ºC, No usar cloro, Planchar máx. 110ºC, No usar secadora.",
	  precio: 560,
	  fecha_publicacion: "26/9/2020 20:40:2",
	  stock: 20,
	  categoria: "Ropa"
	},
  ]
  
var time = new Date();
const index = (req, res, next) => {
	res.render('index', {
		productos
	});
};

const getProductos = (req, res, next) => {
	res.render('products', {
		productos
	});
};
const getCarrito = (req, res, next) => {
	res.render('products', {
		title: 'List of Products',
		productos
	});
};
// new products
const getAddProductos = (req, res) => {
	
	res.render('productsNew');
};
const addProduct = (req, res) => {

	var newItem = req.body;
	console.log(newItem);
	productos.push({
		id:productos.length+1,
		nombre: newItem.nombre1,
		img: newItem.img1,
		descripcion: newItem.descripcion1,
		precio: newItem.precio1,
		fecha_publicacion: time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds(),
		stock: newItem.stock1,
		categoria: newItem.categoria1,
	});
	console.log('-------'+JSON.stringify(productos));
	

	res.redirect('/nuevo-producto');
};

module.exports = {
  index,
  getCarrito,
  getProductos,
  getAddProductos,
  addProduct
};
