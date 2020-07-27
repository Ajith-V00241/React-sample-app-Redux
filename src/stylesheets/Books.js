import styled from 'styled-components'
export const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;
    width: 100%;
    padding: 20px;
`

export const AddLink = styled.div`
    margin: 20px 0 20px 0;
    height: 70px;
    a{
        color: #fff;
        background: #000;
        border-radius: 4px;
        border: 1px solid #000;
        padding: 10px 30px;
        text-decoration: none;
        width: 40%;
    }
`
export const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
`
export const BookImage =  styled.div`
    width: 100%;
    img{
        height: 100%;
        width : 100%;
        border: 1px solid #efefef;
    }
`
export const BookTitle= styled.div`
    padding: 10px 0 10px 0;
    font-size: 20px;
`
export const BookAuthor= styled.div`
    padding: 3px 0 3px 0;
    font-size: 15px;
`
export const BookLink= styled.div`
    margin: 15px 0 10px 0;
    height: 50px;
    a{
        color: #fff;
        background: #000;
        border-radius: 4px;
        border: 1px solid #000;
        padding: 10px 30px;
        text-decoration: none;
        width: 50%;
    }
`