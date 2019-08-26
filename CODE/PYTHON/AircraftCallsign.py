import sched
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

def getAircraft(icao24id):
    one = time.time()
    api = OpenSkyApi(os.getenv("API_USER"),os.getenv("API_PASS"))
    s = api.get_states(icao24=icao24id)
    aircrafts = []
    for state in s.states:
        aircrafts.append(Aircraft(state.icao24.split(' ')[0],state.callsign.split(' ')[0],state.latitude,state.longitude,state.geo_altitude,state.heading,state.velocity,state.vertical_rate))
    delete_placemark(aircrafts)
    send_placemark(aircrafts)
    openBallon(aircrafts)
    print('Done API 0s')
    print("Total number of aircrafts:",len(aircrafts))

    time.sleep(1)
    getPosition1s(aircrafts)
    edit_placemark(aircrafts)
    print('Done 1s')

    time.sleep(1)


    getPosition1s(aircrafts)
    edit_placemark(aircrafts)
    print('Done 2s')

    time.sleep(1)

    getPosition1s(aircrafts)
    edit_placemark(aircrafts)
    print('Done 3s')

    time.sleep(1)

    getPosition1s(aircrafts)
    edit_placemark(aircrafts)
    print('Done 4s')

    time.sleep(1)

def send_placemark(aircrafts):
    url = 'http://'+os.getenv("VUE_APP_API_IP")+':'+os.getenv("VUE_APP_API_PORT")+'/kml/builder/addplacemark'
    files = {'img': (None, '')}
    for aircraft in aircrafts:
        multipart_form_data = {
            'id': aircraft.callsign,
            'name': aircraft.callsign,
            'longitude':aircraft.lon,
            'latitude':aircraft.lat,
            'range':aircraft.alt,
            'description':generate_bubble(aircraft.lon,aircraft.lat,aircraft.alt,aircraft.vvel,aircraft.hvel),
            'icon':'http://'+os.getenv("VUE_APP_API_IP")+':'+os.getenv("VUE_APP_API_PORT")+'/images/planeicon.png',
            'scale':2
        }
    response = requests.post(url, data=multipart_form_data,files=files)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def delete_placemark(aircrafts):
    url = 'http://'+os.getenv("VUE_APP_API_IP")+':'+os.getenv("VUE_APP_API_PORT")+'/kml/builder/deleteTag/Placemark/'+aircrafts[0].callsign
    response = requests.delete(url)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def edit_placemark(aircrafts):
    url = 'http://'+os.getenv("VUE_APP_API_IP")+':'+os.getenv("VUE_APP_API_PORT")+'/kml/builder/editCoodPlacemark'
    files = {'img': (None, '')}
    for aircraft in aircrafts:
        multipart_form_data = {
            'id': aircraft.callsign,
            'name': aircraft.callsign,
            'longitude':aircraft.lon,
            'latitude':aircraft.lat,
            'range':aircraft.alt,
            'description':generate_bubble(aircraft.lon,aircraft.lat,aircraft.alt,aircraft.vvel,aircraft.hvel),
            'icon':'http://'+os.getenv("VUE_APP_API_IP")+':'+os.getenv("VUE_APP_API_PORT")+'/images/planeicon.png',
            'scale':1
        }
    response = requests.post(url, data=multipart_form_data,files=files)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def flyTo(aircraft):
    lat=aircraft.lat
    lon=aircraft.lon
    range=aircraft.alt

    url = 'http://'+os.getenv("VUE_APP_API_IP")+':'+os.getenv("VUE_APP_API_PORT")+'/kml/flyto/'+str(lon)+'/'+str(lat)+'/'+str(1500000+range)
    response = requests.get(url)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def openBallon(aircrafts):
    for aircraft in aircrafts:
        id=aircraft.callsign

    url = 'http://'+os.getenv("VUE_APP_API_IP")+':'+os.getenv("VUE_APP_API_PORT")+'/kml/manage/balloon/'+str(id)+'/1'
    response = requests.get(url)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def getIcao(callsign):
    api = OpenSkyApi('moreaf','Morea1234')
    s = api.get_states()
    print("API done")
    aircrafts = []
    filteredAircrafts = []
    for state in s.states:
        aircrafts.append(Aircraft(state.icao24.split(' ')[0],state.callsign.split(' ')[0],state.latitude,state.longitude,state.geo_altitude,state.heading,state.velocity,state.vertical_rate))
    #Filtration of the aircraft with empty callsign
    for i in range(0,len(aircrafts)):
        if aircrafts[i].callsign != '':
            filteredAircrafts.append(aircrafts[i])

    for i in range(0,len(filteredAircrafts)):
        if filteredAircrafts[i].callsign == callsign:
            return filteredAircrafts[i]

def generate_bubble(lon, lat, alt, vvel, hvel):
    return """
<![CDATA[
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

      </head>
      <body>
      <div class="p-lg-5" align="center">
          <h3>
              <small>Aircraft information</small>
          </h3>
      </div>
    <div class="p-lg-5" align="center">
        <table class="table">
            <tbody>
                <thead class="thead-dark">
                <tr>
                  <th>Longitude</th>
                    <td>%s</td>
                </tr>
                <tr>
                  <th>Latitude</th>
                    <td>%s</td>
                </tr>
              <tr>
                  <th>Altitude</th>
                  	<td>%.3f</td>
                </tr>
                <tr>
                  <th>Vertical velocity</th>
                    <td>%s</td>
                </tr>
                <tr>
                  <th>Horizontal velocity</th>
                    <td>%s</td>
                </tr>
            </tbody>
        </table>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
]]>
    """ % ((lat, lon, alt,vvel,hvel))

print('Aircraft Callsign:',sys.argv[1])
plane = getIcao(sys.argv[1])
print(plane.callsign,plane.icao24)

flyTo(plane)
while True:
    getAircraft(plane.icao24)
