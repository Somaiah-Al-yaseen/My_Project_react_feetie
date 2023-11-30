import Admin from "../main";
import Button from "../UI-elements/button";
import { useState , useEffect } from "react";
import axios from "axios";
import { useNavigate , Link, Navigate } from "react-router-dom";
import DeleteButton from "../UI-elements/delete"
import EditButton from "../UI-elements/edit";
import './category.css';
import 'bootstrap/dist/css/bootstrap.css';
function AdminCategory (){
    const [selectedFile, setSelectedFile] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([]);
    const Show = () =>{
        document.querySelector('#admins').classList.toggle('show')
    }
    const onFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const onInputChange = (event) => {
      setInputValue(event.target.value);
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
    const onFileUpload = (e) => {
        e.preventDefault();
      if (selectedFile) {
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('text', inputValue);
  
        axios.post('http://localhost/React_project/back-end/category-admin/create.php', formData)
          .then((response) => {
            console.log('File uploaded:', response.data);
            window.location.reload();
          });
      } else {
        console.log('No file selected.');
      }
    };
    return(
        <>
            <Admin />
            <div className="content">
            <Button className="add_category" onClick={Show}>Add Category</Button>
            <form className="admins category" id="admins">
                <label>Category Name</label>
                <input         
                    type='text'
                    value={inputValue}
                    onChange={onInputChange}/>
                <label>Category image</label>
                <input type="file" name="photo" onChange={onFileChange} />
                <input type="submit" value='add' onClick={onFileUpload}/>
            </form>
            <div id="maindiv">

                <div className="container-lg">
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-sm-8"><h2> Categories  <b> Details</b></h2></div>
                                </div>
                            </div>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Category name</th>
                                        <th>Category Image</th>
                                        <th>Action</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                {data.map(item => (
                                        <tr key={item.CategoryID}>
                                            <td>{item.CategoryID}</td>
                                            <td>{item.CategoryName}</td>
                                            <td><img src={`/images/${item.Image}`} alt="category_image"  style={{width:'200px', height:'200px'}} /></td>
                                          
                                            <td>
                                            
                                            <Link to={`/admin/category/edit/${item.CategoryID}`}>  <EditButton>Edit</EditButton>
                                                </Link> 
                                                
                                            
                                            <Link to={`/admin/category/delete/${item.CategoryID}`}> <DeleteButton>Delete</DeleteButton></Link>
                                            
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