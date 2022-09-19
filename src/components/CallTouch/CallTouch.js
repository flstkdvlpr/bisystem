import { Component } from "react";
import CallTouchApi from "../../services/CallTouchAPI";

class CallTouchLeads extends Component{
    constructor(props){
        super(props);
    }

    state = {
        countCalls: null,
    }

    data = new CallTouchApi;

    updata = () => {
        this.data
            .getAlldata()
            .then(res => {
                this.setState({
                    countCalls: res.length
                })
            })
    } 

    render() {
        const {countCalls} = this.state
        return(
            <>
                <p>Всего звонков {countCalls}</p>
            </>
        )
    }
}

export default CallTouchLeads;