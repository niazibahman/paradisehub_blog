import css from 'styled-jsx/css';
 
export default css.list`
.container{
    width: 100%;
    height: 100%;
    margin-inline: auto;
    padding: 10px 10px;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    justify-content: space-between;
    gap: 10px;
}
@media only screen and (min-width: 768px) {
    .container{
        max-width: 768px;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media only screen and (min-width: 1024px) {
    .container{
        max-width: 1024px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}
@media only screen and (min-width: 1280px) {
    .container{
        max-width: 1280px;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}
@media only screen and (min-width: 1536px) {
    .container{
        max-width: 1536px;
        grid-template-columns: repeat(5, minmax(0, 1fr));
    }
}
`;