const initState ={
    projects:[
        {id: '1', title: 'Nigeria is growing technology', content: 'It is a long story..so blabla blabla is what I can say now'},
        {id: '2', title: 'Technology is sweet', content: 'until you discovet this idea you dont know'},
        {id: '3', title: 'Technology in Nigeria is small', content: 'Read the news always and you will realise'}
    ]
};

export const projectReducer = (state=initState, action)=>{
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log("created project", action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log("create project err", action.err);
            return state;
        default:  
            return state;
    }
}