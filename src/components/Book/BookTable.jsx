import React from 'react'
import Styled from 'styled-components'
    const Table = Styled.div`
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
    const LeftColumn = Styled.td`
        width: 20%;
        font-weight: bold;
    `
function BookTable(props){
    
    // eslint-disable-next-line array-callback-return
    const RowsList = Object.entries(props.attributes).map((item)=>{
        //console.log(key)
        if(item[0] !== "id")
            return(
                <tr key={item[0]}>
                    <LeftColumn>{item[0]}</LeftColumn>
                    <td> : </td>
                    <td>{item[1]}</td>
                </tr>
            )
    })
    //console.log(props.attributes)
    return(
        <Table>
            <table>
                <tbody>
                    {
                        RowsList
                    }
                   {/* <tr>
                        <LeftColumn>Title</LeftColumn>
                        <td> : </td>
                        <td>{props.attributes.title}</td>
                    </tr>
                    <tr>
                        <LeftColumn>Author</LeftColumn>
                        <td> : </td>
                        <td>{props.attributes.author}</td>
                    </tr>
                    <tr>
                        <LeftColumn>Publisher</LeftColumn>
                        <td> : </td>
                        <td>{props.attributes</td>
                    </tr>
                    <tr>
                        <LeftColumn>Language</LeftColumn>
                        <td> : </td>
                        <td></td>
                    </tr>
                    <tr>
                        <LeftColumn>Description</LeftColumn>
                        <td> : </td>
                        <td></td>
                    </tr>
                    <tr>
                        <LeftColumn>Total Books</LeftColumn>
                        <td> : </td>
                        <td></td>
                    </tr>
                    <tr>
                        <LeftColumn>Available Books</LeftColumn>
                        <td> : </td>
                        <td></td>
                        </tr>*/}
                </tbody>
            </table>
        </Table>
    )
}

export default BookTable