let apiUrl
const apiUrls = {
	production: 'https://ga-remote-library-api.herokuapp.com',
	development: 'https://ga-remote-library-api.herokuapp.com',
}

if (window.location.hostname === 'localhost') {
	apiUrl = apiUrls.development
} else {
	apiUrl = apiUrls.production
}

export default apiUrl
