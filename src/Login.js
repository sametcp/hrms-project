import { Formik } from 'formik';
import React from 'react'
import './App.css';
import * as Yup from "yup";
import './index.css'
import { Link, NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className = "containerrr">
            <div className = "brand-box" >
                <h1>İş Arayan</h1>
                <p>İşverenler buradan giriş yapabilir</p>
            </div>

            <div className = "magic-form">
                <Formik initialValues ={{
                  name: "",
                  email: "",
                  agree: false,
                  favoriteColor: ""
                }}
                validationSchema={
                  Yup.object({
                    name: Yup.string().required("İsim boş bırakılamaz"),
                    email: Yup.string().email("Geçerli bir email adresi giriniz").required("Email boş bırakılamaz"),
                    agree: Yup.boolean().required("Koşulları kabul etmelisin"),
                    favoriteColor: Yup.string().required("Bir renk seçmelisin")
                    .oneOf(["red", "blue","green"])
                  })
                }
                onSubmit = {(values, {resetForm, setSubmitting}) => {
                  console.log(values)
                  setTimeout(() => {
                    setSubmitting(false)
                    resetForm()
                  }, 2000)
                  alert("Girişiniz yapıldı.")
                }}
                >

                
                {
                  ({values, errors, handleChange, handleSubmit, handleReset, dirty, isSubmitting, touched}) => (
                    <form onSubmit = {handleSubmit}>
                      <h2>İşveren</h2>
                      <input id="name" 
                      type = "text" 
                      placeholder = "İsim" 
                      className = "input"
                      value = {values.name} 
                      onChange = {handleChange}
                      />

                      {
                        errors.name && touched.name && (
                          <div className = "input-feedback">
                            {errors.name}
                          </div>
                        )
                      }

                    <label htmlFor = "email" className="topMargin"></label>
                      <input id="email" type = "email" placeholder = "E-mail adresiniz" className = "input"
                      value = {values.email} onChange = {handleChange}></input>

                      {
                        errors.email && touched.email && (
                          <div className = "input-feedback">
                            {errors.email}
                          </div>
                        )
                      }

                      <label htmlFor = "favoriteColor" className="topMargin">
                        
                      </label>
                      

                      <select id="favoriteColor"
                      value={values.favoriteColor} 
                      onChange = {handleChange}
                      style = {{
                        marginTop: 10,
                        width: "165px",
                        height: "27.5px",
                        outline: "none"
                      }}
                      
                      >
                        
                        <option value = "" label="Renk Seçiniz"/>
                        <option value = "red" label="Kırmızı"/>
                        <option value = "blue" label="Mavi"/>
                        <option value = "green" label="Yeşil"/>
                      </select>
                      
                      {
                        errors.favoriteColor && touched.favoriteColor && (
                          <div className = "input-feedback">
                            {errors.favoriteColor}
                          </div>
                        )
                      }
                      
                      <br></br>
                      
                    {/* <div className="checkbox topMargin">
                      <input id="agree" type="checkbox" value={values.agree} onChange = {handleChange}/>
                      <label htmlFor="agree" className="checkbox-label" ><h4>Sözleşmeyi okudum, kabul ediyorum.</h4></label>
                      
                      {
                        errors.agree && touched.agree(
                          <div className = "input-feedback">
                            {errors.agree}
                          </div>
                        )
                      }

                    </div> */}
                    <br></br>

                    <button type="submit" disabled={isSubmitting || !dirty }>Giriş Yap</button>
                    </form>
                  )
                }
                

                </Formik>
            </div>
        </div>
    )
}

export default Login
