const initialState = {
    newYork:{},
    abc:{},
    lastWeek:{},
    lastMonth:{},
    error: false
};

const newsYorkReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_RESULTS_NEWYORK':
            return { ...state, newYork: action.payload}    
        case 'RECEIVE_RESULTS_ABC':
            return { ...state, abc: action.payload}    
        case 'RECEIVE_RESULTS_LASTWEEK':
            return { ...state, lastWeek: action.payload}    
        case 'RECEIVE_RESULTS_LASTMONTH':
            return { ...state, lastMonth: action.payload}    
        default:
            return state;
    }
}

export default newsYorkReducer;