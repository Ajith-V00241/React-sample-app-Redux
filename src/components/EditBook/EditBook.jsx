import React from 'react'
import {Home} from '../../stylesheets/Books'
import Header from '../../Header'
import {Form, FormText, FormDescription, Submit} from '../../stylesheets/AddBook'
import {Table, Title, Content} from '../../stylesheets/EditBook'
import {connect} from 'react-redux'
import DataService from '../../services/Dataservice'
import { bindActionCreators} from 'redux'
import {getBooks, updateBook} from '../../actions/actions'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

var data={}
function EditBook(props){
    const getTitle=React.useRef(null)
    const getAuthor=React.useRef(null)
    const getPublisher=React.useRef(null)
    const getLanguage=React.useRef(null)
    const getDescription=React.useRef(null)
    const getTotalBooks=React.useRef(null)
    const getAvailableBooks=React.useRef(null)
    const getImage=React.useRef(null)
    React.useEffect(()=>{
        //console.log("BOOKS PROPS")
        //console.log(props)
            DataService.getAll()
                .then(resp=>{
                    if(props.books[0].completed === false){
                        //setBooks(resp.data.data)
                        props.getBooks(resp.data.data)
                    }
                })
                .catch(err=>console.log(err))
    })
    //console.log(props)
    let book = props.books.find(book=>{return book.id === props.match.params.id})
    //console.log(book)
    const validate=()=>{
        if(data.availableBooks > data.totalBooks)
        {
            alert("Available Books should not be greater than Total Books")
            return false
        }
        //console.log("Book:"+book)
        return true
    }
    const saveBook =()=>{
        //console.log(book)
        //console.log(document.getElementById('title').value==="")
        //console.log(book)
        data={
            title: getTitle.current.value!=="" ? getTitle.current.value : book.attributes.title,
            author: getAuthor.current.value!=="" ? getAuthor.current.value : book.attributes.author,
            publisher: getPublisher.current.value!=="" ? getPublisher.current.value : book.attributes.publisher,
            language: getLanguage.current.value!=="" ? getLanguage.current.value : book.attributes.language,
            description: getDescription.current.value!=="" ? getDescription.current.value : book.attributes.description,
            totalBooks: getTotalBooks.current.value!=="" ? getTotalBooks.current.value : book.attributes.totalBooks,
            availableBooks: getAvailableBooks.current.value!=="" ? getAvailableBooks.current.value : book.attributes.availableBooks,
            image: getImage.current.value!=="" ? getImage.current.value : book.attributes.image,
        }
        if(validate()){
            console.log(data)
            DataService.update(data, props.match.params.id)
                .then(resp=>{
                    console.log(resp)
                    alert("Book has been Updated")
                    props.updateBook(data, props.match.params.id)
                    book=null
                })
                .catch(err=>{console.log(err)})
        }
    }
    return(
        <Home>
            {
                <div>
                    {
                        !book && <Redirect exact="true" to="/"/>
                    }
                    {   book &&
                        <div>
                            <Header />
                            <Link exact="true" to='/' >Go To Home Page</Link>
                            <Form>
                                <br/>
                                <h1>Edit Book</h1>
                                <br/>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <Title>
                                                <label >Title:</label>
                                            </Title>
                                            <Content>
                                                <FormText id="title" name="title" placeholder="Name" defaultValue={book.attributes.title} ref={getTitle} /> <br />
                                            </Content>
                                        </tr>
                                        <tr>
                                            <Title>
                                                <label >Author:</label>
                                            </Title>
                                            <Content>
                                                <FormText id="author" name="author" placeholder="Author" defaultValue={book.attributes.author} ref={getAuthor} /> <br />   
                                            </Content>
                                        </tr>
                                        <tr>
                                            <Title>
                                                <label >Publisher:</label>
                                            </Title>
                                            <Content>
                                                <FormText id="publisher" name="publisher" placeholder="Publisher" defaultValue={book.attributes.publisher} ref={getPublisher} /> <br />
                                            </Content>
                                        </tr>
                                        <tr>
                                            <Title>
                                                <label >Langaue:</label>
                                            </Title>
                                            <Content>
                                                <FormText id="language" name="language" placeholder="Langauge" defaultValue={book.attributes.language} ref={getLanguage} /> <br />
                                            </Content>
                                        </tr>
                                        <tr>
                                            <Title>
                                                <label >Description:</label>
                                            </Title>
                                            <Content>
                                                <FormDescription rows={4} id="description" name="description" placeholder="Description" defaultValue={book.attributes.description} ref={getDescription} /> <br />
                                            </Content>
                                        </tr>
                                        <tr>
                                            <Title>
                                                <label >Total Books:</label>
                                            </Title>
                                            <Content>
                                                <FormText type="number" defaultValue={book.attributes.totalBooks} id="totalBooks" name="totalBooks" placeholder="Total Books"  ref={getTotalBooks}/> <br />
                                            </Content>
                                        </tr>
                                        <tr>
                                            <Title>
                                                <label >Available Books:</label>
                                            </Title>
                                            <Content>
                                                <FormText type="number" defaultValue={book.attributes.availableBooks} id="availableBooks" name="availableBooks" placeholder="Available Books"  ref={getAvailableBooks}/> <br />
                                            </Content>
                                        </tr>
                                        <tr>
                                            <Title>
                                                <label >Image Path:</label>
                                            </Title>
                                            <Content>
                                                <FormText id="image" name="image" placeholder="Image Path" defaultValue={book.attributes.image} ref={getImage} /> <br />
                                            </Content>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Submit onClick={saveBook} >Add Book</Submit>
                            </Form>
                        </div>
                    }
                </div>
            }
        </Home>
    )
}

const mapStateToProps = (state) => {
    return {
        books: state
    }
} 
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getBooks: getBooks,
        updateBook: updateBook
        
    },dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(EditBook)