import firebase from 'firebase/app'


export default {
	actions: {
		async Updateresult({dispatch, commit}, name) {
			try {
				

				

				const year = (await firebase.database().ref(`/users/${name}/info/year`).once('value')).val()
				console.log(year)
				commit('setYear', year)
				const month = (await firebase.database().ref(`/users/${name}/info/month`).once('value')).val()
				commit('setMonth', month)
				const day = (await firebase.database().ref(`/users/${name}/info/day`).once('value')).val()
				commit('setDay', day)
				const sex = (await firebase.database().ref(`/users/${name}/info/sex`).once('value')).val()
				commit('setSex', sex)


				
			} catch (e) {

			}
		}
	}
}