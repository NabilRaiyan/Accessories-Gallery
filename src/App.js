
import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-field/searchBox.component';

class App extends Component {

  constructor(){
    super();

    this.state = {
      // name: {firstname: "Raiyan", lastname:"Al Sultan",},
      // age: 24,
      products: [],
      searchField: '',
    };
  }

  onSearchChange = (event)=>{
    const searchField = event.target.value.toLocaleLowerCase();
   
    this.setState(()=>{
      return {searchField};
    });
  }

  componentDidMount(){
    fetch('https://fakestoreapi.com/products')
      .then((response)=>
        response.json()
      .then((product)=>this.setState(
        ()=>{ // shallow merge function
        return {
          products: product
        }
      }, ()=>{ // updated state log
        console.log(this.state);
      }))
      )
  }

  render(){

    const {products, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredProduct = products.filter((product)=>{
      return product.title.toLocaleLowerCase().includes(searchField); // return true if search input include the product title else return false
    });

   

    return (
      <div className="App">
        <h1>Accessories</h1>
        <SearchBox onChangeHandler={onSearchChange}/>
        <CardList products = {filteredProduct}/>
      </div>
    );
  }
  
}

export default App;
