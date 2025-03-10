import { useState, useEffect } from "react";

function useShow() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(!window.location.pathname.startsWith("/dashboard"));
  }, []);

  return show;
}

export { useShow };
