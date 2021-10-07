import React, { Component } from 'react';
import Service from '../service/Service';

class ProductList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }
    
    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        Service.retrieveAllProductNames()
            .then(
                response => {
                    console.log(response);
                    this.setState({ products: response.data })
                }
            )
    }

    render() {
        return (
              <div className="container">
                {
                    this.state.products.map(
                        product =>
                            <p>{product.name}</p>
                        
                    )
                }
          </div>
        )
    }
}

export default ProductList
