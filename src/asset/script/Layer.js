class Layer {
    // son de array de tipo Neuron
    constructor(neurons) {
        this.neurons = neurons;
    }
    forward(inputs) {
        return this.neurons.map(neuron => neuron.activate(inputs));
    }
}
export { Layer };