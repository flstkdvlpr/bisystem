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
        let dateFrom = '14/09/2022';
        let dateTo = '14/09/2022'
        this.datas
            .getAlldata(dateFrom, dateTo)
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