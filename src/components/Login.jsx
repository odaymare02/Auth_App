import axios from "axios";
import { Formik, useFormik } from "formik";
import React from "react";

export default function Login() {
  const formik = useFormik({
    initialValues:{
        email:"",
        password:""
    },onSubmit:async()=>{
        const {data}=await axios.post("https://ecommerce-node4.onrender.com/auth/sigin",formik.values);
    },validate:values=>{
        const errors={};
        if(values.email.length<=8){
            errors.email="email must be at least 8 characters";
        }
        if(values.password.length<=6){
            errors.password="password must be at least 6 characters";
        }
        return errors;
    }
  });
  console.log(formik.errors);
  return (
    <>
      <h2>Login page</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={formik.values.email}
            placeholder="name@example.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="userName">user email</label>
          {
            formik.errors.email && formik.touched.email? <div className="alert alert-danger">{formik.errors.email}</div>
            :""
          }
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formik.values.password}
            placeholder="name@example.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="userName">user password</label>
          {
            formik.errors.password && formik.touched.password? <div className="alert alert-danger">{formik.errors.password}</div>
            :""
          }
        </div>
        <button type="submit" className={` btn btn-outline-info ${formik.errors.email||formik.errors.password?"disabled":""}`}> Login</button>
      </form>
    </>
  );
}
