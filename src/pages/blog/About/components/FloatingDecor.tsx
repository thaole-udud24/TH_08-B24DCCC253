import { useEffect } from 'react';

export default function FloatingDecor() {
  useEffect(() => {
    const move = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      document.querySelectorAll('.bubble').forEach((item) => {
        const element = item as HTMLElement;
        element.style.transform = `translate(${x * 34}px, ${y * 34}px)`;
      });
    };

    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <>
      <span className="bubble bubble-1" />
      <span className="bubble bubble-2" />
      <span className="bubble bubble-3" />
      <span className="bubble bubble-4" />
      <span className="bubble bubble-5" />
      <span className="bubble bubble-6" />
      <span className="bubble bubble-7" />
      <span className="bubble bubble-8" />
    </>
  );
}