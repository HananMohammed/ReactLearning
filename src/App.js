import React, { Component} from 'react';
import Child from './Child';
import Items from './components/items';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Rout from './components/Route';
import Col from './components/Col' ;
import { BrowserRouter, Route, Switch } from 'react-router-dom'
 
class App extends Component {

 componentDidMount() {
   console.log('componentDidMount' );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate',prevProps,prevState);
  }
  state = { 
    items: [
      {id:"1 ", name:'ahmeed' , age:"22" , count:2},
      { id: "2", name: 'asmaa', age: "25", count:1},
      { id: "3", name: 'Yasser', age: "25", count: 3}
    ] , 
    name : ''
  }
  handleDeleteClick=() => {

    this.setState({ items: [
      { id: "1 ", name: 'ahmeed', age: "22", count: 2 },
    ] });

  }
  handleAddClick = (event) => {
  //  event.preventDefault();
    let items = this.state.items ;
    items.push({ id:Math.random(), name:"hanan", age:26 ,count:5});
    this.setState({ items: items });
  }
  eventChange = () => {
      this.setState({ name: 'Mohamed' ,age :"30"});
  }
  handleClick = () => {
    console.log("clicked")
  }
  handleMouse = () => {
    console.log("Mouse Move")
  }
  handeleFormChange = (event) => {
    this.setState({name:event.target.value})
  }
  handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state.name)
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/fragement" component={Col} />
            <Route path="/:params" component={Rout} />
          </Switch>
          <table>
            <tr>
              <Col />
            </tr>
          </table>
          <Items items={this.state.items}/>
          <Child test = {this.state.name}/>
          <button onClick={this.handleClick}>Click Me </button>
          <button onMouseMove={this.handleMouse}>Mouse Move </button>
          <button onClick={this.eventChange}>Change State </button>
          <p>name{this.state.name} ,age: {this.state.age} year</p>
      <form onSubmit={this.handleSubmit}>
      <p>{this.state.name}</p>
        <input type="text" placeholder="Enter Name" onChange={this.handeleFormChange}/>
        <button type="submit">Submit</button>
      </form>
      <button onClick={this.handleAddClick}> Add </button>
          <button onClick={this.handleDeleteClick}> Delete </button>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
