import styled from "styled-components";

interface BackgroundColorProps {
    children: any;
    backgroundColor?: string;
}

const BackgroundColorStyle = styled.div<{backgroundColor: string}>`
background-color: ${props => props.backgroundColor};

`

const BackgroundColor = ({children,backgroundColor="#373737"}: BackgroundColorProps):JSX.Element=>{
    return(
        <BackgroundColorStyle backgroundColor={backgroundColor}>{children}</BackgroundColorStyle>
    )
}

export default BackgroundColor;