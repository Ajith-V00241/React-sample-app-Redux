import React from 'react'
import styled from 'styled-components'

const Head = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    h1{
        font-size: 42px;
    }
`
const SubHead = styled.div`
    font-weight:300;
    font-size: 30px;
`
function Header(){
    return(
        <Head>
            <h1> Library Management System </h1>
            <SubHead>Your Book, Your Mind </SubHead>
            
        </Head>
    )
}

export default Header