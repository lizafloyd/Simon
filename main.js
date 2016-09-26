// AM: Consider what this would look like if you wrapped these global variables and functions in an object (not necessarily using classes).

var compArray = []
var userArray = []
var level = 0
var timeoutID

function flip(id, delay){
    // AM: +1 for making the timing dynamic!
    setTimeout(function(){
          $('#' + id).addClass('active')
      }, 1000*delay)
    setTimeout(function(){
          $('#' + id).removeClass('active')
      }, 500+1000*delay)
    // AM: Based on our Slack convo, looks like you can get rid of this extra `setTimeout`!
    setTimeout(function(){
          $('#' + id).removeClass('active')
      }, 500+250*delay)
  }

$('.circle').on('click',pick)

function pick(event) {
  event.preventDefault()
  clearTimeout(timeoutID)
  var pick = $(this).attr('id')
  userArray.push(pick)
  flip(pick, 0)
  setTimeout(function(){ $(pick).addClass('active')}, 1000)
  compare()
}

$('#play').on('click', play)

function play(){
    var colors = ['pink', 'lightblue', 'yellow', 'purple', 'green']
    var random = colors[Math.floor(Math.random() * colors.length)]
    compArray.push(random)
    animate()
    timeout()
}

// AM: Noticed that in order to lose, you have to click on whatever number of circles is associated with a particular round.
// AM: Any thoughts as to how you can make it so that the moment you click on an incorrect circle, you then lose?
function compare() {
  if (compArray.length == userArray.length) {
  setTimeout(function(){
    compArray.every(function(element, index){
      return element === userArray[index] }) ? nextLevel() : lose()
  }, 700*level)
}
}

function timeout(){
    timeoutID = setTimeout(function (){
      lose()
    }, 3000*(level+1))
}

function animate(){
  for (i=0; i<compArray.length; i++){
    flip(compArray[i],i)
  }
}

function nextLevel(){
  level += 1
  $('.score').attr('value', level)
  // AM: +1 using localStorage. I can see the level I got to if I explore in dev tools. Would be cool to see this information displayed in the browser (e.g., "Your last score was: ....", "You did better than your last attempt by x points")
  localStorage.setItem('value', level)
  userArray = []
  play()
}

function lose(){
  document.getElementById('lose').click()
  $('.score').attr('value', localStorage.getItem('value'))
  compArray = []
  userArray = []
}
// AM: It all comes under 100 lines. Nice!
// AM: Props on keeping your code very readable too.
