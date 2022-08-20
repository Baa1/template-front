import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://iq-server.site/api',
	headers: {
		'Content-Type': 'application/json',
	}
})

export default instance
