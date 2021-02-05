<template>

  <transition name="slide">
<div class="home">


      <div class="box">
      <p >Время до пенсии</p>
      <div style="position: absolute;left: 50%; right: 50%;top: -3%;bottom: 50%;">
        <div class="hourglass"></div>
      </div>
    </div>


	<div id="wrapper">





		<p>Регистрация</p>
		<form id="signin" method="" action="" autocomplete="off" onsubmit="return false">
			<input type="text" id="user" name="user" placeholder="username" v-model="RegUsername" />
			<input type="password" id="pass" name="pass" placeholder="password" v-model="RegPassword"/>
			<button type="submit" @click="doRegister" >&#xf0da;</button>
			<p>Есть аккаунт? <a href="#" @click="GoToReg">Вход</a></p>
       <p style="color: #ca2929 !important;">{{text}}</p>
		</form>

	</div>
  </div>
   </transition>
</template>


<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data: () => ({
  	RegUsername: "",
  	RegPassword: "" ,
    text: ""
  }),
  components: {
    
  },
  methods: {
  	GoToReg(){
  		this.$router.push({ path: "/" })
  	},
    async doRegister() {

          const formData = {
              name: this.RegUsername,
              password: this.RegPassword,
              
          }
          try {
            if(await this.$store.dispatch('register', formData)) {
              this.text = "Регистрация прошла успешно"


             
              await this.$store.dispatch('fetchInfo', this.RegUsername)




              this.$router.push({ path: "col" })
                

              

              




              //this.$router.push({ path: "/" })
            }
            else {
              this.text = "Такой аккаунт уже существует"
            }
            
          } catch(e) {
            console.log("Not Registered")
        }
    }
  }
}
</script>
