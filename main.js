
// $('#pink').on("click", toggle)
//
// function toggle() {
//   $(this).removeAttr("id")
//   console.log(this)
// }

var compArray = []
var userArray = []
$('#play').on('click', play)

function play() {

  var colors = ['pink', 'lightblue', 'yellow', 'purple', 'green']
  var random = colors[Math.floor(Math.random() * colors.length)]


  compArray.push(random)
  console.log(compArray)
}
$('.circle').on('click', select)
// console.log(userArray)
function select (event) {
  event.preventDefault()
  var pick = $(this).attr('id')
  userArray.push(pick)
  console.log(userArray)
}
