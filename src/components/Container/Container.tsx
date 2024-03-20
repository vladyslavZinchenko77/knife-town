import styled from "styled-components";

interface ContainerProps {
    children : any;
    padding?: string;
}


const ContainerStyle = styled.div`

margin: 0 auto;
max-width: 1200px;
@media screen and (min-width: 768px) and (max-width: 1200px){
  padding: 0 20px 0 20px;
}
@media screen and (min-width: 320px) and (max-width: 768px){
  padding: 0 15px 0 15px;
  }
}

`

const Container  = ({children, padding}: ContainerProps): JSX.Element=>{
        return(
                
                <ContainerStyle style={{padding: `${padding}`}}>{children}</ContainerStyle>
            
        )
}

export default Container;