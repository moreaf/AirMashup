----------ABOUT THE PROJECT----------

Project name: AirMashup for Liquid Galaxy

Description: This project aims to use Liquid Galaxy technology combined with Google Earth in order to display several airspace related content. This project is OpenSource and coded during Google Summer of Code 2019 by Liquid Galaxy Lab (https://www.liquidgalaxy.eu) in Lleida, Catalonia.


------------INSTALLATION-------------
For the installation it is needed to install three projects:

SERVER, inside AirMashup/CODE/JAVASCRIPT there is the node project. You need to run 'npm install' and all the dependencies listed will be installed.

WEB, inside AirMashup/CODE/web there is the node project. You need to run 'npm install' and all the dependencies listed will be installed.

PYTHON SCRIPTS, inside AirMashup/CODE/PYTHON you will find all the scripts required for running the project. In this way, I wasn't able to set up a requirements.txt file with all the modules so you must install the following modules:

pip install simplekml
pip install dotenv

and also the default python modules time,sched, threading, datetime, math and sys.

After, you will find three .env files, one inside every folder inside CODE directory. All of them are the same in order to make it easy to copy and paste. There you must set your IP and PORT of your server (localhost if you're using your own laptop) and of your API (normally running at the same machine as the Liquid Galaxy).

Therefore you will find to send to LG master some images files such as manufacturers images, aircraft logo and drone logo. I recommend you to send all of the LOGOS folder.


----------------USAGE----------------
Before anything else, you must set up the server running server.js file inside JAVASCRIPT folder with, for example, nodemon (recommended) such as: 'nodemon sever.js'.

After, you must set up the website, running 'npm run serve' inside web folder.

You should be able to launch the several functionalities from the website once everything is running. If you experience problems, ensure to check inspect element in the navigator to check if the server is receiving your requests.


------------CONTRIBUTING-------------
You can contribute to this project expanding the database available. Also you can experiment further with the API possibilites, there are many options to do.

In order to expand the database, you must check which one you want to contribute to and edit its txt. Further, you must add one json with the new information for every element.

Feel free to contact the organization for any enquriy or doubt.


---------------CREDITS---------------
This project is coded under the Google Summer of Code project awarded to Albert Morea Font from Liquid Galaxy Lab.

The API used for the live aircraft data is from The OpenSky Network project (http://www.opensky-network.org) an open source project from Switzerland.
