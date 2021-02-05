import firebase from 'firebase/app'



export default {
	actions: {
		async register({dispatch}, {name, password}) {
			try {
				
				
				var database = firebase.database();

				const acc = (await firebase.database().ref(`/users`).once('value')).val()
				
				console.log(acc);
				
				if(acc.hasOwnProperty(`${name}`)){   console.log("NeOKEY"); return 0;}
				else {  
						
						console.log("OKEY");
						await firebase.database().ref(`/users/${name}/info`).update({
						password: password,
					})


					return 1; 
				}
				


				
	
				
			
				
				console.log("2")
			} catch (e) {

			}
		},
		async login({dispatch, commit}, {name, password}) {
			try {
				console.log("1" + name + " ; " + password)

				

				const pas = (await firebase.database().ref(`/users/${name}/info/password`).once('value')).val()

				if(pas != password){
					console.log("НЕПРАВИЛЬНО")
					return 0
				}
				else {
					console.log("ПРАВИЛЬНО")
					return 1

				}
			}
			catch (e) {
				throw e
			}
		
		},
	}
}