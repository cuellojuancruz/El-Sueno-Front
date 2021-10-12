
import { useState } from "react"
import { connect, useDispatch } from "react-redux"
import { createProduct } from "../../redux/home/actions"


function Home(props){
  
    console.log(props, "las propss")

    const dispatch = useDispatch()

    const initialState = {name: "", description: "", expirationdate: undefined}


    const [product, setProduct] = useState(initialState)

    const {name, description, expirationdate} = product


    function handleName(e){
        setProduct({
            ...product,
            name: e.target.value
        })
    }


    function handleDescription(e){
        setProduct({
            ...product,
            description: e.target.value
        })
    }

    function handleExpirationdate(e){
        setProduct({
            ...product,
            expirationdate: e.target.value
        })
    }

    function handleCreate (e){
        e.preventDefault()
        console.log("entro al create")
        dispatch(createProduct(product))
    }

    return(
     

        <div>

                    
            <form onSubmit={(e) => handleCreate(e)}>
                <label>Producto</label>
                <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={name}
                onChange={(e) => handleName(e)}
                />

                <label>descripcion</label>
                <input
                type="text"
                name="description"
                placeholder="Descripción"
                value={description}
                onChange={(e) => handleDescription(e)}
                />

                <label>fecha de expiracion</label>
                <input
                type="date"
                name="description"
                placeholder="descripción"
                value={expirationdate}
                onChange={(e) => handleExpirationdate(e)}
                />

                <button type="submit">Crear producto</button>
            </form>



        </div>
        
        )
    

}

function mapStateToProps(state) {
    return {
        product: state.createProduct.products
    }
}


function mapDispatchToProps(dispatch) {
    return {
        createProduct: (product) => dispatch(createProduct(product)),
    }
}




export default connect(mapStateToProps, mapDispatchToProps) (Home)