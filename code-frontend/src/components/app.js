import React from "react"
import Product from "./product"

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch("https://git.heroku.com/assignment-product-api.git").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        products: json
      })
    })
  }

  render() {
    return (
      <div className="App">
            <header>
              <h1 id="header">Products</h1>
            </header>

          <div className="Product-container">
             {/* <div className="Product-list"> */}
              {this.state.products.map((item) => {
                return <Product key={item.id}
                  name={item.name}
                  image={item.image}
                  type={item.type}
                  substance={item.substance}
                  size={item.size}
                  numberInPack={item.numberInPack}
                  price={item.price}
                  deliveryTime={item.deliveryTime}
                  />
              })}
              {/* </div> */}
          </div>
      </div>
    )
  }
}
