
import React, { Component,Fragment } from 'react'
import Navbar from './Navbar';
import {getAll,deleteProduct} from '../services/ProductService'
import DataTable from 'react-data-table-component';
import './Nav.css'

const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      }
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };




class product extends Component {
   
    constructor(props){
        super(props)
        
        this.state={
            data:[],
      
        }
 
       
    }
    componentDidMount(){
     
        this.getProducts()
 
        }
        handelDelete=(id)=>{
            deleteProduct(id).then(()=>this.getProducts())
        }
        handelEdit=(id)=>{
            this.props.history.push(`/editproduct:${id}`)
        }
        handelCreate=()=>{
            this.props.history.push(`/addproduct`)
        }
        getProducts=()=>{
            getAll().
            then(res=>{
            let resData=res.data
            console.log("resData",resData)
            this.setState({data:resData})
            } 
            )
        }
    render(){
        const  columns = [
            {
              name: 'Id',
              selector: 'id',
              sortable: true,
              
            },
            {
              name: 'Name',
              selector: 'name',
              sortable: true,
              right: true,
            },
            {
              name: 'Price',
              selector: 'price',
              sortable: true,
              right: true,
            },
            {
              name: 'Create Date',
              selector: 'createdDate',
              sortable: true,
              right: true,
            },
            {
              name: 'Update Date',
              selector: 'lastUpdated',
              sortable: true,
              right: true,
            },
            {
              name: 'Option',
              cell: row => 
            
                      <div>
                      <button  className="btn btn-secondary btnEdit" onClick={() => this.handelEdit(row.id)} >
                      Edit</button>
                      <button  className="btn btn-danger"  onClick={() => this.handelDelete(row.id)}>
                      Delete</button>
                   
                          </div>
          
                  
              ,
            },
          ];
        
        
        return(
            <Fragment>
              
                 <Navbar/>

                <div className="styleDiv">
                <div className="row"> 
                     <button className="btn btn-success" onClick={()=>this.handelCreate()}>Add Product</button>
                 </div>
                <DataTable
                    title="Products"
                    columns={columns}
                    data={this.state.data}
                    customStyles={customStyles}
      />
                    
                </div>
                 </Fragment>
        )
    }

}

export default product;