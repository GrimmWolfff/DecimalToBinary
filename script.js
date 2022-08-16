const input = document.querySelector('.input');
const output = document.querySelector('.output');
const submit = document.querySelector('input');

const numToBinary = n => {
    if (n < 0) {
        n = 0xFFFFFFFF + n + 1
    }
    return parseInt(n, 10).toString(2);
}
const toBinary = char => `0${numToBinary(char.charCodeAt(0))} `;


submit.addEventListener('click', () => {
    var res = '';
    input.value.split``.forEach(v => {
        if ('0' <= v && v <= '9') {
            v = Number(v);
        }
        res += toBinary(v);
    });
    output.value = res;
});