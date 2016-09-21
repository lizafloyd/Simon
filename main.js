var compArray = []
var userArray = []
var level = 0
var timeoutID

function flip(id, delay){
    setTimeout(function(){
          $('#' + id).addClass('active')
      }, 1000*delay)
    setTimeout(function(){
          $('#' + id).removeClass('active')
      }, 500+1000*delay)
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
