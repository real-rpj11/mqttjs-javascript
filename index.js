
// var client  = mqtt.connect({ host:'test.mosquitto.org', port: 8081})
// or
// var client  = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')

// var client  = mqtt.connect({ host:'mqtt.eclipse.org/mqtt', port: 443})
// or
var client = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')

client.on('connect', function () {
  console.log('connected')
  client.subscribe('precy/messages', function (err) {
    if (!err) {
      client.publish('precy/messages', 'Hello mqtt')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  //   client.end()
})


$(document).ready(function () {

  $('#pub-button').click(function push () {
    var topic = $('#pub-input').val();
    var payload = $('#pub-input-payload').val();
    if (topic == "" && payload == "") {
      client.publish("", "");
      alert("Should have an input in the two");
    } else {
      client.publish(topic, payload, function (err) {
        if (err) {
          alert("An error occur")
        } else {
          alert("Published successfully");
        }
        var row = $("<tr>");

        $("<td>").text(topic).appendTo($(row));
        $("<td>").text(payload).appendTo($(row));

        $("#tbl-body").append($(row));

        topic.value = "";
        payload.value = "";
      })
    }


  })

  $('#sub-button').click(function (e) {
    var topic = $('#pub-input').val();
    var subInput = $('#sub-input').val();
    var payload = $('#pub-input-payload').val();

    if (subInput == topic) {
       
    } else {
      alert("Error")
    }
  })
})