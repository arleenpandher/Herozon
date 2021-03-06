import React from "react"
import NavBarContainer from "../nav_bar/nav_bar_container"
import {Link, Redirect} from "react-router-dom"
// import HerozonBasicImage from "../../../app/assets/images/Herozon_Basic.png"
import { FaStar } from "react-icons/fa"
import Footer from "../Footer"

class ProductIndex extends React.Component {
    constructor(props) {
        super(props)
        this.addToCart = this.addToCart.bind(this)
        this.forcesignin = this.forcesignin.bind(this)
        this.filterproducts = this.filterproducts.bind(this)
        this.state = {
            showpageproducts: []
        }
    }

    componentDidMount() {
        window.scroll(0,0)
        this.props.fetchproducts(this.props.serviceId)
        .then(this.filterproducts)
        this.props.fetchservices()
        if (this.props.user) {
            this.props.fetchcartitems(this.props.user.id)
        }
    }

    filterproducts() {
        const filter = this.props.products.filter(prod => prod.serviceId == this.props.match.params.serviceId)
        this.setState({ showpageproducts: filter })
    }

    componentDidUpdate(preprops) {
        if (preprops.serviceId !== this.props.serviceId) {
            this.props.fetchproducts(this.props.serviceId)
            .then(this.filterproducts)
        }
    }

    forcesignin(e) {
        e.preventDefault()
        this.props.history.push('/login')
    }

    addToCart(e) {
        e.preventDefault()
        if (this.props.cart[e.currentTarget.value]) {
            this.props.updateCart({cart_id: this.props.cart[e.currentTarget.value].cartId, 
                user_id: this.props.user.id, product_id: e.currentTarget.value, quantity: this.props.cart[e.currentTarget.value].quantity+1})
        } else {
            this.props.addtocart({product_id: e.currentTarget.value, quantity: 1})
        }
    }



    render() {
        if (!this.props.products.length) return null
        return (
            <div>
                <header>
                    <NavBarContainer/>
                </header>
                <div id="BasicHeadImg">
                    {/* <span>{this.props.services[this.props.serviceId].title}</span> */}
                    <img id="BasicHeadImage" src={window.logo1}></img>
                </div>
                <div id="entirelowernavbar">
                <div id="lowernavbartext">
                        {this.props.services.map((service) => (
                            <Link id="lowernavbarentries" key={service.id} to={`/services/${service.id}/products`}>{service.title.toUpperCase()}</Link>
                        ))}
                    </div>
                    <div id="hnavline">
                    </div>
                </div>
                <div id="CHECK3000">
                <div id="productindexbox">
                    {this.state.showpageproducts.map(product => (
                        <Link id="productindextitle" key={product.id} to={`/products/${product.id}`}>
                            <div id="productindexdiv">
                                <img id="productindeximage" src={product.photoUrl}/>
                                <span id="productindextitle">{product.title} - {product.description}</span>
                                <span id="productindexpagestars">
                                    {[...Array(5)].map((star,i) => {
                                        const ratingvalue = i + 1
                                            return (
                                                <FaStar key={i} size={20} color={ratingvalue <= product.ratings ? "#ffc107" : "#e4e5e9"}/>
                                            )
                                    })}</span>
                                <span id="productindextotcost">${product.cost}</span>
                                {this.props.user ? (
                                    <button id="productindexaddtocartbtn" value={product.id} onClick={this.addToCart}>Add to Cart!</button>
                                ) : (
                                    <button id="productindexaddtocartbtn" value={product.id} onClick={this.forcesignin}>Add to Cart!</button>
                                )}
                            </div>
                        </Link>)
                    )}
                </div>

                </div>
                <Footer />
            </div>


        )
    }
}

export default ProductIndex 