import './article.css'
import Product from './product/product-class.jsx'


export function Article()
{
    return<>
    <div className="screen">
        <div className='title'>
            <h1 className='title'>BURGUERS</h1>
        </div>

    <Product />
    <Product />
    <Product />
    <Product />

    </div>
    </>
}