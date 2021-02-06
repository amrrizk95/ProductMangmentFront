import Navbar from './Navbar'
import React,{Fragment} from 'react'
import {edit,get} from '../services/ProductService'



class EditProduct extends React.Component {

        constructor(props){
                super(props)
                this.state={
                    product:{
                        id:"",
                        Name:"",
                        Price:"",
                        Photo:""
                    }
                }
                this.handleChange=this.handleChange.bind(this);
                this.handelSubmit=this.handelSubmit.bind(this);

                this.validat=this.validat.bind(this);
        } 
        componentDidMount(){
            let id = this.props.match.params.id;
            this.getProduct(id)
        }
        handleChange(e) {
            const product = { ...this.state.product };
            product[e.target.name] = e.target.value;
            this.setState({ product });
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
        editproduct(){
           let {product}=this.state
           let productData=new FormData();
           productData.append("Name",product.Name)
           productData.append("Price",product.Price)
           productData.append("Photo",product.Photo)
           productData.append("Id",product.id)
           edit(productData)
            .then(()=>{
                const {state} = this.props.location;
                this.props.history.push(`/`)
            })
        }
        getProduct=(id)=>{
            
            get(id.split(':')[1]).then((res)=>{
                console.log(id.split(':')[1])
                console.log("edit",res.data)
 
                this.setState({product:{Name:res.data.name,Price:res.data.price,id:res.data.id}})
            }).then(console.log("ss",this.state))
        }
        handelSubmit(e) {
            e.preventDefault();
            let result=this.validat();
            if  (result){
                    this.editproduct()
            }
           else{
                alert("please complete product product")
            }
        }


    render (){ 
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
                
                            <button type="submit" className="btn btn-primary" onClick={this.handelSubmit}>Edit</button>
                    </form>
            </div>

            </Fragment>
       
        )
    }
}


export default EditProduct