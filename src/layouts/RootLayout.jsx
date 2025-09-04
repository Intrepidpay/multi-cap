// src/layouts/RootLayout.jsx
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import CookieConsent from "../components/CookieConsent/CookieConsent"

function RootLayout() {
  const location = useLocation()

  useEffect(() => {
    // ✅ Force scroll to top on all routes except home
    if (location.pathname !== "/") {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
      <ScrollRestoration
        getKey={(loc) => (loc.pathname === "/" ? loc.key : loc.pathname)}
      />
    </div>
  )
}

export default RootLayout