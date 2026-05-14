class NeuralNetwork {
    // son de tipo Layer
    constructor(input_layer, output_layer) {
        this.input_layer = input_layer;
        this.output_layer = output_layer;
    }
    forward(inputs) {
        let h_output = this.input_layer.forward(inputs);
        return this.output_layer.forward(h_output);
    }
}
export { NeuralNetwork };