import React from 'react'
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import "./Calculator.css"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
function Calculator() {
    const [inputValue, setInputValue] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [birthYear, setBirthYear] = useState('');
   


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const  handleSubmit = (e) => {
        e.preventDefault()
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - inputValue;
        setBirthYear(birthYear);
        setSubmitted(true);

    };

    

    return (
    
            <Container className='TheContainer'>
                <header><h2>AGE CALCULATOR</h2></header>
                <Form className='theForm' onSubmit={handleSubmit}>
                    <Form.Control type='number' className='AddAge' placeholder='Type Age Here' value={inputValue} onChange={handleInputChange}></Form.Control>
                   {submitted && (
                    <div className='ShowYear'>{birthYear}</div>
                    )}
                       <div className="buttt ">
                    <Button type='submit' className='btn '>Check</Button>
                </div>
                </Form>
             
            </Container>
    
    )
}

export default Calculator
