const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date = new Date();

let curDate = days[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()] + ', ' + date.getFullYear();

$('.datepicker').attr('value', curDate);

$('.datepicker').on('click', function () {
  $('.datepicker').pickadate({
    format: 'dddd, dd mmm, yyyy',
    formatSubmit: 'yyyy/mm/dd',
    hiddenPrefix: 'prefix__',
    hiddenSuffix: '__suffix',
    closeOnSelect: true,
    closeOnClear: true,
    clear: '',
    max: new Date(date.getFullYear(), date.getMonth(), date.getDate())
  });
})