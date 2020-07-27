import React, { useEffect} from 'react';
import Header from '../../Header'
import BookThumbnail from './BookThumbnail'
import  {Home, Grid, AddLink} from '../../stylesheets/Books'
import './BookThumbnail'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import {getBooks} from '../../actions/actions'
import DataService from '../../services/Dataservice'


const Books = (props)=>{   
    useEffect(()=>{
        console.log("BOOKS PROPS")
        console.log(props)
            DataService.getAll()
                .then(resp=>{

                    if(props.books[0].completed === false){
                        //setBooks(resp.data.data)
                        props.getBooks(resp.data.data)
                    }
                })
                .catch(err=>console.log(err))
    })
    // eslint-disable-next-line array-callback-return
    const booklist = props.books.map(item => {
        //props.getBooks(books)
        if(props.books.indexOf(item)!==0)
            return (
                <BookThumbnail 
                key={item.attributes.id}
                attributes={item.attributes}/>
            )
    })

    return(
        <Home>
            <Header/>
                <AddLink>
                    <Link to={`/books/new`} >Add new Book</Link>
                </AddLink>
            <Grid>
                {booklist}
            </Grid>
        </Home>
    )
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getBooks: getBooks
    },dispatch);
}
const mapStateToProps = (state) => {
    return {
        books: state
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Books)