
import React from "react";
import styled from "styled-components";

const MyCustomButton = (props) => {
    return <Button onClick={props.onClick} >Upload a picture</Button>;
};

export default MyCustomButton;

const Button = styled.button`
    background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
    padding: 12px 0;
    width: 200px;
    border: none;
    border-radius: 30px;
    color: #fff;
    font-weight: bold;
    font-family: Segoe UI, sans-serif;
    cursor: pointer;

    :focus {
        outline: none;
    }
`;