import React from 'react'
import {Home} from '../../stylesheets/Books'
import Header from '../../Header'
import {Image, DeleteButton, EditLink} from '../../stylesheets/Book'
import BookTable from './BookTable'
import {connect} from 'react-redux'
import DataService from '../../services/Dataservice'
import { bindActionCreators} from 'redux'
import {getBooks, deleteBook} from '../../actions/actions'
import { Redirect} from 'react-router'
import {Link} from 'react-router-dom'

function Book(props){
    
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
    function deleteBook()
    {  
        //alert("delete?")
        //DataService.delete()
        DataService.delete(props.match.params.id)
            .then(resp=> {
                console.log(resp)
                props.deleteBook(props.match.params.id)
                alert("Book Deleted")
            })
            .catch(e=>console.log(e))

    }

    let book = props.books.find(book=>{return book.id === props.match.params.id})
    //console.log(book)
    return(
        <Home>
            {
                !book && <Redirect exact to="/"/>
            }
            {   book &&
                <div>
                    {
                        <div>
                            <Header/>
                            <Image>
                                <img src={book.attributes.image}alt="i"/>
                            </Image>
                            <BookTable attributes={book.attributes}/>
                            <div>
                                <DeleteButton onClick={deleteBook}>Delete Book</DeleteButton>
                            </div>
                            <EditLink>
                                <Link exact="true" to={`/books/${props.match.params.id}/edit`} >Edit Book</Link>
                            </EditLink>
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
        deleteBook: deleteBook
    },dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Book)