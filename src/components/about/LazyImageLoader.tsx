import React, { useState, useRef, useEffect } from 'react';

interface LazyImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  fallback?: React.ReactNode;
}

const LazyImageLoader: React.FC<LazyImageLoaderProps> = ({
  src,
  alt,
  className = '',
  onLoad,
  fallback
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
    onLoad?.();
  };

  return (
    <div ref={imgRef} className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
      {inView && !error && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
      {error && fallback}
    </div>
  );
};

export default LazyImageLoader;