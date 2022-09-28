import { Component } from "react";
import CallTouchApi from "../../services/CallTouchAPI";
import "./callTouch.scss";

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
        counOtherCalls: null,
        callbackCall: null
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
            <div className="allcalls">
                <div className="module-calls">
                    <div className="module-calls__tittle">
                        Всего звонков: {countCalls} 
                    </div>
                    <div className="module-calls__subtittle">
                        Звонки по источникам:
                    </div>
                    <ul className="module-calls__list">
                        <li>Яндекс.Директ: {countYandexDirect}</li>
                        <li>Поиск Яндекс: {countYandexOrganic}</li>
                        <li>Google.Ads: {countGoogleAds}</li>
                        <li>Поиск Google: {countGoogleOrganic}</li>
                        <li>Реферальные ссылки: {conuntReferalCalls}</li>
                        <li>Без источника: {counOtherCalls}</li>
                    </ul>
                </div>
                <div className="module-calls">
                    <div className="module-calls__tittle">
                        Всего звонков: {countCalls} 
                    </div>
                    <div className="module-calls__subtittle">
                        Звонки по источникам:
                    </div>
                    <ul className="module-calls__list">
                        <li>Яндекс.Директ: {countYandexDirect}</li>
                        <li>Поиск Яндекс: {countYandexOrganic}</li>
                        <li>Google.Ads: {countGoogleAds}</li>
                        <li>Поиск Google: {countGoogleOrganic}</li>
                        <li>Реферальные ссылки: {conuntReferalCalls}</li>
                        <li>Без источника: {counOtherCalls}</li>
                    </ul>
                </div>
            </div>
            </>
        )
    }
}

export default CallTouchLeads;