import styled from 'styled-components';


const Button = styled.button`
    color: var(--itemHeader);
    border: 1px solid var(--itemHeader);
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px 15px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    margin: 10px;

    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export default Button;