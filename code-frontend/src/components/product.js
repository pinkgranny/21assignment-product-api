import React from "react"

class Product extends React.Component {
  render() {
    return (
      <div className="product-item-holder">
        {/* <div className="product-wrapper"> */}
          {/* <div className="ProductCard"> */}
            <h2>{this.props.name} </h2>
            <img src={this.props.image}></img>
            <ul>
              <li>{this.props.type}</li>
              <li>{this.props.substance}</li>
              <li>{this.props.size}</li>
              <li>{this.props.numberInPack}</li>
              <li>{this.props.price}</li>
            </ul>
          {/* </div> */}
        {/* </div> */}
      </div>
    )
  }
}

export default Product
