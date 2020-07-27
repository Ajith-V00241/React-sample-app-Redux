import Styled from 'styled-components'
export const Image = Styled.div`
    text-align: center;
    margin: 40px 0 30px 0;
    img {
        height: 300px;
        width: auto;
        border: 1px solid #efefef
    }
`
export const BookTable = Styled.div`
    font-size: 20px;
    padding: 30px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    background: #efefef;
    tr{
        padding: 20px;
    }
`
export const LeftColumn = Styled.td`
    width: 20%;
    font-weight: bold;
`
export const EditLink = Styled.div`
    margin: 20px 0 0px 0;
    height: 50px;
    a{
        color: #fff;
        font-size: 16px;
        background: #000;
        border-radius: 4px;
        border: 1px solid #000;
        padding: 10px 30px;
        text-decoration: none;
    }
`
export const DeleteButton = Styled.button`
    color: #fff;
    font-size: 16px;
    background: #000;
    border-radius: 4px;
    border: 1px solid #000;
    padding: 10px 30px;
    width: 150px;
`