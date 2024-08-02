import css from 'styled-jsx/css';
 
export default css.card`
.card{
    grid-column: span 1;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    background-color: var(--white);
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.5);
}
.card-header{
    Height: 50px;
    text-align: left;
}
.card-body{
    background: linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,255,255,1));
    Height: 50px;
    overflow: hidden;
    text-align: justify;
    margin-top: 10px;
}
`;