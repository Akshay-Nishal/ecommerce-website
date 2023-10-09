import React, { useRef } from 'react'
import './ContactUS.css'
const apiUrl = 'https://react-ecom-f4305-default-rtdb.asia-southeast1.firebasedatabase.app/ContactUS.json'

function ContactForm() {
    const nameRef = useRef()
    const emailRef = useRef()
    const numberRef = useRef()
    async function contactUsSubmitHandler(event){
        event.preventDefault()
        const nameInput = nameRef.current.value
        const emailInput = emailRef.current.value
        const numberInput = numberRef.current.value
        if(nameInput && emailInput && numberInput){
            let cont ={
                name:nameInput,
                email:emailInput,
                number:numberInput
            }
            console.log("ContactUS form Submitter")
            console.log(nameInput,emailInput,nameInput)
            try {
                const response = await fetch(apiUrl,{
                    method:'POST',
                    body:JSON.stringify(cont),
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                if(response.status===200){
                    console.log("Data Added Successfully")
                    nameRef.current.value = ''
                    emailRef.current.value = ''
                    numberRef.current.value = ''
                }
            } catch (error) {
                console.log(error.message)
            }
        }
    }
  return (
    <form id='contactUSForm' onSubmit={contactUsSubmitHandler}>
        <label htmlFor="name">Name</label>
        <input ref={nameRef} type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input ref={emailRef} type="email" id="email" />
        <label htmlFor="number">Contact Number</label>
        <input ref={numberRef} type="text" id="number" />
        <button type='submit'>Submit</button>
    </form>
  )
}


export default ContactForm
