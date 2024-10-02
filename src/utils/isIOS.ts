const isIOS = () => {
  return (
    typeof window !== 'undefined' &&
    /iPhone|iPad|iPod/i.test(navigator.userAgent)
  );
};

export default isIOS;
