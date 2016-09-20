var compArray = []
var userArray = []
var level = 0

function flip(id, delay){
  setTimeout(function(){
        $('#' + id).addClass('active')
    }, 1000*delay)
    setTimeout(function(){
        $('#' + id).removeClass('active')
    }, 500+1000*delay)
  }

$('.circle').on('click', pick)

function pick(event) {
  event.preventDefault()
  var pick = $(this).attr('id')
  userArray.push(pick)
  console.log(userArray)
  flip(pick, 0)
  setTimeout(function(){
        $(pick).addClass('active')
    }, 1000)
  compare()
}

$('#play').on('click', play)

function play(){
    var colors = ['pink', 'lightblue', 'yellow', 'purple', 'green']
    var random = colors[Math.floor(Math.random() * colors.length)]
    compArray.push(random)
    console.log(compArray)
    animate()
}

function compare() {
  if (compArray.length == userArray.length) {
  setTimeout(function(){
    var same =  compArray.every(function(element, index){
      return element === userArray[index]
    })
    if (same == true) {
      nextLevel()
    } else {
      lose()
    }
  }, 800*level)
}
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
  var score = localStorage.getItem('value')
  console.log(score)
  console.log('test')
  // debugger
  $('.score').attr('value', score)
  // debugger
  compArray = []
  userArray = []
}
