const products= [ 
    {
        id:"Df2121",
        name: "Vestido Rojo",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, cupiditate? Repudiandae eveniet necessitatibus quisquam accusamus dolorem esse ullam, iste molestias recusandae illo hic eaque non architecto aspernatur rerum saepe consequuntur!",
        stock: 10,
        price: 2000,
        image: "/img/vestidoRojo.jpg",
        category: "vestidos"
    },
    {
        id:"Hj2654",
        name: "Vestido Azul",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, cupiditate? Repudiandae eveniet necessitatibus quisquam accusamus dolorem esse ullam, iste molestias recusandae illo hic eaque non architecto aspernatur rerum saepe consequuntur!",
        stock: 5,
        price: 150,
        image: "/img/vestidoAzul.webp",
        category: "vestidos"
    },
    {
        id:"Gt2233",
        name: "Zapatos Verdes",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, cupiditate? Repudiandae eveniet necessitatibus quisquam accusamus dolorem esse ullam, iste molestias recusandae illo hic eaque non architecto aspernatur rerum saepe consequuntur!",
        stock: 2,
        price: 2000,
        image: "/img/zapatosVerdes.jpg",
        category: "zapatos"
    },
    {
        id:"Gt2245",
        name: "Zapatos Negros",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, cupiditate? Repudiandae eveniet necessitatibus quisquam accusamus dolorem esse ullam, iste molestias recusandae illo hic eaque non architecto aspernatur rerum saepe consequuntur!",
        stock: 2,
        price: 2000,
        image: "/img/zapatosNegros.webp",
        category: "zapatos"
    },
    {
        id:"Mn22121",
        name: "Jean Azul",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, cupiditate? Repudiandae eveniet necessitatibus quisquam accusamus dolorem esse ullam, iste molestias recusandae illo hic eaque non architecto aspernatur rerum saepe consequuntur!",
        stock: 5,
        price: 5000,
        image: "/img/jeanAzul.webp",
        category: "pantalones"
    },
    {
        id:"Mn22125",
        name: "Jean Negro",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, cupiditate? Repudiandae eveniet necessitatibus quisquam accusamus dolorem esse ullam, iste molestias recusandae illo hic eaque non architecto aspernatur rerum saepe consequuntur!",
        stock: 5,
        price: 5000,
        image: "/img/jeanNegro.webp",
        category: "pantalones"
    }
]

/*    
    const condicion = true
    const promesa = new Promise( (resolve, reject)=> {
        if (condicion){
            resolve("Se resolvio")
        } 
        else {
            reject ("se rechazo la promesa")
        }
    })
*/

const getProducts = ()=>{
    return new Promise ((resolve, reject ) => {
        //Simulamos un retraso de red
        setTimeout ( ()=> {
            resolve(products)
        }, 2000)
    })
}

export { getProducts }