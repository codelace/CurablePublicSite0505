
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)
  const [initialized, setInitialized] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Initial check
    const checkMobile = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT
      setIsMobile(mobile)
      if (!initialized) setInitialized(true)
    }
    
    // Check on mount
    checkMobile()
    
    // Check on resize
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onResize = () => checkMobile()
    
    // Add event listeners
    mql.addEventListener("change", onResize)
    window.addEventListener("resize", onResize)
    
    // Clean up
    return () => {
      mql.removeEventListener("change", onResize)
      window.removeEventListener("resize", onResize)
    }
  }, [initialized])

  // Server-side rendering safety - default to non-mobile when not initialized
  return initialized ? isMobile : false
}

// Additional helper hooks
export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean>(false)
  
  React.useEffect(() => {
    const checkTablet = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }
    
    checkTablet()
    window.addEventListener("resize", checkTablet)
    
    return () => window.removeEventListener("resize", checkTablet)
  }, [])
  
  return isTablet
}

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState<boolean>(false)
  
  React.useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    
    checkDesktop()
    window.addEventListener("resize", checkDesktop)
    
    return () => window.removeEventListener("resize", checkDesktop)
  }, [])
  
  return isDesktop
}
