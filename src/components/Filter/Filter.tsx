import styled from "styled-components";

import { ReactComponent as KnifeFilter  } from "../../svg/filter/knife-filter.svg";
import { ReactComponent as SmallKnifeFilter  } from "../../svg/filter/small-knife-filter.svg";
import { ReactComponent as KnifeSharperFilter  } from "../../svg/filter/knife-sharper-filter.svg";
import { ReactComponent as CookFilter  } from "../../svg/filter/cook-filter.svg";

import Container from "../Container/Container";

const FilterWrapStyle = styled.div`

.filter__wrap{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 78px 120px 88px 120px;

  @media screen and (min-width: 320px) and (max-width: 768px){
    padding: 38px 15px 44px 15px;
    grid-template-columns: 1fr 1fr;
    }
  }

`
const FilterItemStyle = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 320px) and (max-width: 768px){
        padding-top: 38px;
        
      }
    }
    &:hover{
        .filter__item-text{
            transition: 0.4s;
            color: #FF0000;
        }
        .filter__item-icon path{
            transition: 0.4s;
            fill: #FF0000;
        }
    }

    .filter__item-text{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        color: grey;
        transition: 0.4s;
        margin-top: 30px;
        text-align: center;
    }
    .filter__item-icon path{
        transition: 0.4s;
    }
`
interface FilterProps{
    selectFoldingKnifes():void;
    selectKnifes():void;
    selectSharpeners():void;
    selectAccessories():void;
}


const Filter: React.FC<FilterProps> = ({selectFoldingKnifes,selectKnifes,selectSharpeners,selectAccessories}): JSX.Element=>{


    return (
        <div style={{ backgroundColor: '#373737'}}>
            <FilterWrapStyle>  
                <Container>
                <div className="filter__wrap">
                    <FilterItemStyle >
                        <KnifeFilter className="filter__item-icon" onClick={selectKnifes}/>
                        <p className="filter__item-text">Кухонні ножі</p>
                    </FilterItemStyle>
                    <FilterItemStyle>
                        <SmallKnifeFilter className="filter__item-icon" onClick={selectFoldingKnifes}/>
                        <p className="filter__item-text">Складні ножі</p>
                    </FilterItemStyle>
                    <FilterItemStyle>
                        <KnifeSharperFilter className="filter__item-icon" onClick={selectSharpeners}/>
                        <p className="filter__item-text">Точилки для ножів</p>
                    </FilterItemStyle>
                    <FilterItemStyle>
                        <CookFilter className="filter__item-icon" onClick={selectAccessories}/>
                        <p className="filter__item-text">Аксесуари для кухні</p>
                    </FilterItemStyle>
                </div>
                </Container>
            </FilterWrapStyle>
            </div>
        
    )
}
export default Filter; 