import React, { useContext } from 'react'
import { samplecontext } from './App'
import { Button, Card } from 'react-bootstrap'
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";


const Productcards = () => {
    const sample= useContext(samplecontext)
    const {products, setproducts, cartproducts, setcartproducts, keyword, setkeyword, id, setid} =sample
    const nav= useNavigate()
    console.log(products)
    const Addtocart = (i) => {
        // setcartproducts(i)

        const add=[...cartproducts, i]
        setcartproducts(add)
        toast.success(`${i.title} Successfully added to your cart. !`, {
            position: toast.POSITION.TOP_CENTER
        });
        
    }
    console.log(cartproducts);

    console.log(keyword);
    let filterBySearch = products?.filter((item) => {
        if ((item.brand || item.title).toLowerCase().includes(keyword.toLowerCase()) ) { return item; }
      })
    console.log(filterBySearch);

   


  return (
    <div>
        {/* <div style={{height: "75px"}}></div> */}
              

        {filterBySearch?.map((i,index)=>{
            return(
            <Card  className='cardd mt-5 text-body shadow-lg  '  style={{ marginLeft: "40px", width: '18rem' , height: '22rem' , float: "left"}}>
                <Link  to={`/viewp/${i.id}`}><Card.Img className='mt-2 m-auto' variant="top" src={i.images[0]}  style={{height: "150px", width: "150px"}}/></Link>
                <Card.Body>
                <Link className='cardtext' to={`/viewp/${i.id}`}><Card.Title>{i.brand}<span class="text-nowrap"></span></Card.Title><h6 className='text-nowrap bg-success text-white m-auto w-25 rounded'>{i.rating} ★</h6>
                    <Card.Text>
                        {i.title}
                        <h5>₹ {i.price}</h5>
                    </Card.Text>
                </Link>
                <Button onClick={()=>Addtocart(i)} className='mb-2' style={{ backgroundColor: "#2f3b53e5"}} variant="dark">Add to Cart</Button>
                </Card.Body>
            </Card>

            )
        })}
        
      
    </div>
  )
}

export default Productcards
