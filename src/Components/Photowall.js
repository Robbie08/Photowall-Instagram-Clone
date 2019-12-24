import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
// anchor tag, href attribute
function Photowall(props){
    return <div>

            <Link className="addIcon"  to="/AddPhoto">+</Link>
            <div className="photo-grid">
                {props.posts
                .sort(function(x,y){
                    return y.id - x.id // sort in decending order
                })
                .map((post,index) => <Photo key={index} post={post} onRemovePhoto = {props.onRemovePhoto}/>)}
            </div>
    </div>
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired ,
    onRemovePhoto: PropTypes.func.isRequired
}
export default Photowall