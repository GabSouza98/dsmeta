import NotificationButton from "./components/NotificationButton"
import SalesCard from "./components/SalesCard"
import Header from "./components/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

function App() {

  return (
    <>
      <ToastContainer/>
      <Header/>
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
