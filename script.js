// Set table and goal according to user input

// 1. Get user input
var number, goal;
$('#submit').on('click', function() {
  $('#submit').addClass('hide-element');
  $('#submit').removeClass('remove-element');
  number = $('#number').val();
  goal = $('#goal').val();
  if (number > 0) {
    setTable(number);
    createObject(number);
    getInput();
  }
  if (goal.length > 0) {
    setGoal(goal);
  }
});
// 2. Set table
function setTable(number) {
  $('#table').remove(); // remove table if exists
  $('#table-container').append('<table id="table" class="table">'); // create new table
  var counter = 1;
  var container;
  for (var i = 0; i < number; i++) {
    // create number of rows as num of weeks
    container = $('<tr/>');
    for (var x = 0; x < 7; x++) {
      // create 7 days for each row/week
      container.append(
        "<td class='box'>Day " +
          Number(x + counter) +
          "<input class='daily-goal' type='text' placeholder='Daily Goal'><p class='p-goal hide-element'></p></td>"
      );
      $('#table').append(container); // append week to table
    }
    counter += 7; // jump 7 days ahead (for counting Day #)
  }
  // show and hide table
  $('#table').addClass('show-element');
  $('#table').removeClass('hide-element');
}

// 3. Set goal
function setGoal(goal) {
  $('#goalTitle').text($('#goal').val() + ". I'm gonna nail it!");
  $('#goalTitle').addClass('show-element');
  $('#goalTitle').removeClass('hide-element');
}

// 4. create object with number of weeks
function createObject(number) {
  var weeksObject = {};
  for (var i = 0; i < number; i++) {
    weeksObject['week' + i] = {
      day1: true,
      day2: true,
      day3: true,
      day4: true,
      day5: true,
      day6: true,
      day7: true
    };
  }
  console.log(weeksObject);
  var weeksCount = Object.keys(weeksObject).length;
  console.log(weeksCount);
}

// Show and hide submit button
$('#number, #goal').on('click', function() {
  $('#submit').addClass('show-element');
  $('#submit').removeClass('hide-element');
});

// set daily goals
function getInput() {
  $('.daily-goal').keydown(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      var goal = $(this).val();
      if (goal.length > 15) {
        $('#message').text(
          'Please describe your goal in less than 15 characters'
        );
      }
      $(this)
        .next('p')
        .text(goal)
        .removeClass('hide-element')
        .addClass('show-element');
      $(this).addClass('hide-element');
    }
  });
}

// TODO:
// Local Storage - to store all user input
// send data to local storage
function storeWeeks(num) {
  storedData = localStorage.setItem('num', JSON.stringify(num));
}

// retrieve data from local storage
// function getWeeks() {
//   if (!localStorage.getItem('num')) {
//     console.log('no fitness goals yet!');
//     // show option to add goals
//   } else {
//     num = JSON.parse(localStorage.getItem('num'));
//     showHabits(num);
//   }
// }
// add messages for input and then hide message
// design
