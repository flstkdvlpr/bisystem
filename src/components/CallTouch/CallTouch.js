import { Component } from "react";
import CallTouchApi from "../../services/CallTouchAPI";

class CallTouchLeads extends Component{

    constructor(props){
        super(props);
        this.updateData();
    }

    state = {
        countCalls: null,
    }

    datas = new CallTouchApi();

    updateData = () => {
        this.datas
            .getAlldata('14/09/2022', '14/09/2022')
            .then(res => {
                this.setState({
                    countCalls: res.length
                })
            })
    } 

    render() {
        const {countCalls} = this.state;
        return(
            <>
                <p>Всего звонков: {countCalls}</p>
            </>
        )
    }
}

export default CallTouchLeads;