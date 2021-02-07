<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <div class="calculator">
      <div class="display">{{ runningTotal }}</div>
      <calculator />
    </div>
  </div>
</template>

<script>

import Calculator from '@/components/Calculator.vue';
import {eventBus} from '@/main.js';

export default {
  name: "app",
  data() {
    return {
      msg: "Calculator",
      previousTotal: 0,
      runningTotal: 0,
      previousOperator: null,
      newTotal: true,
    };
  },
  components: {
    'calculator': Calculator
  },
  mounted(){
    eventBus.$on('number-clicked', number => this.numberClick(number))
    eventBus.$on('clear-clicked', () => this.clearClick())
    eventBus.$on('operator-clicked', operator => this.operatorClick(operator))

  },
  methods: {
    numberClick: function (number) {
      if (this.runningTotal === 0 || this.newTotal) {
        this.runningTotal = "";
        this.newTotal = false;
      }
      // concatenate the clicked number to the running total
      this.runningTotal = parseFloat("" + this.runningTotal + number);
    },
    clearClick: function () {
      if (this.runningTotal == 0) {
        this.previousOperator = null;
        this.previousTotal = null;
      }
      this.runningTotal = 0;
    },
    operatorClick: function (operator) {
      // if there was a previous operator recorded as having been clicked, perform
      // the operation for the previous operator
      if (this.previousTotal && this.previousOperator) {
        switch (this.previousOperator) {
          case "+":
            this.add(this.runningTotal);
            break;
          case "-":
            this.subtract(this.runningTotal);
            break;
          case "*":
            this.multiply(this.runningTotal);
            break;
          case "/":
            this.divide(this.runningTotal);
            break;
        }
      }

      // if the 'equals' button was clicked, clear the previous operator, otherwise
      // record what the previous operator was
      if (operator == "=") {
        this.previousOperator = null;
      } else {
        this.previousOperator = operator;
      }
      // replace the previous total with the current running total and flag that a
      // new total has been calculated

      this.previousTotal = this.runningTotal;
      this.newTotal = true;
    },
    add(number) {
      this.runningTotal = parseFloat(this.previousTotal) + parseFloat(number);
    },
    subtract(number) {
      this.runningTotal = parseFloat(this.previousTotal) - parseFloat(number);
    },
    multiply(number) {
      this.runningTotal = parseFloat(this.previousTotal) * parseFloat(number);
    },
    divide(number) {
      if (number) {
      this.runningTotal = parseFloat(this.previousTotal) / parseFloat(number);
    } else {
      this.runningTotal = 'Cannot divide by zero';
    }
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

.calculator {
  background-color: #dedede;
  border: 1px solid #dedede;
  width: 20em;
  height: 30em;
  margin: 0 auto;
  text-align: left;
  border-radius: 5px;
}

.display {
  padding: 15px;
  margin: 15px;
  text-align: right;
  font-size: 1.5em;
  background-color: #fefefe;
  height: 1.2em;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}

.buttons button {
  flex-grow: 1;
  background-color:grey;
  font-size: 1.1em;
  color: white;
  width: 3.5em;
  height: 3.5em;
  padding: 5px;
  margin: 5px;
  border-radius: 10px;
}



.one {
  display: flex;
  flex-grow: 1;
}
</style>