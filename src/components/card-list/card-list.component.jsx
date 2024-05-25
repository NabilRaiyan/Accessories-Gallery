import { Component } from "react";

class CardList extends Component{

    render(){
        const {products} = this.props;

        return (
            <div>
                {
                    products.map(product =>(
                        <h3 key={product.id}>{product.title}</h3>
                    ))
                }
            </div>
        );
    }
}

export default CardList;