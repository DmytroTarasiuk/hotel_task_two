import React, { useState } from "react";

import { useForm } from "react-hook-form";
import Modal from "../UI/Modal";

const Form = (props) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
          mode: "onChange"
      });
      const [isSubmitted, setSubmitted] = useState(false)
      const [name, setName] = useState("")
      

    const onSubmit = (data) => {
        setSubmitted(true)
        setName(data.name)
        console.log(data)
        
    }

    

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>If you have any questions please send us a message</label>
            <input
            placeholder="Name and surname"
            type="text"
            
            {...register("name", { required: 'This is required', maxLength: 80 })}
            />
            {errors.name && <p style={{color: 'red', fontSize: '0.7rem'}}>{errors.name.message}</p>}
            
            <input
            placeholder="Email"
            type="text"
            {...register("email", {
            required: "this is required",
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email address"
            }
            })}
            />
            {errors.email && <p style={{color: 'red', fontSize: '0.7rem'}}>{errors.email.message}</p>}
            <input
            type="number"
            placeholder="Phone number"
            {...register("number", {
            required: 'This is required',
            maxLength: {
                value: 11,
                message: "Max length is 11"
            },
            minLength: {
                value: 8,
                message: 'Min length is 8'
            }
            })}
            />
            {errors.number && <p style={{color: 'red', fontSize: '0.7rem'}}>{errors.number.message}</p>}
           
            <textarea id="textarea" name="textarea" cols="10" rows="8" placeholder="Describe your message..." required maxLength={100}></textarea>
            <button type="submit" className="submit-btn">send message</button>
        </form>
        {isSubmitted && <Modal onClose={props.onClose}>
            <p>Thank you <span style={{color: '#eb2f64', fontSize: '1.2rem'}}>{name}</span> for a message.We will contact you as soon as possible</p>
            <button className='close-button' onClick={() => {
                setSubmitted(false)
            }}>
                Close
            </button>
            </Modal>}
        </>
    )
}

export default Form