
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

function dsigmoid(y) {
    return y * (1 - y);
}
function relu(x) {
    return Math.max(0, x);
}
function drelu(y) {
    return y > 0 ? 1 : 0;
}
function linear(x) {
    return x;
}
function dlinear(y) {
    return 1;
}
export { sigmoid, dsigmoid, relu, drelu, linear, dlinear };