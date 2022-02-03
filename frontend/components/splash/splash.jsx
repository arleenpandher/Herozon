import React from "react"
import HerozonBasicImage from "../../../app/assets/images/Herozon_Basic.png"
import NavBarContainer from "../nav_bar/nav_bar_container"
import {Link} from "react-router-dom"
import Footer from "../Footer"

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchservices()
    }

    render() {
        if (!this.props.services.length) return null
        return(
            <div>
                <header>
                    <NavBarContainer/>
                </header>
                <div id="BasicHeadImg">
                    <img id="BasicHeadImage" src={HerozonBasicImage}></img>
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
                <div id="borderdiv">
                    <div id="basicideadiv">
                        <span id="basicideatextone">The basic idea:</span>
                        <span id="basicideatexttwo">highly rated</span>
                        <span id="basicideatexttwo">heros</span>
                        <span id="basicideatexttwo">at low prices.</span>
                    </div>
                    <div id="minielements">
                    <div id="toprow">
                        <Link id="link" to={`/services/4/products`}>
                            <div id="first">
                                <span id="text">{this.props.services[3].title}</span>
                                <img id="bbpicture" src={this.props.services[3].photoUrl}></img>
                            </div>
                        </Link>
                        <Link id="link" to={`/services/3/products`}>
                            <div id="second">
                                <span id="text">{this.props.services[2].title}</span>
                                <img id="picture" src={this.props.services[2].photoUrl}></img>
                            </div>
                        </Link>
                    </div>
                    <div id="bottomrow">
                    <Link id="link" to={`/services/2/products`}>
                        <div id="third">
                            <span id="text">{this.props.services[1].title}</span>
                            <img id="picture" src={this.props.services[1].photoUrl}></img>
                        </div>
                    </Link>
                    <Link id="link" to={`/services/1/products`}>
                        <div id="fourth">
                            <span id="text">{this.props.services[0].title}</span>
                            <img id="picture" src={this.props.services[0].photoUrl}></img>
                        </div>
                    </Link>
                    </div>
                    </div>
                </div>
                <div id="borderdiv2">
                    <div id="minielements">
                    <div id="toprow">
                        <Link id="link" to={`/services/5/products`}>
                            <div id="first">
                                <span id="text">{this.props.services[4].title}</span>
                                <img id="bbpicture" src={this.props.services[4].photoUrl}></img>
                            </div>
                        </Link>
                        <Link id="link" to={`/services/6/products`}>
                            <div id="second">
                                <span id="text">{this.props.services[5].title}</span>
                                <img id="picture" src={this.props.services[5].photoUrl}></img>
                            </div>
                        </Link>
                    </div>
                    <div id="bottomrow">
                    <Link id="link" to={`/services/7/products`}>
                        <div id="third">
                            <span id="text">{this.props.services[6].title}</span>
                            <img id="picture" src={this.props.services[6].photoUrl}></img>
                        </div>
                    </Link>
                    <Link id="link" to={`/services/8/products`}>
                        <div id="fourth">
                            <span id="text">{this.props.services[7].title}</span>
                            <img id="picture" src={this.props.services[7].photoUrl}></img>
                        </div>
                    </Link>
                    </div>
                    </div>
                    <div id="basicideadiv2">
                        <Link id="link" to={`/services/9/products`}>
                            <div id="fifth">
                                <span id="text">{this.props.services[8].title}</span>
                                <img id="picturefor9" src={this.props.services[8].photoUrl}></img>
                            </div>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Splash 