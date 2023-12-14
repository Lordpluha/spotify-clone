const axios = require('axios').default

class TrackService {
	static getAll() {

	}

	static search(query) {

	}

	static getByAlbum(albumId) {

	}

	static getByPlaylist(playlistId) {

	}

	static like(id) {

	}

	static load(params) {

	}

	static report(params) {

	}
	static async getAlbums() {
		try {
			const resp = await axios.get('')
		} catch (error) {
			console.log(`Albums load error - ${error}`)
		}

	}
}