var bidding = require('../bidding')
bidding.get('7ca1cf71-bc42-4525-8a1d-a6f3e144658c', 'PARTICIPANT', null, function(err, bid){
  console.log(err)
  console.log(bid)
})

bidding.get('7ca1cf71-bc42-4525-8a1d-a6f3e144658c', 'COMMITTEE', {skip : 0, count : 0}, function(err, bid){
  console.log(err)
  console.log(bid)
})

bidding.get('7ca1cf71-bc42-4525-8a1d-a6f3e144658', 'PARTICIPANT', null, function(err, bid){
  console.log(err)
  console.log(bid)
})

