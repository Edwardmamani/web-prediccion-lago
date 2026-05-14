import { sigmoid, relu, linear } from "./Activacion.js";
class Neuron {
    constructor(weights, bias, activation) {

        this.weights = weights;
        this.bias = bias;
        // activacion puede ser string o funcion, si es string, se debe convertir a función
        this.activation = typeof activation === "function" ? activation : this.loadActivation(activation);
    }
    activate(inputs) {
        return this.activation(this.forward(inputs));
    }
    forward(inputs) {
        return this.weights.reduce((sum, weight, index) => sum + weight * inputs[index], 0) + this.bias;
    }
    loadActivation(activation) {
        // si es un string, se debe convertir a función
        if(activation === "sigmoid") {
            activation = sigmoid;
        } else if(activation === "relu") {
            activation = relu;
        } else {
            activation = linear;
        }
        return activation;
    }
}
export { Neuron };