import Swal from 'sweetalert2';
import {
    FETCH_LOGIN_SUCCEEDED,
    SET_REQUEST_FLAG,
    SET_SYSTEM_MSG
} from './types';

const initialState = {
    requestingSession: false,
    user: {
        userAgent: {}
    },
    isAuthenticate: false,
    flagRequest: false
};

const Session = (state = initialState, {type, ...props}) => {
    switch (type) {
        case SET_REQUEST_FLAG: {
            return {
                ...state,
                flagRequest: props.flag
            };
        }
        case FETCH_LOGIN_SUCCEEDED:
            return {
                ...state,
                requestingSession: false,
                user: {
                    userAgent: props
                },
                isAuthenticate: true
            };
        case SET_SYSTEM_MSG:
            Swal.fire(props);
            return {...state};
        default:
            return state;
    }
};

export default Session;
