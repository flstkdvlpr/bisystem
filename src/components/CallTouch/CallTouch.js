import { Component } from "react";
import CallTouchApi from "../../services/CallTouchAPI";

class CallTouchLeads extends Component{

    constructor(props){
        super(props);
        this.updateData();
    }

    state = {
        countCalls: null,
        countYandexDirect: null,
        countYandexOrganic: null,
        countGoogleAds: null,
        countGoogleOrganic: null,
        conuntReferalCalls: null,
        counOtherCalls: null
    }

    datas = new CallTouchApi();

    

    updateData = () => {
        let dateFrom = '27/06/2022';
        let dateTo = '27/09/2022'
        this.datas
            .getAlldata(dateFrom, dateTo)
            .then(res => {
                let yandexDirect = res.records.filter(item => item.source === 'yandex' && item.medium === 'cpc').length;
                this.setState({
                    countCalls: res.records.length,
                    countYandexDirect: yandexDirect,
                    countYandexOrganic: res.records.filter(item => item.source === 'yandex' && item.medium === 'organic').length,
                    countGoogleAds: res.records.filter(item => item.source === 'google' && item.medium === 'cpc').length,
                    countGoogleOrganic: res.records.filter(item => item.source === 'google' && item.medium === 'organic').length,
                    conuntReferalCalls: res.records.filter(item => item.medium === 'referral').length,
                    counOtherCalls: res.records.filter(item => item.medium ==="<не указано>").length,

                })
            })
    } 

    render() {
        const {countCalls, countYandexDirect, countYandexOrganic, countGoogleAds, countGoogleOrganic, conuntReferalCalls, counOtherCalls} = this.state;
        return(
            <>
                <p>Всего звонков: {countCalls}</p>
                <p>Звонки с Яндекс.Директа: {countYandexDirect}</p>
                <p>Звонки с Поиска Яндекс: {countYandexOrganic}</p>
                <p>Звонки с Google.Ads: {countGoogleAds}</p>
                <p>Звонки с Поиска Google: {countGoogleOrganic}</p>
                <p>Звонки с реферальных ссылок: {conuntReferalCalls}</p>
                <p>Звонки с без источника: {counOtherCalls}</p>
            </>
        )
    }
}

export default CallTouchLeads;