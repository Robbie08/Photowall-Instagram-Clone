import React from 'react'
import PropTypes from 'prop-types'
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
Photo.propTypes = {
    posts: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}


export default Photo