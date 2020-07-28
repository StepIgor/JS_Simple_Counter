//ignore logo-text touch
eid('logo-text').addEventListener('click', function(e){
  e.preventDefault();
});

//counter var
var count = 0;

//press add
eid('plus').addEventListener('click', function(e){
  count++;
  eid('counter_num').innerHTML = count;
  eid('tap_sound').play();
});

//press reset button
eid('reset_but').addEventListener('click', function(e){
  e.preventDefault();
  count = 0;
  eid('counter_num').innerHTML = count;
});
