import Navbar from './Navbar'
import React,{Fragment} from 'react'
import {add} from '../services/ProductService'



class AddProduct extends React.Component {

        constructor(props){
                super(props)
                this.state={
                    product:{
                        Name:"",
                        Price:"",
                        Photo:""
                    }
                }
                this.handleChange=this.handleChange.bind(this);
                this.handelSubmit=this.handelSubmit.bind(this);
                this.validat=this.validat.bind(this);
        }
        handleChange(e) {
            const product = { ...this.state.product };
            product[e.target.name] = e.target.value;
            this.setState({ product });
            console.log(this.state.product)
        }; 
        validat(){
            let name=this.state.product.Name;
            let price=this.state.product.Price;
            if(name&&price){
               return true
            }else{
                return false;
              
            }
        }
        addproduct(){
           let {product}=this.state
           let productData=new FormData();
           productData.append("Name",product.Name)
           productData.append("Price",product.Price)
           productData.append("Photo",product.Photo)
            add(productData)
            .then(()=>{
                const {state} = this.props.location;
                this.props.history.push(`/`)
            })
        }
        handelSubmit(e) {
            e.preventDefault();
            let result=this.validat();
            if  (result){
                    this.addproduct()
            }
           else{
                alert("please complete product product")
            }
        }


    render (){ 
        console.log(this.state.product)
        return  (
            <Fragment>
                <Navbar/>
                <div className="styleDiv col-md-6 col-sm-12">
                <form className="align-items-center">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" name="Name" value={this.state.product.Name} placeholder="product Name" onChange={this.handleChange}/>
                            </div> 
                            <div className="form-group">
                                <label>Price</label>
                                <input type="number" className="form-control" name="Price" value={this.state.product.Price} placeholder="product Price" onChange={this.handleChange}/>
                            </div> 
                            <div className="form-group">
                                <label>Photo</label>
                                <input type="file" className="form-control" name="Photo" value={this.state.product.Photo} placeholder="Product Photo" onChange={this.handleChange}/>
                            </div> 
                
                            <button type="submit" className="btn btn-primary" onClick={this.handelSubmit}>Add</button>
                    </form>
            </div>

            </Fragment>
       
        )
    }
}


export default AddProduct