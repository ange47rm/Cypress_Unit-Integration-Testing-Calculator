import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })

  it('should subtract 4 from 7 and get 3', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('multiply 3 by 5 and get 15', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it('divide 21 by 7 and get 3', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('concatenate multiple number button clicks', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0;
    wrapper.vm.runningTotal = 0;
    wrapper.vm.newTotal = true;
    wrapper.vm.numberClick('2');
    wrapper.vm.numberClick('3');
    wrapper.vm.numberClick('7');
    expect(wrapper.vm.runningTotal).to.equal(237)
  })

  it('chain multiple operations together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.runningTotal = 25;
    wrapper.vm.previousTotal = 0;
    wrapper.vm.newTotal = false;
    wrapper.vm.operatorClick('*');
    wrapper.vm.numberClick('4');
    wrapper.vm.operatorClick('-');
    wrapper.vm.numberClick('40');
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(60)
  })

  it('clear the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.runningTotal = 50;
    wrapper.vm.previousTotal = 0;
    wrapper.vm.newTotal = false;
    wrapper.vm.operatorClick('-');
    wrapper.vm.numberClick('7');
    wrapper.vm.clearClick();
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(45)
  })


})
