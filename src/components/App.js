import React from 'react'
import SearchBar from './SearchBar'
import unsplash from '../../src/api/unsplash'
import ImageList from './ImageList'




class App extends React.Component{


    state={ images:[] }


    onSearchSubmit = async(term)=> {
        const response=await unsplash.get(`/search/photos`, {
            params: { query: term }, //query string params. this will add query to URL eg ?query=value.query is name of our query
            
        })
        // console.log(response.data.results) //array
        this.setState({ images:response.data.results })

    }
    render(){    
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList  images={this.state.images}/>
            </div>
        )
    }

}

export default App