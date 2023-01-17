function getDaysCount(start, end) {
    return Math.round((end - start) / 1000 / 3600 / 24);
}

function getDaysText(days) {
    let text = 'дней'
    if (days % 10 === 1) {
        text = 'день'
    }
    if ((days % 10 === 2 || days % 10 === 3 || days % 10 === 4) && (days % 100 < 10 || days % 100 > 20)) {
        text = 'дня'
    }
    return text;
}

let start = '2021-12-01';
let now = new Date((new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate());
days = getDaysCount(new Date(start), now);
$('.header_title_days').text(days + ' ' + getDaysText(days));


let holidayName = 'день всех влюбленных'
let holidayDate = '2023-02-14'
days = getDaysCount(now, new Date(holidayDate))
$('.holidayName').text(holidayName);
$('.holidayDate').text('через ' + days + ' ' + getDaysText(days))

