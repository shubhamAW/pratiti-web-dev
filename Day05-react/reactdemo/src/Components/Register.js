import './Register.css';
import {useState} from 'react';


const initialUserData={
    name:'',
    email:'',
    address:'',
    mobile:'',
    password:'',
    confirmPassword:'',
}
const Register = () => {
   const [userData , setUserData] = useState(initialUserData);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevUserData) => ({
                    ...prevUserData,
                    [name]: value,
        }));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        // do something with the user data, such as submit it to a server
      };

    function printDetails(event){
        event.preventDefault();
        console.log(userData);

    }
    const resetForm = (event) => {
        event.preventDefault();
        setUserData(initialUserData);
        console.log(userData);
      };

  return (
    <div>
    <form  className="form" action="" onSubmit={printDetails}>
        {/* enter name */}
        <div className="form-group">
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" value={(userData.name).toUpperCase()} id="name" placeholder="Enter Name" onChange={handleInputChange} />
        </div>
        {/* enter email */}
        <div className="form-group">
            <label htmlFor="email">Email : </label>
            <input type="email" name="email" value={userData.email} id="email" placeholder="Enter Email" onChange={handleInputChange}/>
        </div>
        {/* enter address */}
        <div className="form-group">
            <label htmlFor="address">Address : </label>
            <input type="text" value={userData.address} name="address" id="address" placeholder="Enter Address" onChange={handleInputChange}/>
        </div>
        {/* enter mobile number */}
        <div className="form-group">
            <label htmlFor="mobile">Mobile : </label>
            <input type="number" value={userData.mobile} name="mobile" id="mobile" placeholder="Enter Mobile" onChange={handleInputChange}/>
        </div>
        {/* enter password */}
        <div className="form-group">
            <label htmlFor="password">Password : </label>
            <input type="password" value={userData.password} name="password" id="password" placeholder="Enter Password" onChange={handleInputChange}/>
        </div>
        {/* enter confirm password */}
        <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password : </label>
            <input type="password" value={userData.confirmPassword} name="confirmPassword" id="confirmPassword" placeholder="Enter Confirm Password"onChange={handleInputChange} />
        </div>
        {/* submit button */}
        <div className="form-group">
            <input type="submit" value="Register" />
        </div>
        {/* reset button */}
        <div className='form-group'>
            <input type="button" value='reset'onClick={resetForm} />
        </div>
    </form>
    </div>
  )
}

export default Register