import React from "react";
import './App.css';
import Car from './Car.js';
import {Row,
        Col,
        Modal,
        Button
} from "react-bootstrap";
import axios from "axios";
const apiUrl="http://ec2-3-88-109-250.compute-1.amazonaws.com/api"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem('state')) || {
      title:[], 
      photo:[],
      description:[],
      short_description:[]
    }
    this.lookForCar = this.lookForCar.bind(this);
    this.goTo= this.goTo.bind(this);
    this.reload= this.reload.bind(this);
  }

  setState(state) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }


  reload() {
    this.setState({ 
      title:  [], 
      photo:  [], 
      description:  [], 
      short_description:  '', 
    })
  }

  goTo (title, photo, description,  short_description) {
    console.log("Go to")
    this.props.history.push(   '/Car',{ title:title ,photo:photo,description:   description,short_description: short_description});
  }
  


onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {

  if (event.key === 'Enter') {
    event.preventDefault();
    event.stopPropagation();
    this.lookForCar();
  }
}

  lookForCar(i){
    var test=''
    var inputVal = document.getElementById("search"); 
      if(inputVal != null){

        this.reload()
        axios.get(apiUrl+"/search", {headers:{ Title: inputVal.value}})
        .then(data =>{console.log(data.data.data)
      
          data.data.data.forEach(element => 
            this.setState({ 
              title:   [...this.state.title, element.Title], 
              photo:   [...this.state.photo, element.Photo], 
              description:  [...this.state.description, element.Description], 
              short_description:   [...this.state.short_description, element.Short_Description], 
            })
            );

        localStorage.setItem('title_test', data.data.data[0].Title); 
        test= data.data.data[0] 
      } )
      }
      else{ axios.get(apiUrl+"/search", {headers:{ Title: i}})
      .then(data =>{console.log(data.data.data[0])
        data.data.data.forEach(element => 
          this.setState({ 
            title:   [...this.state.title, element.Title], 
            photo:   [...this.state.photo, element.Photo], 
            description:  [...this.state.description, element.Description], 
            short_description:   [...this.state.short_description, element.Short_Description], 
          })
          );


     
      localStorage.setItem('title_test', data.data.data[0].Title); 
      test= data.data.data[0].title 
      })}
      return test
  }




render(){
  
  
var res= []

for (var i = 0; i < this.state.title.length; i++){

  var pic=null
  if(this.state.photo[i] !==''){  pic=  <img className="image" src={this.state.photo[i]} alt="Test" /> }
  else {pic = <div> Not found </div>}
  
   res.push(
    <Row className="resultBar">
    <Col className="resultsImg"sm={1} md={1} lg={1} xl={1} xxl={1} >
      {pic}
    </Col>
    <Col className="resultsDesc" sm={9} md={9} lg={9} xl={9} xxl={9} >
     <a onClick={this.goTo.bind(this, this.state.title[i], this.state.photo[i], this.state.description[i], this.state.short_description[i])} >
       {this.state.title[i]}
</a>

     {this.state.short_description[i]}
   </Col>
    </Row>

  ); 
}

if(res.length==0){res=<div>Not found</div>}


  return (
    <div className="App">
      <header className="App-header">
            
                   <Row className="searchBar">
                   
                    <form className="commentForm">
                        <button type="button" className="btn btn-success homeBut" onClick={this.reload}>Home</button>
                        <input
                          id="search"
                          className="comment-input"
                          aria-multiline="true"
                          contentEditable={true}
                          onKeyDown={this.onKeyDown}
                          ref={node => this.input = node} 
                          placeholder="Type a car name"
                        />
                        <button type="button" className="btn btn-success subBut" onClick={this.lookForCar}>Search</button>
                    </form>
                    </Row>





               {res}
                  
      </header>
    </div>
  );}
}

export default App;
