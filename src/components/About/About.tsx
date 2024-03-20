
import styled from "styled-components";
import BackgroundColor from "../BackgroundColor/BackgroundColor";
import Container from "../Container/Container";
import aboutCookImg1 from '../../img/about-cook-knife1.png';
import aboutCookImg2 from '../../img/about-cook-knife2.png';
import Flex from "../Flex/Flex";
import { AboutAddaptive, TitleStyle, DescStyle,AboutImgStyle } from "./About.styles";




const About = ():JSX.Element=>{

  return(

<AboutAddaptive>
    <BackgroundColor>
        <Container padding="128px">
        <Flex>            
            <AboutImgStyle src={aboutCookImg1} alt={aboutCookImg1}/>
            <Flex flexDirection="column" marginLeft="81px" justifyContent="space-between">
                <TitleStyle>«KnifeTown» - легендарні ножі, що створюють шедеври</TitleStyle>
                <DescStyle>Компанія "KnifeTown"  - ексклюзивний представник професійних кухонних ножів, виготовлених найкращими майстрами Східної Азії із застосуванням передового європейського обладнання та сучасних матеріалів. Вони вирізняються ідеальним балансом і фантастичною гостротою. Поєднують у собі вікові традиції та новітні розробки. Також пропонуємо широкий асортимент супутніх товарів.</DescStyle>
            </Flex>
        </Flex>
            <Flex marginTop="39px">
                <Flex flexDirection="column" justifyContent="space-between" marginRight="80px">
                <TitleStyle className="about__bottom-title--tablet">Ножі «KnifeTown»  - це головний інструмент кухарів і секрет кулінарної майстерності</TitleStyle>
                    <DescStyle>
                    Справжня краса ножа - досконала функціональність і візуальна гармонія. Цей предмет здавна супроводжував людину: від зорі цивілізації до сьогоднішніх днів. Протягом усієї історії людства він був вірним помічником, незамінним інструментом і грізною зброєю. Пропонуємо вироби Hi-end якості за доступними цінами справжнім поціновувачам японських ножів.
                    </DescStyle>
                    <DescStyle>
                    Відмінною рисою нашого інтернет-магазину є унікальні торгові пропозиції, ексклюзивність продукції, незмінно висока якість і вигідні ціни. Здійснюємо продаж елітних японських кухонних ножів для професіоналів і любителів. У великій асортиментній лінійці представлені вироби для різних потреб і будь-якого бюджету - від столових приладів до шеф-ножів.
                    </DescStyle>
                    <TitleStyle className="about__bottom-title--full">Ножі «KnifeTown»  - це головний інструмент кухарів і секрет кулінарної майстерності</TitleStyle>
                </Flex>
                <AboutImgStyle  src={aboutCookImg2} alt={aboutCookImg2} />
            </Flex>
        </Container>
    </BackgroundColor>
</AboutAddaptive>
  )
}

export default About;