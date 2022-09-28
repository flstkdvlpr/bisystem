class CallTouchApi {
    _apiKey = 'm9kfYiYyk2U2rcafdBMuVdK9BlUh6DzOVXN5iEx6X7tE5';


    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getAlldata = (dateUp, dateBefore) =>{
        return this.getResource(`http://api.calltouch.ru/calls-service/RestAPI/41648/calls-diary/calls?clientApiId=${this._apiKey}&dateFrom=${dateUp}&dateTo=${dateBefore}&page=1&limit=1000`)
    }
}

export default CallTouchApi;