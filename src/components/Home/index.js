import React, {Component} from 'react'
import BlogItem from '../BlogItem'
import {TailSpin} from 'react-loader-spinner'
import "./index.css"
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component{

    state={
        isRendering:true,
        blogData:[],
       currentPage:1,
        postPerPage:20,
        
    }

    componentDidMount=()=>{
        this.getData()
    }

    getData=async()=>{

        const response=await fetch('https://jsonplaceholder.typicode.com/todos')
        const data=await response.json()
       // console.log(data)
        if (response.ok===true){
            this.setState({blogData:data,isRendering:false})
        }else{
            this.setState({isRendering:false})
        }
    }

   

    onClickNext=()=>{
        const{blogData,currentPage,postPerPage}=this.state
        const len=blogData.length
        if ((currentPage*postPerPage)<len){
            this.setState(prevState=>({currentPage:prevState.currentPage+1}))

        }
        
    }

    onClickPrev=()=>{
        const{currentPage}=this.state

        if (currentPage>1){
            this.setState(prevState=>({currentPage:prevState.currentPage-1}))

        }
        
    }

  
    render(){
        const {isRendering,blogData,currentPage,postPerPage}=this.state
        const indexOfFirst=currentPage*postPerPage;
        console.log(indexOfFirst)
        const indexOfLast=indexOfFirst-postPerPage;
        console.log(indexOfLast)
        const currentBlog=blogData.slice(indexOfLast,indexOfFirst)
        console.log(currentBlog)
        console.log(blogData)


        return(
            <div className='big-container'>
            <div className="app-container">
               
                {isRendering? (<TailSpin/>
                    /* <Loader type="TailSpin" color="#00BFFF" height={50} width={50} /> */):(
                    currentBlog.map(eachdata=>(
                        <BlogItem key={eachdata.id} details={eachdata}/>
                    ))
                )}
               
            </div>
           
            <button  className="m-4 btn btn-primary" type="button" onClick={this.onClickPrev}>prev</button>
            <button  className="m-4 btn btn-primary " type="button" onClick={this.onClickNext}>next</button>
            </div>
        )
            

            
        }
    
}
export default Home