import { useEffect,useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const { current } = ref;
//       if (!current) return;

//       const rect = current.getBoundingClientRect();
//       if (rect.top < window.innerHeight && rect.bottom > 0) {
//         current.classList.add("fade-in");
//       } else {
//         current.classList.remove("fade-in");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div ref={ref} className="opacity-0 transition-opacity duration-500">
//       {children}
//     </div>
//   );
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current.classList.add("visible");
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

       
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
            observer.disconnect();
        };
    }, []);

    return (<div ref={ref} className="reveal">{children}</div>);
};

