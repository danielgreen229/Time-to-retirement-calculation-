<template>

  <transition name="slide">
  <div class="home">
    <meta name="viewport" content="width=device-width, user-scalable=no">
  




    <div class="box">
      <p style="
    margin-top: 6% !important;
">Время до пенсии</p>
      <div style="position: absolute;left: 50%; right: 50%;top: -3%;bottom: 50%;">
        <div class="hourglass"></div>
      </div>
    </div>
	
	<div id="wrapper">
		<p>Вход</p>
		<form id="signin" method="" action="" autocomplete="off" onsubmit="return false">
			<input type="text" id="user" name="user" placeholder="имя" v-model="username" />
			<input type="password" id="pass" name="pass" placeholder="пароль" v-model="password"/>
			<button type="submit" @click="doLogin">&#xf0da;</button>
			<p style="width=100% !important">Нет аккаунта? <a href="#" @click="GoToReg">Регистрация</a></p>
      <p style="color: #ca2929; !important" v-if="!Logged">Ошибка авторизации</p>
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
  	username: "",
  	password: "",
    Logged: true,
   
  }),
  components: {
    
  },
  methods: {
  	GoToReg(){
  		this.$router.push({ path: "reg" })
  	},
    async doLogin() {
          
          const formData = {
              name: this.username,
              password: this.password,
              
          }
          try {
            if(await this.$store.dispatch('login', formData))
            {
              this.Logged = true 
              console.log("ПРАВИЛЬНО")




              if(await this.$store.dispatch('fetchInfo', this.username)) {
                console.log("Yes sex")
                this.$router.push({ path: "pro" })
              } 
              else {
                console.log("No sex")
                this.$router.push({ path: "col" })
              }

              

            }
            else {

              this.Logged = false
              console.log("НеПРАВИЛЬНО")
              
            }
          } catch(e) {
            console.log("Not logined")
        }
      }
  }
}
</script>


