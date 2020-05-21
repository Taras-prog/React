const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

let initialState =  {

   users: [
    // {id: 1, photoUrl:' https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzHVX6G9-sQp5HtqHTkD1gLUvzPRMR0APMhXDs_6tFt7f2BGqd&usqp=CAU', followed: false, fullName: 'Taras', status: 'Founder', location: {country: 'Ukraine', city: 'Kryvyi Rih' } },
    // {id: 2, photoUrl:' https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzHVX6G9-sQp5HtqHTkD1gLUvzPRMR0APMhXDs_6tFt7f2BGqd&usqp=CAU', followed: true, fullName: 'Dima', status: 'I am happy now...', location: {country: 'Ukraine', city: 'Lviv' } },
    // {id: 3, photoUrl:' https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzHVX6G9-sQp5HtqHTkD1gLUvzPRMR0APMhXDs_6tFt7f2BGqd&usqp=CAU', followed: true, fullName: 'Olga', status: 'I feel good.', location: {country: 'Ukraine', city: 'Kyiv' } },
    // {id: 4, photoUrl:' https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzHVX6G9-sQp5HtqHTkD1gLUvzPRMR0APMhXDs_6tFt7f2BGqd&usqp=CAU', followed: false, fullName: 'Lena', status: 'I am busy', location: {country: 'Ukraine', city: 'Kryvyi Rih' } },
    // {id: 5, photoUrl:' https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzHVX6G9-sQp5HtqHTkD1gLUvzPRMR0APMhXDs_6tFt7f2BGqd&usqp=CAU', followed: false, fullName: 'Valera', status: 'Hi!', location: {country: 'Ukraine', city: 'Kryvyi Rih' } },
    ]
}

 const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case  FOLLOW:
             return {
                 ...state,
                 users: state.users.map( u => {
                    if(u.id === action.userId){
                    return{...u, followed: true}
                }
                return u;
            })
            }
            case  UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                   if(u.id === action.userId){
                   return{...u, followed: false}
               }
               return u;
           })
           }
           case SET_USERS:
               return {...state, users: [...state.users, ...action.users]}

            default: 
            return state;
    }
}

export const followtAC = (userId) => ({type : FOLLOW, userId});
export const unfoolowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;