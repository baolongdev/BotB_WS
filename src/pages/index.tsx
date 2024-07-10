import React from 'react'
import Dashboard from '@layouts/Dashboard'
import HomeView from '../view/HomeView'
import ModalCustome from '@components/ModalCustome/ModalCustome'



export default function index() {
  return (
    <Dashboard>
      <HomeView />
      <ModalCustome />
    </Dashboard>
  )
}
