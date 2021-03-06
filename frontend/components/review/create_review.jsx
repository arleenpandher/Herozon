import React from "react"
import { FaStar } from "react-icons/fa"
import NavBar from "../nav_bar/nav_bar_container"
import Footer from "../Footer"

class CreateReview extends React.Component {

    constructor(props) {
        super(props)
        this.state = this.props.review
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    componentDidMount() {
        this.props.fetchproduct(this.props.match.params.productId),
        this.props.fetchreviews(this.props.match.params.productId)
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }
    

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createreview(this.state)
        // .then(() => console.log(Object.values(this.props.errors).length))
        .then(() => {
            if (!Object.values(this.props.errors).length) {
                let totalratings = 0
                if (this.props.reviews.length) {
                this.props.reviews.map(review => {
                    totalratings += review.ratings
                })
            }
            // console.log(totalratings)
            let newrating = (totalratings)/(this.props.reviews.length)
            this.props.updateproductratings({id: this.props.product.id, ratings: newrating})
            .then(() => this.props.history.push(`/products/${this.props.match.params.productId}`))
            }
        })
    }

    render() {
        if (!this.props.product || !this.props.currentUser) return null 
        return (
            <div id="reviewdiv">
                <NavBar />
                <form id="reviewformdiv" onSubmit={this.handleSubmit}>
                <h2 id="createreviewheader">Create Review</h2>
                <div id="reviewinfodiv">
                    <img id="reviewimage" src={this.props.product.photoUrl}/>
                    <span id="reviewtext">{this.props.product.title} - {this.props.product.description}</span>
                </div>
                <div id="reviewhline"></div>
                <div id="reviewtitle">
                {this.props.errors.title ? (
                    <span id="reviewerrors">{this.props.errors.title}</span>
                ): (
                    null
                )}
                    <label id="reviewtitlelabel">Add a Headline:
                        <input id={this.props.errors.title ? "errorreviewinput" :"reviewtitletext"} type="text" placeholder="What's most important to know" value={this.state.title} onChange={this.update("title")}/>
                    </label>
                </div>
                <div id="reviewbody">
                {this.props.errors.body ? (
                    <span id="reviewerrors">{this.props.errors.body}</span>
                ): (
                    null
                )}
                    <label id="reviewbodylabel">Add a Written Review 
                        <textarea id={this.props.errors.body ? "errorreviewinput" :"reviewbodytext"} value={this.state.body} 
                        placeholder="What did you like or dislike? What did you use this product for?" onChange={this.update("body")}/>
                    </label>
                </div>
                <div id="reviewhline"></div>
                    <div id="overallratingdiv">
                    {this.props.errors.ratings ? (
                    <span id="reviewerrors">{this.props.errors.ratings}</span>
                ): (
                    null
                )}
                    <span>Overall Rating</span>
                    <div id="starratingbox">
                        {[...Array(5)].map((star,i) => {
                            const ratingvalue = i + 1;
                            return (
                                <label key={i}>
                                    <input id="ratingsbutton" type="radio" value={ratingvalue} onClick={this.update("ratings")}/>
                                    <FaStar id="star" color={ratingvalue <= (this.state.ratings) ? "#ffc107" : "#e4e5e9"} 
                                    size={35}
                                    />
                                </label>
                            )
                        })}
                    </div>
                    </div>
                    <input id="reviewformsubmitbtn" type="submit" value="Submit"/>
                </form>
                <Footer />
            </div>
        )
    }
}

export default CreateReview