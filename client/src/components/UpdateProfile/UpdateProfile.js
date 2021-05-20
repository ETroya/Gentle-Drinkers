import React, {useRef, useState} from 'react'
import{Card, Button, Form, Alert, Container} from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom'
import {useAuth} from "../Contexts/AuthContext"

export default function UpdateProfile() {
    const emailRef =useRef()
    const passwordRef =useRef()
    const passwordConfirmRef =useRef()
    const [error, setError]= useState("")
    const {currentUser, updatePassword, updateEmail}=useAuth()
    const [loading, setLoading]= useState(false)
    const history =useHistory()

     function handleSubmit(e){
      e.preventDefault()

      if(passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError("Password does not match") 
      }
      const promises =[]
      setLoading(true)
      setError("")

      if(emailRef.current.value !== currentUser.email){
          promises.push(updateEmail(emailRef.current.value))
      }
      if(passwordRef.current.value){
          promises.push(updatePassword(emailRef.current.value))
      }    
      
      Promise.all(promises).then(()=>{
          history.push("/")
      }).catch(()=>{
          setError("Failed to update account")
      }).finally(()=>{
          setLoading(false)
      }
      )
    }
    return (
    <>
    <Container className='d-flex algin-items-center justify-content-center mt-5' style={{ minHeight: "100vh"}}>
     <div className='w-100 text-secondary' style={{ maxWidth: '400px'}}>
        <Card>
        <Card.Body>
        <h2 className="text-center mb-4">Update Profile</h2>
        {error && < Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>  
              <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}/>
            </Form.Group>
            {/* <Form.Group id="name"> */}
              {/* <Form.Label>Name</Form.Label>  
              <Form.Control type="Name" ref={nameRef} required/>
            </Form.Group> */}
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>  
              <Form.Control type="password" ref={passwordRef} placeholder="Leave blank to keep the same"/>
            </Form.Group>
            <Form.Group id="password-Confirmation">
              <Form.Label>Password Confirmation</Form.Label>  
              <Form.Control type="password" ref={passwordConfirmRef}  placeholder="Leave blank to keep the same"/>
            </Form.Group>
            <Button disabled={loading} className= "w-100 mt-4" type ="submit">Update</Button>
        </Form>
        </Card.Body>    
        </Card>  
        <div className="w-100 text-center mt-2">
              <Link to="/">Cancel</Link>
        </div>
        </div>
        </Container>
    </>
    )
}