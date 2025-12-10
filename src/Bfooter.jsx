import { useState, useEffect } from 'react';

function Bfooter() {
    const images = [
        "https://imgs.search.brave.com/s1tMn8WxxTRrj_DHIf7-edcnyMu-aWGZ6skm-NU--bI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMjEx/MDY3NDU2L3N0b2Nr/LXBob3RvLWxvdy1h/bmdsZS12aWV3LW9s/ZC1oaXN0b3JpY2Fs/LXRvd2VyLWNsb2Nr/LW1vZGVybi1idWls/ZGluZ3MtZHJlc2Rl/bg",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div style={{ position: "relative", height: "400px", display: "block", overflow: "hidden" }}>
            {images.map((img, index) => (
                <div key={index} style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url("${img}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: currentImageIndex === index ? 1 : 0,
                    transition: "opacity 1s ease-in-out",
                    zIndex: 0
                }} />
            ))}

            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))",
                zIndex: 1
            }} />

            <section style={{
                position: "relative",
                zIndex: 2,
                textAlign: "center",
                color: "white",
                padding: "100px",
                justifyContent: "center",
            }}>
                <h2 style={{
                    font: "36px lato,sans-serif",
                }}>Design the Future of Visual Communication.</h2>
                <p style={{
                    font: "15px lato,sans-serif",
                    padding: "20px",
                }}>Let’s bring your ideas to life—reach out today and discover what’s possible.</p>
                <p style={{
                    font: "15px lato,sans-serif",
                    padding: "20px",
                }}>Contact us now and start your journey with Screen Art.</p>
                <div style={{
                    border: "2px solid white",
                    borderRadius: "50px",
                    display: "inline-block",
                    padding: "10px 30px",
                    marginTop: "20px",
                    cursor: "pointer"
                }}>
                    <a href="#" style={{ textDecoration: "none", color: "white", fontFamily: "lato, sans-serif", fontSize: "16px", textTransform: "uppercase" }}>
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    )
}
export default Bfooter