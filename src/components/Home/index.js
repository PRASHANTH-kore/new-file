import React, {Component} from 'react'
import BlogItem from '../BlogItem'
import {TailSpin} from 'react-loader-spinner'
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component{

    state={
        isRendering:true,
        blogData:[]
        
    }

    componentDidMount=()=>{
        this.getData()
    }

    getData=async()=>{

        const response=await fetch('https://jsonplaceholder.typicode.com/todos')
        const data=await response.json()
        console.log(data)
        if (response.ok===true){
            this.setState({blogData:data,isRendering:false})
        }else{
            this.setState({isRendering:false})
        }
    }

  
    render(){
        const {isRendering,blogData}=this.state
        return(
            <div className="app-container">
                {isRendering? (<TailSpin/>
                    /* <Loader type="TailSpin" color="#00BFFF" height={50} width={50} /> */):(
                    blogData.map(eachdata=>(
                        <BlogItem key={eachdata.id} details={eachdata}/>
                    ))
                )}

            </div>
        )
            

            
        }
    
}
export default Home