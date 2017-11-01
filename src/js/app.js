import sayHello from './lib/sayHello.js';
import $ from 'jquery';

$(document).ready(function() {
  let select = $('.blabla');
  let placeholder = $('<option />');
  placeholder.html('Город*');
  placeholder.attr('selected', 'selected');
  placeholder.attr('hidden', 'hidden');
  placeholder.attr('disabled', 'disabled');
  select.append(placeholder);
  let optionsList = select.find('option');
  optionsList.hide();
  let optionsContainer = $('.options');
  for (let i = 0; i < optionsList.length - 1; i++) {
    let optionHtml = $(optionsList[i]).html();
    optionsContainer.append(`<li>${optionHtml}</li>`);
  }
  select.on('click', function(event) {
    event.stopPropagation();
    optionsContainer.toggle();
  });

  optionsContainer.on('click',function(event) {
    event.stopPropagation();
    optionsContainer.toggle();
    let target = event.target;
    optionsList.removeAttr('selected');
    for (let i = 0; i < optionsList.length - 1; i++) {
      if ($(target).html() === $(optionsList[i]).html()) {
        $(optionsList[i]).attr('selected', 'selected');
      }
    }

  });
  $(window).click(function() {
    optionsContainer.hide();
  });

});


sayHello();
