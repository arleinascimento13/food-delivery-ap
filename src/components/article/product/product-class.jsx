import './product-class.css'
import NewOrder from '../../../functions/new-order/new-order'


export function Product( {name, desc, imageUrl} )
{
    return<>
    <div className='product-bg'>
        <img src={imageUrl} className='product-cover'/>
        <div className="text-area">

            <h1 className="product-name"> {name} </h1>

            <p className="product-description"> {desc} </p>
        </div>
        <div className="add-cart-btn" onClick={NewOrder}>
            <p className='vaitomanocu'>+</p>
        </div>

    </div>
    </>
}