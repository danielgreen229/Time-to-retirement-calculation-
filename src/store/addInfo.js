import firebase from 'firebase/app'


export default {
	actions: {
		async AddInformation({dispatch}, {name, year, month, day, sex}) {
			try {
				



				await firebase.database().ref(`/users/${name}/info`).update({
					year: year,
					month: month,
					day: day,
					sex: sex
				})

				


				
			} catch (e) {

			}
		}
	}
}