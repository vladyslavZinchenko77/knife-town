
import styled from "styled-components";
import Flex from "../Flex/Flex";
import { ReactComponent as InputArrow } from "../../svg/input-arrow.svg";


const EmailLabelStyle = styled.div`

padding: 50px 0 50px 0;
display: flex;
justify-content: center;
.email__submit-btn{
    background-color: rgb(0,0,0,0);
    cursor: pointer;
    outline: none;
    box-shadow: 0;
    border: none;
    padding:0;
    position: relative;
    top: 10px;
    right: 40px;
}

`

const EmailTitle = styled.label`
font-family: 'Jura';
font-style: normal;
font-weight: 500;
font-size: 27px;
line-height: 1.56;
color: #FFFFFF;
text-align: center;
`
const EmailInputStyles = styled.input`
margin-top: 17px;
padding: 21px 0 20px 26px;
width: 276px;
background-color:  #272727;
border-radius: 6px;
outline: none;
color: #fff;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 15px;
border: none;
`


const EmailNewsInput = ():JSX.Element =>{
    
    return(
        
            <EmailLabelStyle>
                <form action="">
                <Flex flexDirection="column">
                    <EmailTitle htmlFor="" className="email__label">Познайомтеся з колекцією ножів KNIFETOWN</EmailTitle>
                    <Flex className="email__input-wrap" justifyContent="center" alignItems="center">
                        <EmailInputStyles type='email' placeholder="Ваш e-mail" />
                        <button className="email__submit-btn" type="submit">
                            <InputArrow />
                        </button>
                    </Flex>
                </Flex>
                </form>
            </EmailLabelStyle>
        
    )
}

export default EmailNewsInput;