let start = document.querySelector('.start');
let end = document.querySelector('.end');
let value = document.querySelector('.calc');
let output = document.querySelector('.output');
value.addEventListener('click', calculate);
function calculate() {
    let start_values = divideString(start.value);
    let end_values = divideString(end.value);
    let minuteDifference = calcMinutes(end_values[1], start_values[1]);
    let hourDifference = calcHours(end_values[0], start_values[0]);
    let minutes = hourDifference + minuteDifference;
    toHours(minutes);
}
function divideString(string) {
    let split_start = string.substring(0, 2);
    let split_end = string.substring(2);
    return [parseInt(split_start), parseInt(split_end)];
}
function calcMinutes(end, start) {
    return end - start;
}
function calcHours(end, start) {
    return 60 * (end - start);
}
function toHours(min) {
    let hours = (min / 60);
    let rhours = Math.floor(hours);
    let mins = (hours - rhours) * 60;
    let rminutes = Math.round(mins);
    let output_str = rhours + " час(а) и " + rminutes + " минут.";
    output.textContent = output_str;
}