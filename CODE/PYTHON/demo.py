import sched, time
import simplekml
from threading import Thread
from datetime import datetime
import time
import math
import sys
from dotenv import load_dotenv
import os
import requests
load_dotenv()

def flyTo(lat,lon,range):
    url = 'http://'+os.getenv("VUE_APP_API_IP")+':'+os.getenv("VUE_APP_API_PORT")+'/kml/flyto/'+str(lon)+'/'+str(lat)+'/'+str(range)
    response = requests.get(url)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def clean():
    url = 'http://'+os.getenv("VUE_APP_API_IP")+':'+os.getenv("VUE_APP_API_PORT")+'/kml/manage/clean'
    response = requests.get(url)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def sendOverlay():
    url = 'http://' + os.getenv("VUE_APP_SERVER_IP") + ':' + os.getenv("VUE_APP_SERVER_PORT") + '/changeCharts/0'
    response = requests.get(url)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def sendOLS():
    url = 'http://' + os.getenv("VUE_APP_SERVER_IP") + ':' + os.getenv("VUE_APP_SERVER_PORT") + '/changeolscatalunya/0'
    response = requests.get(url)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

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

def stop():
    url = 'http://' + os.getenv("VUE_APP_API_IP") + ':' + os.getenv("VUE_APP_API_PORT") + '/kml/manage/stoptour'
    response = requests.get(url)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def initTour(name):
    url = 'http://' + os.getenv("VUE_APP_API_IP") + ':' + os.getenv("VUE_APP_API_PORT") + '/kml/manage/initTour/'+name
    response = requests.get(url)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def sendRoute():
    url = 'http://' + os.getenv("VUE_APP_SERVER_IP") + ':' + os.getenv("VUE_APP_SERVER_PORT") + '/changeSRoutes/1'
    response = requests.get(url)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)
    time.sleep(1)
    initTour("FollowPath")

def sendKML(kml_file):
    url = 'http://'+os.getenv("VUE_APP_API_IP")+':'+os.getenv("VUE_APP_API_PORT")+'/kml/builder/concatenate'
    file_name = kml_file.split('/')[-1]
    multipart_form_data = {
        'kml': (file_name, open(kml_file, 'r')),
    }
    response = requests.post(url, files=multipart_form_data)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def openBallon(id):
    url = 'http://'+os.getenv("VUE_APP_API_IP")+':'+os.getenv("VUE_APP_API_PORT")+'/kml/manage/balloon/'+str(id)+'/1'
    response = requests.get(url)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def globalAircraft():
    sendKML("/Users/albert/Desktop/AirMashup_GSoC/SERVER/AircraftGlobal.kml")

def zoneAircraft():
    sendKML("/Users/albert/Desktop/AirMashup_GSoC/SERVER/AircraftsZone.kml")

def companyAircraft():
    sendKML("/Users/albert/Desktop/AirMashup_GSoC/SERVER/AircraftsCompanies.kml")

def singleAircraft():
    sendKML("/Users/albert/Desktop/AirMashup_GSoC/SERVER/SingleAircraft.kml")

def sendAirbus():
    url = 'http://' + os.getenv("VUE_APP_SERVER_IP") + ':' + os.getenv("VUE_APP_SERVER_PORT") + '/changeAirbusModels/1'
    response = requests.get(url)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def sendBoeing():
    url = 'http://' + os.getenv("VUE_APP_SERVER_IP") + ':' + os.getenv("VUE_APP_SERVER_PORT") + '/changeBoeingModels/3'
    response = requests.get(url)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def sendLogos():
    sendKML('/Users/albert/Desktop/LOGOS/KML_logos.kml')

def mainDemo():
    #OVERLAY
    clean()
    time.sleep(1)
    print('Overlay')
    sendOverlay()
    time.sleep(3)
    flyTo(50,0,10150000)
    print('Overlay sent')
    time.sleep(10)
    flyTo(40.5,-3.7,300000)
    time.sleep(3)
    orbit('overlay',-3.7,40.5,600000)
    print('Orbit sent')
    time.sleep(2)
    initTour('overlay')
    print('Init Orbit')
    time.sleep(40)
    stop()
    time.sleep(2)
    clean()
    flyTo(50,0,10150000)
    time.sleep(5)
    print('OLS')
    #OLS
    sendOLS()
    print("OLS sent")
    time.sleep(2)
    orbit('ols',0.543496,41.728504,5000)
    print('Orbit sent')
    time.sleep(3)
    print('Init Orbit')
    time.sleep(30)
    stop()
    time.sleep(2)
    clean()
    flyTo(40.5,-3.7,1000000)
    time.sleep(2)

    # ROUTE
    sendRoute()
    time.sleep(3)
    initTour('FollowPath')
    time.sleep(35)
    flyTo(55,0,10150000)
    time.sleep(1)
    clean()
    time.sleep(3)

    # LIVE AIR TRAFFIC
    clean()
    globalAircraft()
    print('Global sent')
    time.sleep(1)
    orbit('global',-5,40,6000000)
    print('Orbit sent')
    time.sleep(2)
    initTour('global')
    time.sleep(40)
    stop()
    time.sleep(1)
    clean()
    flyTo(45,5,1000000)
    time.sleep(3)
    zoneAircraft()
    print('Zone sent')
    orbit('zone',0,45,90000)
    time.sleep(5)
    initTour('zone')
    time.sleep(30)
    clean()
    flyTo(45,5,1000000)
    time.sleep(2)
    companyAircraft()
    print('Company sent')
    time.sleep(10)
    orbit('vlg',2.084,41.3,100000)
    time.sleep(2)
    initTour('vlg')
    time.sleep(25)
    clean()
    flyTo(45,5,1000000)
    time.sleep(2)
    singleAircraft()
    print('Single sent')
    time.sleep(3)
    flyTo(40.29,12.12,100000)
    time.sleep(8)
    orbit('VLG7620',12.12,40.29,100000)
    print('hey')
    time.sleep(5)
    initTour('VLG7620')
    time.sleep(15)
    flyTo(45,5,1000000)
    time.sleep(1)
    clean()
    flyTo(55,0,10150000)

mainDemo()
