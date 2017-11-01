import sayHello from './lib/sayHello.js';
import $ from 'jquery';

$(document).ready(function() {
  let select = $('.blabla');
  let placeholder = $('.placeholder');
  placeholder.attr('placeholder', 'Город*');
  select.hide();
  placeholder.show();
  let optionsList = select.find('option');
  let optionsContainer = $('.options');
  for (let i = 0; i < optionsList.length - 1; i++) {
    let optionHtml = $(optionsList[i]).html();
    optionsContainer.append(`<li>${optionHtml}</li>`);
  }
  placeholder.on('click', function(event) {
    event.stopPropagation();
    optionsContainer.toggle();
  });

  optionsContainer.on('click',function(event) {
    event.stopPropagation();
    optionsContainer.toggle();
    let target = event.target;
    optionsList.removeAttr('selected');
    placeholder.attr('value', $(target).html());
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
