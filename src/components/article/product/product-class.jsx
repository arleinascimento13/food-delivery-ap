import './product-class.css'
import NewOrder from '../../../functions/new-order/new-order'


export default function Product()
{
    return<>
    <div className='product-bg'>
        <img src='assets/hamburguer-1.png' className='product-cover'/>
        <div className="text-area">

            <h1 className="product-name"> Lorem Ipsumn </h1>

            <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus vel.
            </p>
        </div>
        <div className="add-cart-btn" onClick={NewOrder}>
            <p className='vaitomanocu'>+</p>
        </div>

    </div>
    </>
}