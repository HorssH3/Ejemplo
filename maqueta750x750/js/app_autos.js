const items         = document.getElementById('items')
const templateCard  = document.getElementById('template-card').content
const fragmento     = document.createDocumentFragment()

document.addEventListener('DOMContentLoadedLoaded', () => {
    fetchData()

})

const fetchData = async () =>{
    try{
        const rest = await fetch('js/api_autos.json')
        const data = await res.json()
        console.log(data)
        mostrarProductos(data)
    }catch(error) {
        console.log.error
    }
}

//----------------------------------- mostrar productos
const mostrarProductos = data =>{
data.forEach(producto => {
    templateCard.querySelector()
}
    )


}