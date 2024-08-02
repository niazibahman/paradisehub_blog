import css from 'styled-jsx/css';
 
export default css.detail`
.container{
    width: 100%;
    margin-inline: auto;
    align-content: center;
    border-radius: 2px;
    margin-top: 10px;
    padding: 10px;
    background-color: var(--white);
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.5);
}
@media only screen and (min-width: 768px) {
    .container{
        max-width: 768px;
    }
}

@media only screen and (min-width: 1024px) {
    .container{
        max-width: 1024px;
    }
}
@media only screen and (min-width: 1280px) {
    .container{
        max-width: 1280px;
    }
}
@media only screen and (min-width: 1536px) {
    .container{
        max-width: 1536px;
    }
}
`;