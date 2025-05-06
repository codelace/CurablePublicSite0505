
import * as React from "react"

// Define breakpoints for consistent responsive behavior
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)
  const [initialized, setInitialized] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Initial check
    const checkMobile = () => {
      const mobile = window.innerWidth < BREAKPOINTS.mobile
      setIsMobile(mobile)
      if (!initialized) setInitialized(true)
    }
    
    // Check on mount
    checkMobile()
    
    // Check on resize
    const mql = window.matchMedia(`(max-width: ${BREAKPOINTS.mobile - 1}px)`)
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

// Additional helper hooks with improved implementation
export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean>(false)
  const [initialized, setInitialized] = React.useState<boolean>(false)
  
  React.useEffect(() => {
    const checkTablet = () => {
      setIsTablet(window.innerWidth >= BREAKPOINTS.mobile && window.innerWidth < BREAKPOINTS.tablet)
      if (!initialized) setInitialized(true)
    }
    
    checkTablet()
    
    const mql = window.matchMedia(`(min-width: ${BREAKPOINTS.mobile}px) and (max-width: ${BREAKPOINTS.tablet - 1}px)`)
    const onResize = () => checkTablet()
    
    mql.addEventListener("change", onResize)
    window.addEventListener("resize", onResize)
    
    return () => {
      mql.removeEventListener("change", onResize)
      window.removeEventListener("resize", onResize)
    }
  }, [initialized])
  
  return initialized ? isTablet : false
}

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState<boolean>(false)
  const [initialized, setInitialized] = React.useState<boolean>(false)
  
  React.useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= BREAKPOINTS.tablet)
      if (!initialized) setInitialized(true)
    }
    
    checkDesktop()
    
    const mql = window.matchMedia(`(min-width: ${BREAKPOINTS.tablet}px)`)
    const onResize = () => checkDesktop()
    
    mql.addEventListener("change", onResize)
    window.addEventListener("resize", onResize)
    
    return () => {
      mql.removeEventListener("change", onResize)
      window.removeEventListener("resize", onResize)
    }
  }, [initialized])
  
  return initialized ? isDesktop : false
}

// New hook for more detailed breakpoint checks
export function useBreakpoint() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  
  return { isMobile, isTablet, isDesktop };
}
