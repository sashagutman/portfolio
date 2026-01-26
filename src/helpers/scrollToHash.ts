import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // hash будет типа "#projects"
    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (!el) return;

    // маленькая задержка, чтобы DOM успел отрендериться
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);

    return () => window.clearTimeout(t);
  }, [hash]);

  return null;
}
