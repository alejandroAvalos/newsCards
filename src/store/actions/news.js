import axios from "axios";

export const receiveResultsNewYork = data => {
  return {
    type: "RECEIVE_RESULTS_NEWYORK",
    payload: data
  };
};

export const receiveResultsABC = data => {
  return {
    type: "RECEIVE_RESULTS_ABC",
    payload: data
  };
};

export const receiveResultsLastWeek = data => {
  return {
    type: "RECEIVE_RESULTS_LASTWEEK",
    payload: data
  };
};

export const receiveResultsLastMonth = data => {
  return {
    type: "RECEIVE_RESULTS_LASTMONTH",
    payload: data
  };
};

export const receiveError = error => {
  return {
    type: "RECEIVE_ERROR",
    payload: error
  };
};

export const fetchNewYork = filter => {
  return function(dispatch) {
    let url =
      "https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=1b7847da6cc04e65a14effe92dfb70c0";
    return axios({
      url: url,
      timeout: 100000
    })
      .then(function(response) {
        dispatch(receiveResultsNewYork(response.data));
      })
      .catch(function(response) {
        dispatch(receiveError(response.data));
      });
  };
};

export const fetchABC = filter => {
  return function(dispatch) {
    let url =
      'https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=1b7847da6cc04e65a14effe92dfb70c0';
    return axios({
      url: url,
      timeout: 100000
    })
      .then(function(response) {
        dispatch(receiveResultsABC(response.data));
      })
      .catch(function(response) {
        dispatch(receiveError(response.data));
      });
  };
};

export const fetchLastMonth = filter => {
  return function(dispatch) {
    let todayDate = new Date().getTime(); 
    todayDate -= 1814400000; 
    let date1 = todayDate;
    let date2 = date1-10080000;
    let oneMonth = new Date(date1); 
    let twoMonth = new Date(date2)
    let lastmonth1 = oneMonth.toISOString().split('T'); 
    lastmonth1 = lastmonth1[0]
    let lastmonth2 = twoMonth.toISOString().split('T'); ; 
    lastmonth2 = lastmonth2[0]
    
    const year = new Date().getFullYear().toString();                                    
    const month = (new Date().getMonth()+1).toString().padStart(2, 0);        
    const day  = new Date().getDate().toString().padStart(2, 0);

    console.log('https://newsapi.org/v2/everything?q=%22a%22&from=' + lastmonth1 + '&to=' +lastmonth2+'&lenguage=en&sortBy=popularity&apiKey=da5fd73eb0c1430a855fcb5ffde97a15')
    console.log(`https://newsapi.org/v2/everything?q=%22a%22&from=${year}-${(month - 1).toString().padStart(2, 0)}-${day}&to=${year}-${month}-${day}&lenguage=en&sortBy=popularity&apiKey=da5fd73eb0c1430a855fcb5ffde97a15'`)
    let url= 'https://newsapi.org/v2/everything?q=%22a%22&from=' + lastmonth1 + '&to=' +lastmonth2+'&lenguage=en&sortBy=popularity&apiKey=da5fd73eb0c1430a855fcb5ffde97a15';
    //let url= `https://newsapi.org/v2/everything?q=%22a%22&from=${year}-${(month - 1).toString().padStart(2, 0)}-${day}&to=${year}-${month}-${day}&lenguage=en&sortBy=popularity&apiKey=da5fd73eb0c1430a855fcb5ffde97a15'`;
    return axios({
      url: url,
      timeout: 100000
    })
      .then(function(response) {
        dispatch(receiveResultsLastMonth(response.data));
      })
      .catch(function(response) {
        dispatch(receiveError(response.data));
      });
  };
};

export const fetchLastWeek = filter => {
  return function(dispatch) {
    let todayDate = new Date().getTime(); 
    todayDate -= 604800000; 
    let date1 = todayDate;
    let date2 = date1-604800000;
    let oneMonth = new Date(date1); 
    let twoMonth = new Date(date2)
    let lastmonth1 = oneMonth.toISOString().split('T'); 
    lastmonth1 = lastmonth1[0]
    let lastmonth2 = twoMonth.toISOString().split('T'); ; 
    lastmonth2 = lastmonth2[0]

    
    //console.log(lastmonth1, lastmonth2)
    var url = 'https://newsapi.org/v2/everything?q=%22a%22&from=' + lastmonth1 + '&to=' +lastmonth2+'&lenguage=en&sortBy=popularity&apiKey=da5fd73eb0c1430a855fcb5ffde97a15';

    /*const year = new Date().getFullYear().toString();                                    
    const month = (new Date().getMonth()+1).toString().padStart(2, 0);        
    const day  = new Date().getDate().toString().padStart(2, 0);

    const lastWeek = new Date(new Date().getTime() - (24*60*60*1000)*7);
    const lastWeekYear = lastWeek.getFullYear().toString();
    const lastWeekMonth = (lastWeek.getMonth() + 1).toString().padStart(2, 0);
    const lastWeekDay = lastWeek.getDate().toString().padStart(2, 0);

    console.log(`https://newsapi.org/v2/everything?q=%22a%22&from=${lastWeekYear}-${lastWeekMonth}-${lastWeekDay}&to=${year}-${month}-${day}&lenguage=en&sortBy=popularity&apiKey=1b7847da6cc04e65a14effe92dfb70c0'`);
    let url = `https://newsapi.org/v2/everything?q=%22a%22&from=${year}-${month}-${day}&to=${lastWeekYear}-${lastWeekMonth}-${lastWeekDay}&lenguage=en&sortBy=popularity&apiKey=1b7847da6cc04e65a14effe92dfb70c0'`;*/
    return axios({
      url: url,
      timeout: 100000
    })
      .then(function(response) {
        dispatch(receiveResultsLastWeek(response.data));
      })
      .catch(function(response) {
        dispatch(receiveError(response.data));
      });
  };
};
