import { signedInUserDataSuccess } from './userActions';
import apiCaller from './../api/apiCaller'
class asyncActions {
	// dispatch calls one of the actionCreators and hands the action to the reducer
	getUserData() {
		return dispatch => {
			return apiCaller.getUserInformation().then((res) => {
				dispatch(signedInUserDataSuccess(res))
			})
		};
	};
};
export default new asyncActions();