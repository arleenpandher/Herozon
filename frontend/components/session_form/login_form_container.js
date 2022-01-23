import { connect } from "react-redux"
import {logIn} from "../../actions/session_actions"
import SessionForm from "./session_form"

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: "Sign-In",
    information: {
        username: "",
        password: ""
    },
    submitType: "Sign-In"
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(logIn(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)