import Admin from "../main";
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import '../admins/admins.css';
function CategoryEdit(){
    const {id} = useParams();
    const [selectedFile, setSelectedFile] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const onFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const onInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const onFileUpload = (e) => {
        e.preventDefault();
      if (selectedFile) {
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('text', inputValue);
        axios.post(`http://localhost/React_project/back-end/category-admin/edit.php?id=${id}`, formData)
          .then((response) => {
            console.log('File uploaded:', response.data);
            navigate('/admin/category');
          });
      } else {
        console.log('No file selected.');
      }
    };
    return(
        <>
            <Admin />
            <div className="content">
                <div className="edit">
                <form className=" category" id="admins">
                    <label>Category Name</label>
                    <input         
                        type='text'
                        value={inputValue}
                        onChange={onInputChange}/>
                    <label>Category image</label>
                    <input type="file" name="photo" onChange={onFileChange} />
                    <input type="submit" value='add' onClick={onFileUpload}/>
                 </form>
                </div>

            </div>
        </>
    )
}
export default CategoryEdit;
