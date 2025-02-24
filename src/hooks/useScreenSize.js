import { useState, useEffect } from 'react';

const useScreenSize = (breakpoint) => {
  const [isLarger, setIsLarger] = useState(window.innerWidth > breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsLarger(window.innerWidth > breakpoint);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isLarger;
};

export default useScreenSize;
