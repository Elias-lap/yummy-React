import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function Contact() {
  let validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be more than 3 characters")
      .max(10, "Name can't be more than 10 characers"),
    age: Yup.number()
      .required("Age is required")
      .min(18, "You must be 18 at least")
      .max(80, "You must be at most 80 years old"),
    email: Yup.string()
      .required("email is required")
      .email("Please Enter a valid Email"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^(\\+48|48)?\\s?\\d{3}\\s?\\d{3}\\s?\\d{3}$/, "Please Enter a valid Phone number"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "password must be at least 8")
      .max(25, "password can't be more than 25")
      .matches(/^[A-Z]/, "Password must start with capital letter"),
    repassword: Yup.string()
      .required("Repassword is required")
      .oneOf([Yup.ref("password")], "Password and Repassword must be the same"),
  });

  
 let formik = useFormik ({
  initialValues : {
    name : '' , 
    age : '',
    email : '',
    phone : '',
    password :'',
    rePassword :''
  },
  validationSchema , 
   onSubmit : Send,
 });
function Send(){
  console.log(formik.values)
}

  return (
    <>
 <form onSubmit={formik.handleSubmit}>
 <div className="contact min-vh-100 d-flex justify-content-center align-items-center">
  <div className="container w-75 text-center">
    <div className="row g-4">
      <div className="col-md-6">
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} id='name' name='name'  type="text" className="form-control" placeholder="Enter Your Name" />
        {formik.errors.name && formik.touched.name? <div className=' alert alert-danger mt-2'>{formik.errors.name}</div>:null}
      </div>
      <div className="col-md-6">
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} id='email' name='email'  type="email" className="form-control " placeholder="Enter Your Email" />
        {formik.errors.email && formik.touched.email? <div className=' alert alert-danger mt-2'>{formik.errors.email}</div>:null}
      </div>
      <div className="col-md-6">
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} id='phone' name='phone'  type="text" className="form-control " placeholder="Enter Your Phone" />
        {formik.errors.phone && formik.touched.phone? <div className=' alert alert-danger mt-2'>{formik.errors.phone}</div>:null}
        
      </div>
      <div className="col-md-6">
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.age} id='age' name='age'  type="number" className="form-control " placeholder="Enter Your Age" />
        {formik.errors.age && formik.touched.age? <div className=' alert alert-danger mt-2'>{formik.errors.age}</div>:null}
      </div>
      <div className="col-md-6">
    
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} id='password' name='password'  type="password" className="form-control " placeholder="Enter Your Password" />
        {formik.errors.password && formik.touched.password? <div className=' alert alert-danger mt-2'>{formik.errors.password}</div>:null}
      </div>
      <div className="col-md-6">
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} id='rePassword' name='rePassword'  type="password" className="form-control " placeholder="Repassword" />
        {formik.errors.rePassword && formik.touched.rePassword? <div className=' alert alert-danger mt-2'>{formik.errors.rePassword}</div>:null}
      </div>
    </div>
    <button disabled ={!(formik.isValid && formik.dirty) ? true : false}
     type='submit' className="btn btn-outline-danger px-2 mt-3">Submit</button>
  </div>
 
</div>
 </form>

    
    
    
    </>
  )
}
