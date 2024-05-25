import { Component } from "react";
import './card-list.styles.css';
import './card.styles.css';

class CardList extends Component{

    render(){
        const {products} = this.props;

        return (
            <div className="card-list">
                {
                    
                    products.map(product =>(
                        <div className="card-container">
                            <img className="card-img" alt={`${product.title}`} src={product.image}></img>
                            <h3 key={product.id}>{product.title}</h3>
                            <p className="price">${product.price}</p>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default CardList;