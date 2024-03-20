import styled from "styled-components";


interface ButtonProps{
    children: string;
    margin?: string;
}

const ButtonStyle = styled.button<{margin?: string}>`
margin: ${props => props.margin};
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
text-transform: uppercase;
padding:  16px 34px;
border: 2px solid #C80000;
border-radius: 27px;
background-color: rgb(0, 0, 0, 0);
color: #fff;
transition: 0.4s;
cursor: pointer;
&:hover{
    background-color: #C80000;
    transition: 0.4s;
}

`

const Button = ({children, margin}: ButtonProps): JSX.Element=>{
    return(
        <ButtonStyle margin={margin}>{children}</ButtonStyle>
    )
}

export default Button;