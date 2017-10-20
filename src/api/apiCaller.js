import request from 'request-promise';
import sampleLoggedInUserData from './../data/sample.js'
class ApiCaller {
	getUserInformation() {
		// Leave here for when we need to fetch to our api
		// return request({ method: 'GET', uri: './../data/sample.json' });
		return Promise.resolve(sampleLoggedInUserData);
	}
}
export default new ApiCaller();