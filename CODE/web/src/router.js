import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import AppLogin from '@/components/AppLogin'
import Aircrafts from '@/components/Aircrafts'
import Airspace from '@/components/Airspace'
import FlightRoutes from '@/components/FlightRoutes'
import SpainRoutes from '@/components/SpainRoutes'
import IntRoutes from '@/components/IntRoutes'
import OLS from '@/components/OLS'
import AIS from '@/components/AIS'
import Manufacturers from '@/components/Manufacturers'
import Airbus from '@/components/Airbus'
import Boeing from '@/components/Boeing'
import Bombardier from '@/components/Bombardier'
import Embraer from '@/components/Embraer'
import Wing from '@/components/Wing'
import LiveTraffic from '@/components/LiveTraffic'
import OLSSpain from '@/components/OLSSpain'
import OLSandalucia from '@/components/OLSandalucia'
import OLSaragon from '@/components/OLSaragon'
import OLSasturias from '@/components/OLSasturias'
import OLSbalears from '@/components/OLSbalears'
import OLSbasque from '@/components/OLSbasque'
import OLScanary from '@/components/OLScanary'
import OLScantabria from '@/components/OLScantabria'
import OLScastillaleon from '@/components/OLScastillaleon'
import OLScastillamancha from '@/components/OLScastillamancha'
import OLScatalunya from '@/components/OLScatalunya'
import OLSceuta from '@/components/OLSceuta'
import OLSextremadura from '@/components/OLSextremadura'
import OLSgalicia from '@/components/OLSgalicia'
import OLSmadrid from '@/components/OLSmadrid'
import OLSmelilla from '@/components/OLSmelilla'
import OLSnavarra from '@/components/OLSnavarra'
import OLSrioja from '@/components/OLSrioja'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/login',
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/aircrafts',
      name: 'Aircrafts',
      component: Aircrafts
    },
    {
      path: '/airspace',
      name: 'Airspace',
      component: Airspace
    },
    {
      path: '/flightroutes',
      name: 'FlightRoutes',
      component: FlightRoutes
    },
    {
      path: '/spainairroutes',
      name: 'SpainRoutes',
      component: SpainRoutes
    },
    {
      path: '/intairroutes',
      name: 'IntRoutes',
      component: IntRoutes
    },
    {
      path: '/ols',
      name: 'OLS',
      component: OLS
    },
    {
      path: '/ais',
      name: 'AIS',
      component: AIS
    },
    {
      path: '/manufacturers',
      name: 'Manufacturers',
      component: Manufacturers
    },
    {
      path: '/airbus',
      name: 'Airbus',
      component: Airbus
    },
    {
      path: '/boeing',
      name: 'Boeing',
      component: Boeing
    },
    {
      path: '/bombardier',
      name: 'Bombardier',
      component: Bombardier
    },
    {
      path: '/embraer',
      name: 'Embraer',
      component: Embraer
    },
    {
      path: '/projectwing',
      name: 'Wing',
      component: Wing
    },
    {
      path: '/livetraffic',
      name: 'LiveTraffic',
      component: LiveTraffic
    },
    {
      path: '/olsspain',
      name: 'OLSSpain',
      component: OLSSpain
    },
    {
      path: '/olsandalucia',
      name: 'OLSandalucia',
      component: OLSandalucia
    },
    {
      path: '/olsaragon',
      name: 'OLSaragon',
      component: OLSaragon
    },
    {
      path: '/olsasturias',
      name: 'OLSasturias',
      component: OLSasturias
    },
    {
      path: '/olsbalears',
      name: 'OLSbalears',
      component: OLSbalears
    },
    {
      path: '/olsbasque',
      name: 'OLSbasque',
      component: OLSbasque
    },
    {
      path: '/olscanary',
      name: 'OLScanary',
      component: OLScanary
    },
    {
      path: '/olscantabria',
      name: 'OLScantabria',
      component: OLScantabria
    },
    {
      path: '/olscastillaleon',
      name: 'OLScastillaleon',
      component: OLScastillaleon
    },
    {
      path: '/olscastillamancha',
      name: 'OLScastillamancha',
      component: OLScastillamancha
    },
    {
      path: '/olscatalunya',
      name: 'OLScatalunya',
      component: OLScatalunya
    },
    {
      path: '/olsceuta',
      name: 'OLSceuta',
      component: OLSceuta
    },
    {
      path: '/olsextremadura',
      name: 'OLSextremadura',
      component: OLSextremadura
    },
    {
      path: '/olsgalicia',
      name: 'OLSgalicia',
      component: OLSgalicia
    },
    {
      path: '/olsmadrid',
      name: 'OLSmadrid',
      component: OLSmadrid
    },
    {
      path: '/olsmelilla',
      name: 'OLSmelilla',
      component: OLSmelilla
    },
    {
      path: '/olsnavarra',
      name: 'OLSnavarra',
      component: OLSnavarra
    },
    {
      path: '/olsrioja',
      name: 'OLSrioja',
      component: OLSrioja
    }
  ]
})
