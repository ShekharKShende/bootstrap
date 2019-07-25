import history from '../config/history'
const candidates = [{
    id: 1,
    contact: 1234567897,
    lastName: "Shende",
    email: "shekhar.shende@synerzip.com",
    firstName: "Shekhar"
}, {
    id: 2,
    contact: 1234567897,
    lastName: "Shende",
    email: "shekhar.shende@synerzip.com",
    firstName: "Vijay"
}, {
    id: 3,
    contact: 1234567897,
    lastName: "Shende",
    email: "shekhar.shende@synerzip.com",
    firstName: "Rahul"
}, {
    id: 4,
    contact: 1234567897,
    lastName: "Shende",
    email: "shekhar.shende@synerzip.com",
    firstName: "Amol"
}, {
    id: 5,
    contact: 1234567897,
    lastName: "Shende",
    email: "shekhar.shende@synerzip.com",
    firstName: "Nagmani"
}, {
    id: 6,
    contact: 1234567897,
    lastName: "Shende",
    email: "shekhar.shende@synerzip.com",
    firstName: "Sachin"
}]



export function loginUser(email, password) {

    return dispatch => {
        let promise1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'shekhar.shende89@gmail.com' && password === '111') {
                    resolve()
                } else {
                    reject();
                }
            }, 2000)

        })
        promise1
            .then(result => {
                dispatch({
                    type: 'isLoggedIn',
                    payload: {
                        isLoggedIn: "true"
                    }
                })
                history.push('/dashboard')
            })
            .catch(err => {
                dispatch({
                    type: 'isLoggedIn',
                    payload: {
                        isLoggedIn: "false"
                    }
                })
            })
    }
}

export function getCandiates() {
    return dispatch => {
        let promise1 = Promise.resolve(candidates.slice(0));
        promise1.then(candidates => {
            dispatch({
                type: 'getData',
                payload: candidates
            })
        })
    }
}
export function deleteCandidate(ids) {
    for (var i = 0; i < candidates.length; i++) {
        if (candidates[i].id === ids) {
            candidates.splice(i, 1);
            break;
        }
    }
    return dispatch => {
        dispatch({
            type: 'delete',
            payload: candidates.slice(0)
        })
    }
}

export function saveCandidate(candidate) {
    var index = candidates.findIndex(obj => obj.id === candidate.id);
    return dispatch => {
        if (index > -1) {
            candidates[index] = candidate
        } else {
            candidates.push(candidate);
        }
        history.goBack();
        dispatch({
            type: 'add',
            payload: candidates.slice(0)
        })
    }
}