<template>
	<div>
        <div id="Head">
            <h1 style="
    margin-top: 8% !important;
">Введите свои данные:</h1>
        </div>

        <p>Выберите пол</p>
    <div style="margin: 6% 10% 5%;display: inline-flex;" >
      
      <div style=" width: 36vw;">
    		<input type="radio" id="one" value="Мужской"  v-model="picked">
    		<label for="Мужской">Мужской</label>
      </div<

  		<br>
      <div style=" width: 36vw;">
    		<input type="radio" id="two" value="Женский" v-model="picked">
    		<label for="Женский">Женский</label>
      </div>

    </div>
		<br>
	
        
        <p>Выберите дату рождения</p>
        <input type="date" id="BirthDate"  v-model="datum" style="
          background-color: #d3deea;
          color: #6e7887;
          border: 5px solid #6e7887;
          border-radius: 14px;
          padding: 4px;
          margin: 16px;
          width: 40%; ">
        <hr/>

        <p style="
    position: absolute;
    color: #d80101 !important;
    left: 23%;
    right: 25%;
    top: 40%;
    bottom: 50%;
    width: 50%;
    height: 6%;
">{{error}}</p>
        <button class="bac" @click="LogOut">Выйти</button>
        <button @click="TurnBack">Рассчитать</button>

  
        
        
     </div>
</template>


<script>



export default {
  name: 'Home',
  data: () => ({
  	picked: "",
  	datum: '',
  	year: '',
  	month: '',
  	day: '',
    error: ""
  }),
  components: {
    
  },
  computed: {
  	name() {
  		try {
  			
  			return this.$store.getters.Name
  		}
  		catch (e){ console.log(e)}
  	}
  },
  methods: {
  	LogOut(){
  		this.$router.push({ path: "/" })
  	},
  	async TurnBack(){

      if(this.picked == "")
      {
        this.error = "Выберите пол"
      }
      else if(this.datum == '') 
      {
        this.error = "Выберите дату"
      }
      else
      {

        this.year = this.datum[0] + this.datum[1] + this.datum[2] + this.datum[3]

        

        this.month = this.datum[5] + this.datum[6] 

        this.day = this.datum[8] + this.datum[9] 

        

          const formData = {
              name: this.name,
              year: this.year,
              month: this.month,
              day: this.day,
              sex: this.picked
          }
        try {
              await this.$store.dispatch('AddInformation', formData)


            } catch(e) {
              console.log(e)
          }
        this.$router.push({ path: "/pro" })

      }
  		
  		



  		
  	},
    
  }
}
</script>