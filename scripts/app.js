console.log('JS loaded!');
const app = Vue.createApp({
    data() {
        return {
 
                firstName: 'lakshmi',
                lastName:'nair',
                age: '26',
                avatar:'',
                City: 'London',
                Province:'Ontario',
                Country:'Canada',
                Word: 'Bottle',
                Phoenetic:'',
                Description:''
            };
        },
    computed: {
        FullName(){
            return `${this.firstName}${this.lastName}`;        
        },
    },
    methods: {
        UserProfileData() {
            fetch('https://comp6062.liamstewart.ca/random-user-data ', {
            .then(response => {
                return response.json();
            })

            .then(postsData => {
                this.posts = postsData;
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
           WeatherData() {
            fetch('https://comp6062.liamstewart.ca/weather-data', {
            .then(response => {
                return response.json();
            })

            .then(postsData => {
                this.posts = postsData;
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
        DictionaryData() {
            fetch('https://comp6062.liamstewart.ca/api/define?word=Bottle ', {
            .then(response => {
                return response.json();
            })

            .then(postsData => {
                this.posts = postsData;
            })
            .catch(error => {
                console.log(error);
            })
        }
     },
    created() {
        this.UserProfileData(),
        this.WeatherData(),
        this.DictionaryData(),
        }
    }
});
app.mount('#app')
