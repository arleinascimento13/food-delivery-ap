import { CgMenu, CgShoppingCart } from 'react-icons/cg'
import './nav-bar.css'

export function NavBar() {
    
    return <>


        <div className='nav-bar-itens'>
            <div className="div-icon-b"><CgMenu size="2.5rem" color='white'/></div>
            <img className='logo-bbq' src="public/assets/logo-bbq.png"/>
            <div className="div-icon-b"><CgShoppingCart size="2.5rem" color='white'/></div>
            
        </div>
    </>
}