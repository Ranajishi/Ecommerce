import React, { useContext, useState } from 'react'
import { samplecontext } from './App'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBIcon, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';
import './App.css';


const Cart = () => {
    const sample= useContext(samplecontext)
    const {cartproducts, setcartproducts, id, setid } =sample
    console.log(cartproducts);


    const [quantity, setquantity] = useState(cartproducts.map(()=>1))
    const [pricee, setpricee] = useState(cartproducts.map((i)=>i.price))

    let sum = pricee.reduce((acc, current) => acc + current, 0);
    console.log(sum);


    const Increment = (index,i) => {
        const newquantity=[...quantity]
        newquantity[index]= newquantity[index]+ 1;
        setquantity(newquantity)
        
        const newpricee=[...pricee]
        newpricee[index]=cartproducts[index].price*newquantity[index]
        setpricee(newpricee)

    }
    const Decrement = (index) => {
        const newquantity=[...quantity]
        newquantity[index]= newquantity[index]- 1;
        setquantity(newquantity)

        const newpricee=[...pricee]
        newpricee[index]=cartproducts[index].price*newquantity[index]
        setpricee(newpricee)
    }

    const Remove = (index) => { 
        // setid(index);
        setcartproducts(cartproducts.filter((_, i) => i !== index))

        // setquantity(quantity.filter((_, i) => i !== id))
        setpricee(pricee.filter((_, i) => i !== index))

        // const newQuantity = [...quantity];
        // newQuantity.splice(index, 1);
        // setquantity(newQuantity);
    
        // const newPricee = [...pricee];
        // newPricee.splice(index, 1);
        // setpricee(newPricee);


       
    }


  return (
    <div className='mt-5'>
        {cartproducts.map((i, index)=>{
            return(
                <MDBCard className="rounded-3 mb-4 w-75 m-auto">
                    <MDBCardBody className="p-4">
                        <MDBRow className="justify-content-between align-items-center">
                        <MDBCol md="2" lg="2" xl="2">
                        <Link  to={`/viewp/${i.id}`}> <MDBCardImage className="rounded-3" fluid
                            src={i.images[0]} style={{height: "120px"}}
                            alt="Cotton T-shirt" /></Link>
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3">
                            <p className="lead fw-normal mb-2">{i.title}</p>
                            <p>
                            <h6 className='text-nowrap bg-success text-white m-auto w-25 rounded'>{i.rating} ★</h6>

                            <h6 className='text-danger mt-2'>-{i.discountPercentage}%</h6>
                            </p>
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="2"
                            className="d-flex align-items-center justify-content-around">
                            <button color="link" className="px-2 btn btn-outline-primary" style={{marginLeft: "36px"}} onClick={()=>Decrement(index)}>
                            <MDBIcon fas icon="minus" />
                            </button>

                            <input min={0}  type="number" size="sm" value={quantity[index]} style={{width: "30px"}}  name='quantity'/>

                            <button color="link" className="px-2 btn btn-outline-primary" onClick={()=>Increment(index,i)}>
                            <MDBIcon fas icon="plus" />
                            </button>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                            <MDBTypography tag="h5" className="mb-0">
                            ${pricee[index]}
                           
                            </MDBTypography>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                            <a href="#!" className="text-danger">
                            <MDBIcon fas icon="trash text-danger" size="lg" onClick={()=>Remove(index)}/>
                            </a>
                        </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            )
        })}
        <div className="d-flex justify-content-between p-5 mb-5 w-25 m-auto" style={{ backgroundColor: "white" }}>
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        Total price:
                      </MDBTypography>
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                      ${sum}
                      </MDBTypography>
                    </div>

      
    </div>
  )
}

export default Cart













 
