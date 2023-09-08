import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { samplecontext } from './App'
import { Button, Card, Figure } from 'react-bootstrap'
import { toast } from 'react-toastify'

const ViewP = () => {
  const sample= useContext(samplecontext)
  const {products, setproducts, cartproducts, setcartproducts} =sample

  const { id }= useParams()
  console.log(id);

  const filterp=products.filter((i)=>i.id==id)
    console.log(filterp);

    const Addtocart = (i) => {

      const add=[...cartproducts, i]
      setcartproducts(add)
      toast.success(`${i.title} Successfully added to your cart. !`, {
          position: toast.POSITION.TOP_CENTER
      });
      
  }
   
  return (
    <div>
      {filterp.map((i)=>{
      return(
      <Card className='w-75 m-auto mt-5'>
      <Card.Body>
        <div > 
        <div className='mt-5' style={{float: "left", width: "30%"}} >
        <Figure >
        <Figure.Image 
          width={300}
          height={80}
          alt="171x180"
          style={{marginLeft: "80px"}}
          src={i.images[0]}
        />
        
      </Figure>
      </div>
  
      <div className='mt-2 ' style={{float: "left", paddingLeft: "94px", width: "70%"}} > 
        <h1>{i.title}</h1>  
        
        <p class="font-weight-normal m-4">{i.category}| {i.brand}
        <div className='mt-2 ' >
        <br/> {i.description} 
        <br/><h2>${i.price}</h2> <span className='text-danger float-left'>-{i.discountPercentage}% </span>
        <br/> <span style={{color: "Green", fontSize: "25px"}}>★</span> {i.rating} 
        </div>
        {/* <h5>{getstars(i.vote_average)}</h5> */}
  
        </p>
        <Button  className='mb-1 w-50' onClick={()=>Addtocart(i)} style={{ backgroundColor: "#f1dc1b", borderRadius: "40px", color: "black"}} >Add to Cart</Button><p/>
        <Button  className='mb-2  w-50' style={{ backgroundColor: "#f18d1b", borderRadius: "40px", color: "black"}} >Buy Now</Button>

        
  
  
  
        </div>  
        
      </div> 
      </Card.Body>
    </Card>
      )})}
      
    </div>
  )
}

export default ViewP
