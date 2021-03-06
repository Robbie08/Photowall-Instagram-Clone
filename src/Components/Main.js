import React, { Component } from 'react'
import Title from './Title'
import Photowall from './Photowall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'

// main class
class Main extends Component {
    constructor(){
        super()
        this.state = {
            posts : [{
                id: 0,
                description: "beautiful landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                "3919321_1443393332_n.jpg"
                }, {
                id: 1,
                description: "Aliens???",
                imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
                "08323785_735653395_n.jpg"
                }, {
                id: 2,
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
                }],

        }
        
        // we need to bind to our setState methods
        this.removePhoto = this.removePhoto.bind(this)

    }


    removePhoto(postRemoved){
        console.log(postRemoved.description)
        this.setState((state) => ({
            // filtering out array and returning updated state of this post property
            posts:  state.posts.filter(post => post !== postRemoved)
        }))
    }

    // function that will take in a postSubmitted as prop, then will
    // concatonate the new object into our old list of posts(objects)
    addPhoto(postSubmitted){
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }))
    }


    // lifecycle method that gets executed after everything gets inserted into DOM 
    componentDidMount(){}
    

    // lifecycle method that gets executed after re-render
    componentDidUpdate(prevProps,prevState){
        console.log(prevState.posts)
        console.log(this.state)
    }


    render(){
        console.log(this.state.posts) // log the current posts
        return(
            <div>
                {/*if the url has '/' then we must render the home page UI*/}
                <Route exact path ="/" render={() => (
                    <div>
                        <Title title={"Photowall"}></Title>
                        <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate}/> 
                    </div>
                )}/>

                 {/*if the url has the /AddPhoto path then we must render the addPhoto UI  */}
                <Route path="/AddPhoto" render={({history}) => (
                        <AddPhoto onAddPhoto={(addedPost) => {
                            this.addPhoto(addedPost)
                            history.push('/')
                        }}/>
                )}/>
            </div>

        )
    }
}



export default Main