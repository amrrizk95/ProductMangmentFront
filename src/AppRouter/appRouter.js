import React from 'react'
import { BrowserRouter ,Route,Switch } from 'react-router-dom';
import product from '../component/Products'
import NotFound from '../component/Notfound'
import AddProduct from '../component/addProduct'
import EditProduct from '../component/editProduct'

class  AppRounter extends React.Component{


    render(){
        return (
            <BrowserRouter>
               <Switch>
                 
                    <Route exact  path="/" component={product}/>
                    <Route exact  path="/addproduct" component={AddProduct}/>
                    <Route exact  path="/editproduct:id" component={EditProduct}/>
                    <Route path="*" component={NotFound}/>
               </Switch>
                </BrowserRouter>
        )
    }
}

export default AppRounter