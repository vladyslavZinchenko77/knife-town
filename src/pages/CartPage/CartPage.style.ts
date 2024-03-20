import styled from "styled-components";


export const TittleWrapStyle = styled.div`
padding-top: 100px;
display: flex;
justify-content: center;
position: relative;
.go-home__link{
    position: absolute;
    left: 20px;
    bottom: 10px;
    .go-home__link-arrow{
        transform: translateX(0)
    }
    &:hover{
        .go-home__link-arrow{
            animation: arrow 1s infinite;
        }
        @keyframes arrow{
            from{
                transform: translateX(0);
                opacity: 1;
            }to{
                transform: translateX(-10px);
                opacity: 0;
            }
        }
    }
}

`
export const TitleStyle = styled.p`
font-family: 'Jura';
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 1.2;
text-transform: uppercase;
color: #FFFFFF;

`
export const LinkToHomeWrapStyle = styled.div`
position: absolute;
`

export const TextLinkToHomeStyle = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 1.4;
color: #ADACAC;
`

export const TotalPriceStyle = styled.div`
background-color: #232323;
display: flex;
flex-direction: column;
align-items: flex-end;
padding: 26px 26px 26px 0;
border-radius: 0 0 15px 15px;
.total__title{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #ADACAC;
}
.total__price{
    font-family: 'Jura';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    color: #FFFFFF;
}
`

export const CartIsFullText = styled.h2`
font-family: 'Jura';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 1.2;
text-transform: uppercase;
color: #FFFFFF;
text-align: center;
padding: 15px 0 15px 0;
background-color: #303030;
` 