import history from '../config/history'



export function loginUser(email, password) {

    return dispatch => {
     let promise1 =  new Promise((resolve, reject) => {
        setTimeout(() => {
        if(email === 'shekhar.shende89@gmail.com' && password === '111' ) {
           resolve()
        } else {
            reject();
        }
       } ,2000)

    })
    promise1
    .then(result =>{
        dispatch({type:'isLoggedIn', payload:{isLoggedIn:"true"}})
        history.push('/dashboard')
    })
    .catch(err =>{
        dispatch({type:'isLoggedIn', payload:{isLoggedIn:"false"}})
    })
}
}