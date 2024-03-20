import styled from "styled-components";
import { ReactComponent as LocationIcon } from "../../../svg/map.svg";
import { ReactComponent as Card } from "../../../svg/card.svg";
import Flex from "../../../components/Flex/Flex";

const PayWrapperStyle = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 30px;
.delivery{

}
.pay{
    margin-left:30px;
    @media screen and (max-width: 768px){
        margin: 30px 0 0 0;
    }
}
`

const PayTitleStyle = styled.div`
width: 83px;
font-family: 'Jura';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
opacity: 0.5;
cursor: pointer;
position: relative;
transition: 0.4s;
&:hover{
    opacity: 1;
    transition: 0.4s;
}
&:after {
	display: block;
	position: absolute;
    top: 24px;
	left: 0; 
	width: 0;
	height: 4px; 
	background-color: #C80000; 
	content: "";
	transition: width 0.4s ease-out; 
}
&:hover:after,
&:focus:after {
	width: 100%; 
}
`
const PayTextStyle = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 1.4;
color: #ADACAC;
padding-top: 8px;
`

const Pay = () =>{

    return(
        <PayWrapperStyle className="delivery" >
                <Flex>
                    <LocationIcon style={{padding:'25px 28px 25px 28px', backgroundColor: '#232323',borderRadius: '15px'}}/>
                    <Flex flexDirection="column" marginLeft="15px">
                        <PayTitleStyle>Доставка</PayTitleStyle>
                        <PayTextStyle>Київ, 25.10 безкоштовно</PayTextStyle>
                    </Flex>
                </Flex>
                <Flex className="pay">
                    <Card style={{padding:'18px 22px 20px 22px', backgroundColor: '#232323',borderRadius: '15px'}}/>
                    <Flex  flexDirection="column" marginLeft="15px">
                        <PayTitleStyle>Оплата</PayTitleStyle>
                        <PayTextStyle>Найзручніший для Вас: Карткою на сайті</PayTextStyle>
                    </Flex>
                </Flex>
            </PayWrapperStyle>
    )
}

export default Pay;