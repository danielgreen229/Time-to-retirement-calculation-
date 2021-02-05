import firebase from 'firebase/app'


export default {
	state: {
		Name: {},
		year: 0,
		month: 0,
		day: 0,
		sex: ""
	},
	mutations: {
		setName(state, Name) {
			state.Name = Name
		},
		setYear(state, year) {
			state.year = year
		},
		setMonth(state, month) {
			state.month = month
		},
		setDay(state, day) {
			state.day = day
		},
		setSex(state, sex) {
			state.sex = sex
		},


		clearName(state) {
			state.Name = {}
		}
	},
	actions: {
		async fetchInfo({dispatch, commit}, name) {
			try {
				
				
				const info = (await firebase.database().ref(`/users/${name}`).once('value')).val()
				
				commit('setName', name)
				

				

				if(info.info.hasOwnProperty('sex')){ return 1; console.log("OKEY")}
				else { return 0; console.log("NEOKEY") }
				
				
			}
			catch (e)
			{

			}
		}
	},
	getters: {
		Name: s => s.Name,
		year: s => s.year,
		month: s => s.month,
		day: s => s.day,
		sex: s => s.sex,
	}
}
