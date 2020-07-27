import React from 'react'
import { Link} from 'react-router-dom' 
import * as Thumbnail from '../../stylesheets/Books'

function BookThumbnail(props){

    const src_string = `${props.attributes.image}`
    //console.log("BOOKTHUMBNAIL PROPS")
    //console.log(props)
    return(
        
       <Thumbnail.Card>
           <Thumbnail.BookImage>
                <img src={src_string} alt={props.attributes.title} /> 
           </Thumbnail.BookImage>
           <Thumbnail.BookTitle>{props.attributes.title}</Thumbnail.BookTitle>
           <Thumbnail.BookAuthor>{props.attributes.author}</Thumbnail.BookAuthor>
           <Thumbnail.BookLink>
               <Link to={`/books/${props.attributes.id}`}>View Book</Link>
           </Thumbnail.BookLink>
        </Thumbnail.Card>
    )
}
export default BookThumbnail