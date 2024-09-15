import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'

export default function Register() {
    const formik=useFormik({
        initialValues:{
            userName:'',
            email:'',
            password:''
        },onSubmit:async (values)=>{
            const {data}=await axios.post("https://ecommerce-node4.onrender.com/auth/signup",formik.values);
        },validate:(values)=>{
            let errors={};
            if(values.email.length <=8){
                errors.email="email is requried";
            }
            if(values.password.length <=8){
                errors.password="password is requried";
            }
            return errors;
        }
    });
  return (
    <div>
      <h2>
        Register Page
      </h2>
      <form onSubmit={formik.handleSubmit}> 
      <div className="form-floating mb-3">
    <input type="text" className="form-control"
     id="userName" 
     placeholder="name@example.com"
     name='userName'
     value={formik.values.userName}
     onChange={formik.handleChange}
     />
    <label htmlFor="userName">user name</label>
  </div>
  <div className="form-floating mb-3">
    <input type="email" className="form-control"
     id="email" 
     placeholder="name@example.com"
     name='email'
     value={formik.values.email}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
      />
    <label htmlFor="email">user email</label>
    {
        formik.errors.email&&formik.touched.email ?
        <div className="alert alert-danger">{formik.errors.email}</div>
        :""
    }
  </div>
  <div className="form-floating mb-3">
    <input type="password" className="form-control"
     id="password" 
     placeholder="name@example.com"
     name='password'
     value={formik.values.password}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
      />
    <label htmlFor="password">user password</label>
    {
        formik.errors.password && formik.touched.password?
        <div className="alert alert-danger">{formik.errors.password}</div>
        :""
    }
  </div>
  <button type="submit" className={`btn btn-primary ${formik.errors.email||formik.errors.password?"disabled":""}`}>Register</button>
      </form>
    </div>
  )
}
