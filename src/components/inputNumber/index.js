import PyInputNumber from './src/InputNumber.vue';

PyInputNumber.install = function inputNumber(Vue) {
  Vue.component(PyInputNumber.name, PyInputNumber);
};

export default PyInputNumber;

