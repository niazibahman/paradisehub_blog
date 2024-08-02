import css from 'styled-jsx/css';
 
export default css.pagination`
.pagination{
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-content: center;
    justify-content: center;
}
.pagination-item{
    border-style: solid;
    border-width: 2px;
    border-color: var(--blue);
    border-radius: 2px;
    width: 32px;
    height: 32px;
    margin: 0 10px;
    align-content: center;
    justify-content: center;
    color: var(--blue);
    background-color: var(--white);
}
.pagination-item:hover{
    cursor: pointer;
    color: var(--white);
    background-color: var(--blue);
}
.pagination-item:focus{
    color: var(--white);
    background-color: var(--blue);
}

.pagination-item-active{
    border-style: solid;
    border-width: 2px;
    border-color: var(--blue);
    border-radius: 2px;
    width: 32px;
    height: 32px;
    margin: 0 10px;
    align-content: center;
    justify-content: center;
    color: var(--white);
    background-color: var(--blue);
}
.pagination-item-active:hover{
    cursor: pointer;
    color: var(--blue);
    background-color: var(--white);
}
.pagination-item-active:focus{
    color: var(--blue);
    background-color: var(--white);
}
`;