<template>
	<div>

    <transition name="fade">
        <div class="box" v-if="Loading" style="
  background-color: #d3deea;
  width: 96vw;
  height: 97vh;
">
        
            <div style="position: absolute;left: 50%; right: 50%;top: 50%;bottom: 50%;">
            <div class="hourglass"></div>
            </div>
        </div>
</transition>

        

        <div>
       
        </br>
        <div v-if="Lyear < 0">Вы уже на пенсии.</div>
        
        <div v-else >
            <div>
                <p>До пенсии: </p>
                </br>
                <div style="
                  
                        display: flex;
                    "> 
                    <p class="Chisla">{{Lyear}}</p><h2>{{nameyear}}</h2>
                    <p class="Chisla">{{Lmonth}}</p><h2>{{namemonth}}</h2>
                    <p class="Chisla">{{Lday}}</p><h2>{{nameday}}</h2>

                </div>
            </div>
        </div>
        

        <hr/>
        <button style="
    margin-top: 62vh !important;
"class="bac" @click="LogOut">Выйти</button>
        <button style="
    margin-top: 62vh !important;
"@click="Change">Изменить данные</button>
        
     

        </div>
     </div>
</template>


<script>



export default {
  name: 'Home',
  data: () => ({
    name: '',
    year: 0,
    month: 0,
    day: 0,
    sex: 0,
    bYear: '',

    nameyear: "",
    namemonth: "",
    nameday: "",
    Loading: false,
    Lyear: 0,
    Lmonth: 0,
    Lday: 0
  }),

  async mounted() {
       
    this.Start()
    
  },
  methods: {
    async Start() {
        this.Loading = true
        this.name = this.$store.getters.Name
        await this.$store.dispatch('Updateresult', this.name)  
        
        this.year = await this.$store.getters.year
        this.month = await this.$store.getters.month
        this.day = await this.$store.getters.day
        this.sex = await this.$store.getters.sex


        console.log("ALLRRES", name, this.year, this.month, this.day, this.sex)
        await this.Count()
        this.text()
    },
    text() {
        
        
        let count = this.Lyear % 100;
        
        if (count >= 5 && count <= 20) {
            this.nameyear = 'лет';
        } 
        else {
            count = count % 10;

            if (count == 1) {
                this.nameyear = 'год';
            } 
            else if (count >= 2 && count <= 4) {
                this.nameyear = 'года';
            } 
            else {
                this.nameyear = 'лет';
            }
        }

        let count2 = this.Lmonth % 10;

        if(count2 == 1) {
            this.namemonth = "месяц"
        }
        else if(count2 == 2 || count2 == 3 || count2 == 4)
        {
            this.namemonth = "месяца"
        }
        else {
            this.namemonth = "месяцев"
        }

        let count3 = this.Lday % 10;
       
        if(count3 == 1) {
            this.nameday = "день"
        }
        else if(count3 == 2 || count3 == 3 || count3 == 4)
        {
            this.nameday = "дня"
        }
        else {
            this.nameday = "дней"
        }

        
    },
    diffBetweenDateAndCurrentDate(yearGeted, monthGeted, dayGeted)
    {
        console.log(yearGeted, monthGeted, dayGeted)
        let currDate = new Date();

        console.log(currDate)

        let year = yearGeted - currDate.getFullYear();
        let month = monthGeted - currDate.getMonth();
        let day = dayGeted - currDate.getDate() - 1;

        if (day <= 0)
            month--;

        if (month <= 0)
        {
            month += 12;
            year--;
        }
        if (day <= 0)
        {
            let isPrime = false;
            if (year % 100 != 0 && year % 4 == 0) isPrime = true;

            if (month == 2 && isPrime) day += 29;
            else if (month == 2 && !isPrime) day += 28;
            else if (month <= 7 && month % 2 == 0) day += 30;
            else if (month <= 7 && month % 2 != 0) day += 31;
            else if (month > 7 && month % 2 == 0) day += 31;
            else day += 30;
        }


        
        this.Lyear = year
        this.Lmonth = month
        this.Lday = day
       
    },
    defaultPension(bYear, defPensionYear, defPensionMonth, forMan)
    {
        if (forMan)
        {
            if (bYear < 1960)
            {
                defPensionYear += 60;
                defPensionMonth += 6;
            }
            else if (bYear < 1961)
            {
                defPensionYear += 61;
                defPensionMonth += 6;
            }
            else if (bYear < 1962) defPensionYear += 63;
            else if (bYear < 1963) defPensionYear += 64;
            else defPensionYear += 65;
        }
        else
        {
            if (bYear < 1964)
            {
                defPensionYear += 55;
                defPensionMonth += 6;
            }
            else if (bYear < 1965)
            {
                defPensionYear += 56;
                defPensionMonth += 6;
            }
            else if (bYear < 1966) defPensionYear += 58;
            else if (bYear < 1967) defPensionYear += 59;
            else defPensionYear += 60;
        }

        if (defPensionMonth > 12)
        {
            defPensionYear++;
            defPensionMonth -= 12;
        }



        this.bYear = bYear
        this.year = defPensionYear
        this.month = defPensionMonth

        
    },
    async Count(){
        console.log("WOWOWW")
        let forMan = false

        if(this.sex == "Мужской")
        {
            forMan = true
        }
        else {
            forMan = false
        }


        let first = Number.parseInt(this.year);

        let second = Number.parseInt(this.year);

        let third = Number.parseInt(this.month);



        this.defaultPension(first, second, third, forMan)

        

        

        this.diffBetweenDateAndCurrentDate(this.year, this.month, this.day)

        this.Loading = false
    },
    LogOut(){
        this.$router.push({ path: "/" })
    },
    Change(){
        this.$router.push({ path: "/col" })
    },
    
  }
}
</script>


<style scope>

</style>