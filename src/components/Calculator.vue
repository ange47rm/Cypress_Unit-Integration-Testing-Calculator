<template>

      <div class="buttons">
        <div class="one">
          <button id='clear' class="clear" @click="clearClick()">C</button>
        </div>
        <div class="two">
          <button id="number7" @click="numberClick('7')">7</button>
          <button id="number8" @click="numberClick('8')">8</button>
          <button id="number9" @click="numberClick('9')">9</button>
          <button id="operator_divide" @click="operatorClick('/')">/</button>
          <button id="number4" @click="numberClick('4')">4</button>
          <button id="number5" @click="numberClick('5')">5</button>
          <button id="number6" @click="numberClick('6')">6</button>
          <button id="operator_multiply" @click="operatorClick('*')">x</button>
          <button id="number1" @click="numberClick('1')">1</button>
          <button id="number2" @click="numberClick('2')">2</button>
          <button id="number3" @click="numberClick('3')">3</button>
          <button id="operator_subtract" @click="operatorClick('-')">-</button>
          <button id="hidden">.</button>
          <button id="number0" @click="numberClick('0')">0</button>
          <button id="operator_equals" @click="operatorClick('=')">=</button>
          <button id="operator_add" @click="operatorClick('+')">+</button>
        </div>
        </div>

</template>

<script>

import {eventBus} from '@/main.js';

export default {
  name: "calculator",
  methods: {
    numberClick: function (number) {
      eventBus.$emit('number-clicked', number)
    },
    clearClick: function () {
      eventBus.$emit('clear-clicked')
    },
    operatorClick: function (operator) {
     eventBus.$emit('operator-clicked', operator)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


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

.butttons button .clear {
  flex-grow: 0.5;
}

.one {
  display: flex;
  flex-grow: 1;
}

#hidden {
  visibility: hidden;
}


</style>
