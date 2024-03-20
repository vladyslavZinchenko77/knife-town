
import styled from "styled-components"

interface FlexProps {
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    margin?: string;
    marginTop?: string;
    marginLeft?: string;
    marginBottom?: string;
    marginRight?: string;
    style?: string;
    children?: any;
    className?: string;
    flexWrap?: string;
    gap?: string;
  }

const FlexStyled = styled.div<FlexProps>`
display: flex;
justify-content: ${props => props.justifyContent};
align-items: ${props => props.alignItems};
flex-direction: ${props => props.flexDirection};
margin: ${props => props.margin};
margin-top: ${props => props.marginTop};
margin-left: ${props => props.marginLeft};
margin-bottom: ${props => props.marginBottom};
margin-right: ${props => props.marginRight};
flex-wrap: ${props => props.flexWrap};
gap: ${props => props.gap};
`
const Flex: React.FC<FlexProps> = ({children,justifyContent,alignItems,flexDirection, marginLeft,marginRight,marginTop,marginBottom,margin, style, className,flexWrap,gap}) =>{

    return(
        <FlexStyled className={className} style={style} justifyContent={justifyContent} alignItems={alignItems } flexDirection={flexDirection} marginLeft={marginLeft} marginRight={marginRight} marginTop={marginTop} marginBottom={marginBottom} margin={margin} flexWrap={flexWrap} gap={gap}>
            {children}
        </FlexStyled> 

    )
}


export default Flex;