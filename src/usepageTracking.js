import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

export const usePageTracking = () => {
  const location = useLocation()

  useEffect(() => {
    // Envoie une vue de page à chaque changement de route
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search 
    })
  }, [location])
}
