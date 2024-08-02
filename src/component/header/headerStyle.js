import css from 'styled-jsx/css';
 
export default css.header`
header{
    width: 100%;
    height: 50px;
    background-color: var(--white);
    box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.15);
}
.header-container{
    width: 100%;
    height: 100%;
    margin-inline: auto;
}
ul{
    margin-top: 0px;
    padding-inline-start: 0px;
    list-style-type: none;
    display: flex;
    align-content: center;
}
.nav-item{
    height: 100%;
    margin-right: 8px;
    align-content: center;
    justify-content: center;
}
.nav-item:hover{
    cursor: pointer;
}
@media only screen and (min-width: 768px) {
    .header-container{
        max-width: 768px;
    }
}

@media only screen and (min-width: 1024px) {
    .header-container{
        max-width: 1024px;
    }
}
@media only screen and (min-width: 1280px) {
    .header-container{
        max-width: 1280px;
    }
}
@media only screen and (min-width: 1536px) {
    .header-container{
        max-width: 1536px;
    }
}
`;