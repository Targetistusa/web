import React, {useEffect, useRef, useState} from "react";
import "../styles/ImageShowcaseTitle.css";

const ImageShowcaseTitle = ({ imageShowcaseRef }) => {
    const sectionRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            const imageShowcase = imageShowcaseRef.current;
            const title= document.querySelector('.one-before-footer');

            if (section && imageShowcase) {
                const sectionRect = section.getBoundingClientRect();
                const imageShowcaseRect= imageShowcase.getBoundingClientRect();
                console.log("Section current top:",sectionRect.top)
                console.log("Image showcase top:",imageShowcaseRect.top)
                if (sectionRect.top >= 0 && Math.abs(imageShowcaseRect.top) <= 1300) { // scroll condition.
                    section.classList.add("scrolling");
                } else {
                    section.classList.remove("scrolling");
                    title.style.bottom= sectionRect.bottom + "px";
                    console.log("Image Showcase bottom:",imageShowcaseRect.bottom);
                }
            }

        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [imageShowcaseRef]);

    return (
        <div ref={sectionRef} className="one-before-footer">
            <section className="one-before-title">
            <p>Built for Everyone</p>
        </section>
        </div>
    );
};

export default ImageShowcaseTitle;
