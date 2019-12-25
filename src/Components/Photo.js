import React from 'react'
import PropTypes from 'prop-types'

// function that handles photos
// takes in posts as props and then formats them into a container from css
// also function will handle a remove request
function Photo(props) {
    const post = props.post 
        return <figure className="figure">
                <img className="photo" src={post.imageLink} alt={post.description}/>
                <figcaption><p>{post.description}</p></figcaption>
                <div className="button-container">
                    <button onClick = {() =>
                        props.onRemovePhoto(post)
                    }>Remove</button>
                </div>
                
        </figure>
}

// for debug purposes
// we are setting conditions for the props we pass in
// the posts we recieve as prop should be an object
// the onRemovePhoto request we recieve as prop should be a function
Photo.propTypes = {
    posts: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}


export default Photo