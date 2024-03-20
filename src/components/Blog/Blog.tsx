import styled from "styled-components";
import BlogCard from "./components/BlogCard/BlogCard";
import Container from "../Container/Container";
import BackgroundColor from "../BackgroundColor/BackgroundColor";
import blogCookKnifeInImg1 from '../../img/blog-cook-knife1.png';
import blogCookKnifeInImg2 from '../../img/blog-cook-knife2.png';
import blogCookKnifeInImg3 from '../../img/blog-cook-knife3.png';
import Flex from "../Flex/Flex";


const BlogVisiable = styled.div`

@media screen and (max-width: 768px){
    display: none;
  }
`




const Blog = (): JSX.Element =>{

    return(

            <BackgroundColor>
                <Container padding="0 0 60px 0">
               <BlogVisiable >
                    <Flex gap="28px" flexWrap="wrap" justifyContent="center">
                        <BlogCard url={blogCookKnifeInImg1} date="4 серпня 2021 19:24" text="Традиційні види японських кухонних ножів"/>
                        <BlogCard url={blogCookKnifeInImg2} date="27 серпня 2021 19:24" text="Всесвітня історія ріжучих клинків - погляд у минуле"/>
                        <BlogCard url={blogCookKnifeInImg3} date="5 вересня2021 19:24" text="Як доглядати за японськими кухонними ножами?"/>
                    </Flex>
                </BlogVisiable>
                </Container>
            </BackgroundColor>

    )

}

export default Blog;