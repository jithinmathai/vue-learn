Vue.createApp({
    data() {
      return {
        name: 'Jithin Mathai',
        age: 30,
        image: "https://miro.medium.com/max/1400/1*7OCwu--TWqVluPMsZdzWKw.webp"
      }
    },
    methods: {
        random() {
            return Math.random();
        }
    }

  }).mount('#assignment')