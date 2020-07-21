console.log("index.js");

// var client  = mqtt.connect({ host:'test.mosquitto.org', port: 8081})
var client  = mqtt.connect({ host:'mqtt.eclipse.org/mqtt', port: 443})

client.on('connect', function () {
    console.log('connected')
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
//   client.end()
})