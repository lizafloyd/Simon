var compArray = []
var userArray = []
var level = 0
var time

function flip(id, delay){
  setTimeout(function(){
        $('#' + id).addClass('active')
    }, 1000*delay)
 if (delay < 10){
      setTimeout(function(){
          $('#' + id).removeClass('active')
      }, 500+1000*delay)
    } else {
      setTimeout(function(){
          $('#' + id).removeClass('active')
      }, 500+250*delay)
    }
  }

$('.circle').on('click', pick)

function pick(event) {
  event.preventDefault()
  clearTimeout(time)
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

function timeout(){
  time = setTimeout(function (){
  document.getElementById('lose').click()
}, 10000)
}

function animate(){
  for (i=0; i<compArray.length; i++){
    flip(compArray[i],i)
    timeout()
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
  $('.score').attr('value', score)
  compArray = []
  userArray = []
}
