import React from 'react'
import {Home} from '../../stylesheets/Books'
import Header from '../../Header'
import {Form, FormText, FormDescription, Submit} from '../../stylesheets/AddBook'
import {connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import {addBook} from '../../actions/actions'
import { Redirect} from 'react-router'
import { Link } from 'react-router-dom'

const AddBook = (props) => {
    const getTitle=React.useRef(null)
    const getAuthor=React.useRef(null)
    const getPublisher=React.useRef(null)
    const getLanguage=React.useRef(null)
    const getDescription=React.useRef(null)
    const getTotalBooks=React.useRef(null)
    const getImage=React.useRef(null)

    
    var data = {}

    //console.log(data)
    const validate=()=>{
        var message = []
        if(data.title==="")
            message.push("title")
        if(data.description === "")
            message.push("description") 
        if(data.author === "")
            message.push("author")   
        if(data.language === "")
            message.push("language")   
        if(data.publisher === "")
            message.push("publisher")   
        if(message.length!==0)
        {
            alert(message.concat()+" can't be blank")
            return false
        }
        else if(!Number.isInteger(data.totalBooks) ||  data.totalBooks <= 0)
        {
            alert("TotalBooks should be a positive integer")
            return false
        }
        else
            return true
    }
    const saveBook=()=>{
         data = {
            title: getTitle.current.value,
            author: getAuthor.current.value,
            publisher: getPublisher.current.value,
            language: getLanguage.current.value,
            description: getDescription.current.value,
            totalBooks: parseInt(getTotalBooks.current.value) || 0,
            image: getImage.current.value || "/assets/bookLogo.jpg"
        }
        if(validate())
        {
            props.addBook(data)
            console.log(data)
            alert("Book has been Added.")
            reset()
        }   
    }
    const reset=()=>{
        data = null
        document.getElementById("title").value=""
        document.getElementById("author").value=""
        document.getElementById("publisher").value=""
        document.getElementById("language").value=""
        document.getElementById("description").value=""
        document.getElementById("totalBooks").value="0"
        document.getElementById("image").value=""   
    }
    const ADDTABLE = ()=>{
        return(
            <div>
                <Header/>
                <Link exact="true" to='/' >Go To Home Page</Link>
                <Form>
                    <br/>
                    <h1>Add New Book</h1>
                    <br/>
                    <div id="errors"> </div>
                    {/* <form > */}
                        <FormText id="title" name="title" ref={getTitle} placeholder="Name" /> <br />
                        <FormText id="author" name="author" ref={getAuthor} placeholder="Author" /> <br />
                        <FormText id="publisher" name="publisher" ref={getPublisher} placeholder="Publisher" /> <br />
                        <FormText id="language" name="language" ref={getLanguage} placeholder="Langauge" /> <br />
                        <FormDescription rows={4} id="description" ref={getDescription} name="description" placeholder="Description" /> <br />
                        <div >Total Books:</div><FormText type="number" ref={getTotalBooks} defaultValue="0" id="totalBooks" name="totalBooks" placeholder="Total Books" /> <br />
                        <FormText id="image" name="image" ref={getImage} placeholder="Image Path" /> <br />
                        <Submit onClick={saveBook}>Add Book</Submit>
                    {/* </form> */}
                </Form>
            </div>
        )
    }
    console.log(props.state)
    return(
        <Home>
            {
                props.state[0].redirect && <Redirect exact to='/' />
            }
            {
                <ADDTABLE />
            }
            
        </Home>
    )
}
const mapStateToProps = (state) => {
    return {
      state : state
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addBook: addBook
    },dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(AddBook)