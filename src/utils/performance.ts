
/**
 * Performance utility functions for optimizing component rendering
 */

import { useCallback, useRef, useEffect, useState } from 'react';

/**
 * Hook to detect if component is visible in viewport
 * Helps prevent animations and effects from running when not visible
 */
export const useInViewport = (options = {}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isInViewport, setIsInViewport] = useState(false);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setIsInViewport(entry.isIntersecting);
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options, callback]);

  return { ref, isInViewport };
};

/**
 * Defers non-critical operations until after main content is loaded
 */
export const useIdleCallback = (callback: () => void, deps: any[] = []) => {
  useEffect(() => {
    if (typeof requestIdleCallback !== 'undefined') {
      const id = requestIdleCallback(() => callback());
      return () => cancelIdleCallback(id);
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      const id = setTimeout(callback, 1000);
      return () => clearTimeout(id);
    }
  }, deps);
};

/**
 * Prevents layout thrashing by batching DOM reads and writes
 */
export const batchDomOperations = () => {
  const reads: Function[] = [];
  const writes: Function[] = [];
  
  // Define the execute function that will be returned
  const execute = () => {
    // First read all
    reads.forEach(read => read());
    // Then write all
    writes.forEach(write => write());
  };

  return {
    measure: (fn: Function) => {
      reads.push(fn);
      return {
        update: (fn: Function) => {
          writes.push(fn);
          return { execute };
        }
      };
    },
    execute
  };
};
