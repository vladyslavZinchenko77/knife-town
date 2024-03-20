import styled from "styled-components"


export const ProductBackStyle = styled.div`
background-color: #373737;
`
export const ProductPosterStyle = styled.div<{url: string}>`
    width: 590px;
    height: 481px;
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
.products__first-poster-title{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 1.65;
    color: #FFFFFF;
    position: absolute;
    left: 26px;
    bottom: 28px;
}
`
export const ProductInstagramStyle = styled.div<{url: string}>`
    
    border-radius: 14px;
    width: 286px;
    height: 412px;
    cursor: pointer;
    position: relative;
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
.products__first-instagrm--wrapper{
    display: flex;
    position: absolute;
    top: 37px;
    right: 31px;
    .products__first-instagrm--title{
        text-transform: uppercase;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 17px;
        line-height: 1.65;
        color: #FFFFFF;
        margin-left: 18px;
    }
}

`

export const ProductsFirstStyle = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 18px;
`

export const ProductTitleBtnStyle = styled.button`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 17px;
text-transform: uppercase;
color: #FFFFFF;
opacity: 0.5;
background-color: rgb(0,0,0,0);
cursor: pointer;
border: none;
box-shadow: none;
padding: 0;
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
export const EmailInputMobileWrap = styled.div`
@media screen and (max-width: 767px){
    display: block;
  }
  @media screen and (min-width: 768px){
    display:none;
    }
  }
`
export const EmailInputFullScreeneWrap = styled.div`
@media screen and (max-width: 767px){
    display:none;
  }
  @media screen and (min-width: 768px){
    display: block;
    }
  }
`