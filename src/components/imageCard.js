import React from 'react'

class ImageCard extends React.Component {
    constructor(props){
        super(props)
        this.imageRef=React.createRef()
        this.state={ span:0 } 
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans) 

    }


     //we want this to refer to class
    setSpans=()=>{ 
        console.log(this)
        const height=this.imageRef.current.clientHeight//image height
        const spans=Math.ceil(height/10+1) 

        this.setState({spans:spans})
    }


    render() {
        const {description,urls}=this.props.image
        return (
            <div style={ {gridRowEnd:`span ${this.state.spans}`} }>
               <img 
                  ref={this.imageRef}
                  src={urls.regular}
                  alt={description} />
            </div>
        )
    }
}


export default ImageCard