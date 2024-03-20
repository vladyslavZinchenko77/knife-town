
import styled from "styled-components";

interface BlogCardProps {
    url: string;
    date: string;
    text: string;
}

const BlogCardStyle = styled.div<{url:string}>`
width: 380px;
height: 465px;
background-image: url(${props => props.url});
background-repeat: no-repeat;
background-size: cover;
position: relative;
border-radius: 14px ;
&:hover{
    .blog-card__text{
        background-color: #C80000;
        transition: 0.4s;
    }
}
`
const DateStyle = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 2;
color: #FFFFFF;
position: absolute;
top: 23px;
right: 25px;
`
const TextStyle = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 1.41;
color: #FFFFFF;
position:relative;
top: 382px;
padding: 13px 39px 22px 33px;
transition: 0.4s;
border-radius: 0 0 14px 14px;
`
const BlogCard = ({url,date,text}: BlogCardProps): JSX.Element =>{
    return(
        <a href="#" style={{textDecoration:'none'}}>
            <BlogCardStyle url={url}>
                <DateStyle className="blog-card__date">{date}</DateStyle> 
                <TextStyle className="blog-card__text">{text}</TextStyle> 
           </BlogCardStyle>
        </a>
    )
}

export default BlogCard;