import { connect } from "react-redux"
import { signUp } from "../../actions/session_actions"
import SessionForm from "./session_form"

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: "Create Account",
    information: {
        name: "",
        username: "",
        password: ""
    },
    submitType: "Create your Herozon Account"
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signUp(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)