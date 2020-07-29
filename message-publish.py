import paho.mqtt.client as mqtt
import time

def on_connect(client, userdata,flags, rc):
    print("Connected with result code "+str(rc))
    
   

    

def on_message(client, userdata, msg):
    print(str(msg.payload.decode()))

client = mqtt.Client()
client.on_connect = on_connect

client.connect("mqtt.eclipse.org", 1883, 60)

while True: 
    message = input("Leave a message: ")
    client.publish("precy/samples", message)

client.loop() 