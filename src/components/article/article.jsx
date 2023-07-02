import { useEffect, useState } from 'react'
import './article.css'
import { Product } from './product/product-class.jsx'
import axios from 'axios'

export function Article()

{
    const [data, setdata] = useState([])

    useEffect( () => {

        async function req() {

            try {
                const res =  await axios.get('https://rickandmortyapi.com/api/character').then(e=>e.data)

                setdata([res.results[0], res.results[1], res.results[2]]) 



                const name = res.results[0].name

                console.log(name)

            } catch (err) {
                console.log(err)
            }
        }
        
        req()
    },

        []
    )

    return<>
    <div className="screen">
        <div className='title'>
            <h1 className='title'>BURGUERS</h1>
        </div>

    {data.map(e=> (<Product key={e.id} name={e.name} imageUrl={e.image} desc={e.gender} />)
    )}

    {/* <Product name={data[0].name} imageUrl={data[0].image} desc={data[0].gender} />

    <Product name={data[1].name} imageUrl={data[1].image} desc={data[1].gender} /> */}


    </div>
    </>
}