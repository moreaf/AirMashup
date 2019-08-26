import sched, time
import simplekml
from opensky_api import *
from threading import Thread
from datetime import datetime
import time
import math
import sys
from dotenv import load_dotenv
import os

load_dotenv()

class Aircraft():
    def __init__(self,icao24,callsign,lat,lon,alt,hdg,hvel,vvel):
        self.icao24 = icao24 if icao24 is not None else None
        self.alt = alt if alt is not None else 0
        self.lat = lat if lat is not None else 0
        self.lon = lon if lon is not None else 0
        self.callsign = callsign if callsign is not None else None
        self.hdg = hdg if hdg is not None else 0
        self.hvel = hvel if hvel is not None else 0
        self.vvel = vvel if vvel is not None else 0


drone = Aircraft('icao24','callsign',41.605363,0.606278,0,0,0,13)



def getPosition1s(aircrafts):
    R = 6371000 #metres

    i = 0
    for aircraft in aircrafts:
        lat = math.radians(aircraft.lat)
        lon = math.radians(aircraft.lon)
        hdg = math.radians(aircraft.hdg)

        lat2 = math.asin(math.sin(lat)*math.cos(aircraft.hvel/R) + math.cos(lat)*math.sin(aircraft.hvel/R) * math.cos(hdg))
        lon2 = lon + math.atan2(math.sin(hdg)*math.sin(aircraft.hvel/R)*math.cos(lat),math.cos(aircraft.hvel/R)-math.sin(lat)*math.sin(lat2))

        aircraft.lat = math.degrees(lat2)
        aircraft.lon = math.degrees(lon2)
        aircraft.alt += aircraft.vvel

    return aircrafts

def getAircraft(lat,lon,alt,hdg,hvel,vvel):
    global drone
    drone.lat = lat
    drone.lon = lon
    drone.alt = alt
    drone.hdg = hdg
    drone.hvel = hvel
    drone.vvel = vvel

    drone = getPosition1s([drone])[0]
    updateDrone(drone.lat,drone.lon,drone.alt)

    # aircrafts=[]
    #
    # aircrafts.append(Aircraft("test","DroneWing",lat,lon,alt,hdg,hvel,vvel))

    # update_kml(aircrafts)

    print('Done API 0s')
    # print("Total number of aircrafts:",len(aircrafts))

    time.sleep(1)

    drone = getPosition1s([drone])[0]
    updateDrone(drone.lat,drone.lon,drone.alt)

    # getPosition1s(aircrafts)
    # update_kml(aircrafts)

    print('Done 1s')

    time.sleep(1)

    # getPosition1s(aircrafts)
    # update_kml(aircrafts)
    drone = getPosition1s([drone])[0]
    updateDrone(drone.lat,drone.lon,drone.alt)

    print('Done 2s')

    time.sleep(1)


    # getPosition1s(aircrafts)
    # update_kml(aircrafts)
    drone = getPosition1s([drone])[0]
    updateDrone(drone.lat,drone.lon,drone.alt)


    print('Done 3s')

    time.sleep(1)

    # getPosition1s(aircrafts)
    # update_kml(aircrafts)
    drone = getPosition1s([drone])[0]
    updateDrone(drone.lat,drone.lon,drone.alt)

    print('Done 4s')

    time.sleep(1)

def update_kml(aircrafts):
    kml = simplekml.Kml()
    for aircraft in aircrafts:
        pnt = kml.newpoint()
        pnt.name = aircraft.callsign
        #pnt.description = "Time corresponding to 12:00 noon, Eastern Standard Time: {0}".format(time)
        pnt.coords = [(aircraft.lon, aircraft.lat, aircraft.alt)]
        pnt.altitudemode = simplekml.AltitudeMode.relativetoground
        pnt.style.iconstyle.scale = 1
        pnt.style.iconstyle.heading = aircraft.hdg
        pnt.style.iconstyle.icon.href = 'http://'+os.getenv("VUE_APP_API_IP")+':'+os.getenv("VUE_APP_API_PORT")+'/images/reddrone.png'
    path = os.path.abspath(__file__).split('CODE')[0]+'/DATABASE/dynamicKML/DroneWing.kml'
    kml.save(path)
    time.sleep(0.5)
    send_kml(path)

def updateDrone(lon,lat,alt):
    global drone
    print(alt,'func')
    url = 'http://'+os.getenv("VUE_APP_API_IP")+':'+os.getenv("VUE_APP_API_PORT")+'/kml/builder/editCoodPlacemark'
    multipart_form_data = {
        'id' : 'drone',
        'name' : 'drone2',
        'latitude' : lon,
        'longitude' : lat,
        'range' : alt,
    }
    response = requests.put(url, data=multipart_form_data, files={'file':''})
    print(response)

def send_kml(kml_file):
    url = 'http://'+os.getenv("VUE_APP_API_IP")+':'+os.getenv("VUE_APP_API_PORT")+'/kml/manage/upload'
    file_name = kml_file.split('/')[-1]
    multipart_form_data = {
        'kml': (file_name, open(kml_file, 'r')),
    }
    response = requests.post(url, files=multipart_form_data)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def sendPath(kml_file):
    url = 'http://'+os.getenv("VUE_APP_API_IP")+':'+os.getenv("VUE_APP_API_PORT")+'/kml/builder/concatenate'
    file_name = kml_file.split('/')[-1]
    multipart_form_data = {
        'kml': (file_name, open(kml_file, 'r')),
    }
    response = requests.post(url, files=multipart_form_data)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def createDrone():
    global drone
    url = 'http://'+os.getenv("VUE_APP_API_IP")+':'+os.getenv("VUE_APP_API_PORT")+'/kml/builder/addPlacemark'
    multipart_form_data = {
        'id' : 'drone',
        'name' : 'drone2',
        'latitude' : drone.lat,
        'longitude' : drone.lon,
        'range' : drone.alt,
        'icon' : 'http://'+os.getenv("VUE_APP_API_IP")+':'+os.getenv("VUE_APP_API_PORT")+'/images/reddrone.png',
        'scale' : 2
    }
    response = requests.post(url, data=multipart_form_data, files={'file':''})
    print('done')

print('Drone Wing in action!')
def clean():
    url = 'http://'+os.getenv("VUE_APP_API_IP")+':'+os.getenv("VUE_APP_API_PORT")+'/kml/manage/clean'
    response = requests.get(url)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)
clean()
sendPath("/Users/albert/Desktop/AirMashup_GSoC/SERVER/Wing.kml")


def orbit(name,lon,lat,range):
    url = 'http://' + os.getenv("VUE_APP_API_IP") + ':' + os.getenv("VUE_APP_API_PORT") + '/kml/builder/orbit'
    files = {'img': (None, '')}
    multipart_form_data = {
        'id':name,
        'name':name,
        'longitude':lon,
        'latitude':lat,
        'range':range,
        'description':''
    }
    response = requests.post(url, data=multipart_form_data,files = files)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)
def initTour(name):
    url = 'http://' + os.getenv("VUE_APP_API_IP") + ':' + os.getenv("VUE_APP_API_PORT") + '/kml/manage/initTour/drone'
    response = requests.get(url)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

orbit('drone',0.611327,41.610769,600)
createDrone()
time.sleep(2)
initTour('drone')
getAircraft(41.605363,0.606278,0,0,0,20)
getAircraft(41.605363,0.606278,100,34.5,370,0)
getAircraft(41.618929,0.618969,100,34.5,0,-20)
getAircraft(41.618929,0.618969,0,0,0,17)
getAircraft(41.618929,0.618969,70,34.5,-370,0)
getAircraft(41.605363,0.606278,70,0,0,-17)
