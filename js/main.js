const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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

const createFileInput = (index) => {
    let div = document.createElement('div');
    div.setAttribute('class', 'form-field');
    let label = document.createElement('label');
    label.setAttribute('class', 'newspaper-form__label');
    label.setAttribute('for', `page-${index}`);
    label.innerHTML = `Page ${index}:`;
    div.appendChild(label);
    let input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('id', `page-${index}`);
    input.setAttribute('name', `page[]`);
    div.appendChild(input);
    document.getElementById('fileInputs').appendChild(div);
}

$('#num-pages').on('input', function() {
    let numPages = document.getElementById('num-pages').value;
    $('#fileInputs').html('');

    for (var i = 1; i <= numPages; i++) {
        createFileInput(i);
    }
})



