import Admin from "../main";
import Button from "../UI-elements/button";
import { useState , useEffect } from "react";
import axios from "axios";
import { useNavigate , Link, Navigate } from "react-router-dom";
import DeleteButton from "../UI-elements/delete"
import EditButton from "../UI-elements/edit";
import 'bootstrap/dist/css/bootstrap.css';
function AdminCategory (){
    const [selectedFile, setSelectedFile] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [inputdes, des] = useState('');
    const [inputpri, pri] = useState('');
    const [inputcata, scata] = useState('');
    const [inputqun, qun] = useState('');
    const [inputsales, sales] = useState('');
    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);
    const Show = () =>{
        document.querySelector('#admins').classList.toggle('show')
    }

    const onFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
    
    const onInputChange = (event) => {
        setInputValue(event.target.value);
      };
    const ondesChange = (event) => {
        des(event.target.value);
      };
    const onpriChange = (event) => {
        pri(event.target.value);
      };
    const oncataChange = (event) => {
        scata(event.target.value);
      };
    const onqunChange = (event) => {
        qun(event.target.value);
      };
    const onsalesChange = (event) => {
        sales(event.target.value);
      };
    useEffect(() => {
        axios.get("http://localhost/React_project/back-end/category-admin/read.php")
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);
    useEffect(() => {
        axios.get("http://localhost/React_project/back-end/products-admin/read.php")
          .then((response) => {
            setProducts(response.data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);
    const onFileUpload = (e) => {
        // e.preventDefault();
      if (selectedFile) {
        
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('name', inputValue);
        formData.append('description', inputdes);
        formData.append('price', inputpri);
        formData.append('category', inputcata);
        formData.append('quantity', inputqun);
        formData.append('sales', inputsales);
        console.log(inputValue);
        axios.post('http://localhost/React_project/back-end/products-admin/create.php', formData)
          .then((response) => {
            console.log('File uploaded:', response.data);
            // window.location.reload();
          });
      } else {
        console.log('No file selected.');
      }
    };
    return(
        <>
            <Admin />
            <div className="content">
            <Button className="add_category" onClick={Show}>Add Products</Button>
            <form className="admins category" id="admins" onSubmit={onFileUpload}>
                <label>Product Name</label>
                <input         
                    type='text'
                    name="name"
                    value={inputValue.name}
                    onChange={onInputChange}/>
                <label>Description</label>
                <input         
                    type='text'
                    name="description"
                    value={inputValue.description}
                    onChange={ondesChange}/>
                <label>Price</label>
                <input         
                    type='number'
                    name="price"
                    value={inputValue.price}
                    onChange={onpriChange}/>
                <label>Category Name</label>
                <select
                        className="admin_select"
                        name="category"
                        onChange={oncataChange}
                        value={inputValue.category}
                        >
                            <option selected>Category Name</option>
                        {data.map((e)=>(
                            <option value={e.CategoryID}>{e.CategoryName}</option>
                        ))}
                    </select>
                <label>stockQuantity</label>
                <input         
                    type='number'
                    name="quantity"
                    value={inputValue.quantity}
                    onChange={onqunChange}/>
                <label>sales</label>
                <input         
                    type='number'
                    name="sales"
                    value={inputValue.sales}
                    onChange={onsalesChange}/>
                <label>Product image</label>
                <input type="file" name="photo" onChange={onFileChange} />
                <input type="submit" value='add' />
            </form>
            <div id="maindiv">

                <div className="container-lg">
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-sm-8"><h2> Products  <b> Details</b></h2></div>
                                </div>
                            </div>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Product Id</th>
                                        <th>Product name</th>
                                        <th>CatigoryID</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Stock Quantity</th>
                                        <th>sales</th>
                                        <th>Image</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                {products.map(item => (
                                        <tr key={item.ProductID }>
                                            <td>{item.ProductID}</td>
                                            <td>{item.ProductName}</td>
                                            <td>{item.CategoryID}</td>
                                            <td>{item.Description}</td>
                                            <td>{item.Price}</td>
                                            <td>{item.StockQuantity}</td>
                                            <td>{item.Sales}</td>
                                            <td><img src={`/images/${item.Image}`} alt="category_image"  style={{width:'200px', height:'150px'}} /></td>
                                            
                                          
                                            <td>
                                            
                                            <Link to={`/admin/products/edit/${item.ProductID}`}><EditButton>Edit</EditButton></Link> 
                                                
                                            
                                            <Link to={`/admin/products/delete/${item.ProductID}`}><DeleteButton>Delete</DeleteButton></Link>
                                            
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default AdminCategory;