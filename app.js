const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoal: '',
      buttonPressed: false,
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoal);
      this.enteredGoal = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
    pressButton() {
      this.buttonPressed = !this.buttonPressed;
    },
  },
});

app.mount('#assignment');
