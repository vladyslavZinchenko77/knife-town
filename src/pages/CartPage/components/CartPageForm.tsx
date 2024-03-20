
import styled from "styled-components";
import Button from "../../../components/Button/Button";




const CartPageFormStyle = styled.div`
margin-top: 30px;
`

const CartTitleFormStyle = styled.h2`
font-family: 'Jura';
font-weight: 500;
font-size: 24px;
line-height: 28px;
text-transform: uppercase;
color: #FFFFFF;
`

const FormCartStyle = styled.form`
background-color: #232323;
border-radius: 15px;
padding: 60px 20px;


`
const InputGroupStyle = styled.div`
display: flex;
flex-direction: column;
@media screen and (max-width: 768px){
    margin: 0 auto;
    justify-content: center;
}
`
const FormContentStyle = styled.div`
display: flex;
align-items: flex-end;
margin-top: 30px;

@media screen and (max-width: 768px){
    flex-wrap: wrap;
}
`

const InputStyle = styled.input`
  max-width: 334px;
  min-width: 260px;
  margin-top: 30px;
  border: none;
  background-color: transparent;
  padding: 38px 18px;
  background-color: #303030;
  border-radius: 5px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
`
const InputLabelStyle = styled.label`
  color: #adacac;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 8px;
`
const SubmitGroup = styled.div`
margin-left: 40px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 1.4;
color: #ADACAC;
@media screen and (max-width: 768px){
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
}
`


const CartPageForm = () =>{
    return(
            <CartPageFormStyle>
                
                <FormCartStyle>
                <CartTitleFormStyle>Для підтвердження замовлення - введіть ваші дані і ми передзвонимо вам</CartTitleFormStyle>
                <FormContentStyle>
                    <InputGroupStyle>
                    <div style={{position: 'relative'}}>
                        <InputLabelStyle style={{position: 'absolute', top: '45px', left:'18px'}}>Отримувач</InputLabelStyle>
                        <InputStyle  type="text" placeholder="Ім'я Прізвище" />
                        <div style={{ height: '2px', backgroundColor: '#828282', position: 'absolute', top: '95px', left: '15px', right: '15px' }}></div>
                    </div>
                    <div style={{position: 'relative'}}>
                        <InputLabelStyle style={{position: 'absolute', top: '45px', left:'18px'}}>Мобільний телефон</InputLabelStyle>
                        <InputStyle type="tel" placeholder="+38 (___) ___-__-__" />
                        <div style={{ height: '2px', backgroundColor: '#828282', position: 'absolute', top: '95px', left: '15px', right: '15px' }}></div>
                    </div>
                    <div  style={{position: 'relative'}}>
                        <InputLabelStyle style={{position: 'absolute', top: '45px', left:'18px'}}>Email</InputLabelStyle>
                        <InputStyle type="email" placeholder="Ваша ел. пошта" />
                        <div style={{ height: '3px', backgroundColor: '#828282', position: 'absolute', top: '95px', left: '15px', right: '15px' }}></div>
                    </div>
                    </InputGroupStyle>
                    <SubmitGroup>
                        <p>Натискаючи "Вибрати спосіб доставки", підтверджую, що я ознайомлений з умовами <a style={{color: 'red'}} href="#"> Публічного договору оферти та Політикою конфіденційності</a>, а також згоден отримувати інформаційну розсилку</p>
                        <Button margin="15px 0 0 0" >Надіслати форму</Button >
                    </SubmitGroup>
                </FormContentStyle>
                </FormCartStyle>
            </CartPageFormStyle>
    )
}

export default CartPageForm;