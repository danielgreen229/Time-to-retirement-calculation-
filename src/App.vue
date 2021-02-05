<template>

  <div id="app">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <div id="nav">
  
            <router-link to="/">Вход</router-link>
            <router-link to="/reg">Регистрация</router-link>
      
     
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {

  text-align: center;
  color: #2c3e50;
}
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css');
button {
  background-color: #d3deea;
    color: #6e7887;
    border: 5px solid #6e7887;
   
    border-radius: 14px;
    padding: 4px;
    margin: 16px;
    width: 40%;
    margin-top: 50vh !important;
}

.custom-radio-btn {
    position: relative; /* Родительский элемент*/
    display: inline-block; /* Для применения рамок, размеров*/
    width: 16px;
    height: 16px;
    background: #fff;
    border: 2px solid #e80cf0; /* Толщина, стиль, цвет рамки*/
    border-radius: 50%; /* Получение круга*/
    vertical-align: text-top; /* Выравнивание кнопки по центру*/
    margin-right: 5px; /* Отступ между кнопкой и меткой*/
}

/* Рисуем внутренний круг */
.custom-radio-btn::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #a3a4a7;
    border-radius: 50%;

/* Выравниваем по центру относительно внешнего круга */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);

/* Плавный переход трансформации масштабирования */
    transition: 0.2s ease-in;
}



*{
  font-family: 'Open Sans', 'sans-serif', 'FontAwesome';
}
body{
  background: rgb(211 222 234);
  height: 98vh;
    width: 96vw;
}
.logo {
  width: 100%;
}


.Chisla {
       margin: 0;
    width: 18%;
    font-size: 7vh !important;
}


//loader

section {
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  

}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

//LOGOTIP


.box{
  
  display: inline-block;
  height: 200px;
  width: 33.3%;
  float:left;
  position: relative;
  /*margin:0 -4px -5px -2px;*/
  transition: all .2s ease;
}

.hourglass{
  position: relative;
  height: 80px;
  width: 80px;
  top: 28%;
  top: -webkit-calc(50% - 43px);
  top: calc(50% - 43px);
  left: 35%;
  left: -webkit-calc(50% - 43px);
  left: calc(50% - 43px);
  border: 3px solid #fff;
  border-radius: 80px;
  -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
  -webkit-animation: hourglass 2s ease-in-out infinite;
      animation: hourglass 2s ease-in-out infinite;
}

.hourglass:before{
  content: "";
  position: absolute;
  top:8px;
  left: 18px;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 37px 22px 0 22px;
  border-color: #fff transparent transparent transparent;
}
.hourglass:after{
  content: "";
  position: absolute;
  top: 35px;
  left: 18px;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 22px 37px 22px;
  border-color: transparent transparent #fff transparent;
}

@-webkit-keyframes hourglass{
    0%{-webkit-transform:rotate(0deg);}
    100%{-webkit-transform:rotate(180deg);}
}

@keyframes hourglass{
    0%{transform:rotate(0deg);}
    100%{transform:rotate(180deg);}
}



a {
      color: rgb(79, 85, 97) !important;
          font-size: 4vw !important;
}

p {
  padding: 10px !important;
  color: rgb(111, 119, 135) !important;
  font-size: 4vw !important;
    padding: 0 20px;
    font-weight: 700;
    font-size: 12px;
    margin: 5px 0 0 0;
}


h1, h2{
  color: rgb(111, 119, 135) !important;
  font-size: 4vw !important;
  margin: 20px auto 0;
  width: 200px;
  text-align: center;
}
#wrapper{
  position: absolute;
  width: 320px;
  left: 50%;
  margin-left: -160px;
  top: 50%;
  margin-top: -75px;
}

/* === Sign in Form === */
#signin {
  height: 90px;
  width: 300px;
  border-radius: 8px;
  position: relative;
}
#signin::before {
  display: block;
  position: relative;
  height: 2px;
  background: rgb(145 169 197);
  content: '';
  top: 44px;
  margin-left: 20px;
  z-index: 1;
}
#signin input:first-of-type{
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}
#signin input:last-of-type{
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
}
#signin  input[type="text"], #signin  input[type="password"], #signin button[type="submit"]{
    background: rgb(255 255 255);
    box-shadow: inset -100px -100px 0 #fff;
        color: rgb(145 169 197);
}
#signin  input[type="text"], #signin  input[type="password"]{
  position: relative;
  display: block;
  width: 280px;
  height: 45px;
  border: 0;
  outline: 0;
  top: -2px;
  padding: 0 0 0 20px;
  font-weight: 700;
}
#signin  input[type="text"]:focus, #signin  input[type="password"]:focus{
      color: rgb(145 169 197);
}
#signin button[type="submit"]{
  margin: 0 !important;
  display: block;
  position: absolute;
  width: 52px;
  height: 52px;
  color:  rgb(145 169 197);
  border-radius: 50px;
  outline: 0;
  z-index: 2;
  top: 19px;
  right: -24px;
  border: 6px solid rgb(145 169 197);
  font-size: 25px;
  text-indent: 0px;
  padding-left: 9px;
  padding-bottom: 3px;
  text-align: center;
}
#signin button[type="submit"]:hover{
  color: rgb(0, 126, 165);
  text-shadow: 0 0 10px rgb(0, 126, 165);
  cursor: pointer;
}
#signin p {
  color: rgb(79, 85, 97);
  padding: 0 20px;
  font-weight: 700;
  font-size: 12px;
  margin: 5px 0 0 0;
}
#signin p > a{
  color: rgb(111, 119, 135);
  text-decoration: none;
}
#signin p > a:hover{
  border-bottom: 1px solid;
}



#nav {
  display: none;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
