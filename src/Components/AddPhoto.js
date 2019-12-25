import React, {Component} from 'react'

class AddPhoto extends Component{

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    // function that will take in prop as event
    // then this function will grab the data from the link and description
    // and then store it into an object
    handleSubmit(event){
        event.preventDefault()
        const imageLink = event.target.elements.Link.value
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink,
        }
        if(description && imageLink){
            this.props.onAddPhoto(post)
        }
    }
    render(){
        return (
            <div>
                <h1>Photowall</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="Link"/>
                        <input type="text" placeholder="Description" name="description"/>
                        <button>Post</button>
                    </form>
                </div>

            </div>

        )
    }
}

export default AddPhoto