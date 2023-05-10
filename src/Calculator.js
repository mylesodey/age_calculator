import React from 'react'
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import "./Calculator.css"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
function Calculator() {
    const [inputValue, setInputValue] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [birthYear, setBirthYear] = useState('');
    const [age, setAge] = useState(null);


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - inputValue;
        setBirthYear(birthYear);
        setSubmitted(true);

    };
    const handleSubmit2 = (e) => {
        e.preventDefault()
        const birthdateArray = inputValue2.split("/");
        const birthYear = parseInt(birthdateArray[0]);
        const birthMonth = parseInt(birthdateArray[1]) - 1; // January is 0
        const birthDay = parseInt(birthdateArray[2]);
        const today = new Date();
        const age = today.getFullYear() - birthYear;
        if (today.getMonth() < birthMonth || (today.getMonth() === birthMonth && today.getDate() < birthDay)) {
          // If the user hasn't had their birthday yet this year, subtract one from their age
          // eslint-disable-next-line no-const-assign
          age--;
        }
        setAge(age);

    };



    return (
        <div className="all">
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
            <Container className='TheContainer'>
                <header><h2>FULL AGE CALCULATOR</h2></header>
                <Form className='theForm' onSubmit={handleSubmit2}>
                    <Form.Control type='date' className='AddAge' placeholder='Type Age Here' value={inputValue2} onChange={handleInputChange2}></Form.Control>
                    {age && (
                        <div className='ShowYear'>{age}</div>
                    )}
                    <div className="buttt ">
                        <Button type='submit' className='btn '>Check</Button>
                    </div>
                </Form>

            </Container>
        </div>

    )
}

export default Calculator
