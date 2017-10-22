let initialState = {
	currentDashboardView: "Submissions"
}
export default function viewReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_CURRENT_DASHBOARD_VIEW':
			return {
				...state,
				currentDashboardView: action.location
			}
		default:
			return state;
	}
}