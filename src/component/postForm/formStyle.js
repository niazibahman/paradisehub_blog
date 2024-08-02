import css from 'styled-jsx/css';
 
export default css.form`
.container{
    width: 100%;
    max-width: 800px;
    height: 100%;
    margin-inline: auto;
    margin-top: 10px;
    padding: 10px;
    border-radius: 2px;
    background-color: var(--white);
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.5);
}
.error{
    width: 100%;
    display: block;
    font-weight: 300;
    font-size: 12px;
    color: red;
}

`;