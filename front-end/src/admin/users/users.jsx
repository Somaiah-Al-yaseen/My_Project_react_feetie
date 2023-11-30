import Admin from "../main";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../UI-elements/button";
import DeleteButton from "../UI-elements/delete"
import EditButton from "../UI-elements/edit";
import { useNavigate , Link } from "react-router-dom";
import '../admins/admins.css';
import './users.css';
function Test() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [input , updInput] = useState({});
    const Show = () =>{
        document.querySelector('#admins').classList.toggle('show')
    }
  useEffect(() => {
    axios.get("http://localhost/React_project/back-end/users-admin/read.php")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const inputHandler = (e) =>{
    const name  = e.target.name;
    const value = e.target.value;
    updInput(values => ({...values , [name]: value}));
  }
  const addHandler = (e) => {
    if(input.Fname == null && input.email==null && input.phone == null){
      e.preventDefault();
    }
    
    else{
      axios.post('http://localhost/React_project/back-end/users-admin/create.php', input)
      .then((r) => {
        console.log(r.data);
        navigate('/admin/users');
      })
    }

  };
  return (
    <>
      <Admin/>
      <div className="content">
            <Button className="add_users" onClick={Show}>Add Users</Button>
            <form className="admins" id="admins" onSubmit={addHandler}>
                <label>Fname</label>
                <input type="text" name="Fname" onChange={inputHandler}/>
                <label>Lname</label>
                <input type="text" name="Lname" onChange={inputHandler}/>
                <label>password</label>
                <input type="password" name="password" onChange={inputHandler}/>
                <label>email</label>
                <input type="email" name="email" onChange={inputHandler}/>
                <label>phone</label>
                <input type="text" name="phone" onChange={inputHandler}/>
                <label>address</label>
                <input type="text" name="address" onChange={inputHandler}/>
                <input type="submit" />
            </form>
            <div id="maindiv">

                <div className="container-lg">
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-sm-8"><h2> Users <b> Details</b></h2></div>
                                </div>
                            </div>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>FName</th>
                                        <th>Lname</th>
                                        <th>email</th>
                                        <th>password</th>
                                        <th>address</th>
                                        <th>phone</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item => (
                                        <tr key={item.UserId}>
                                            <td>{item.UserId}</td>
                                            <td>{item.FirstName}</td>
                                            <td>{item.LastName}</td>
                                            <td>{item.Email}</td>
                                            <td>{item.Password}</td>
                                            <td>{item.ShippingAddress}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                            
                                            <Link to={`/admin/users/edit/${item.UserId}`}>  <EditButton>Edit</EditButton>
                                                </Link> 
                                                
                                            
                                            <Link to={`/admin/users/delete/${item.UserId}`}> <DeleteButton>Delete</DeleteButton></Link>
                                            
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
  );
}

export default Test;
