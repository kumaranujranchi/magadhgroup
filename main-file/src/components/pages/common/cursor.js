import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
    const ballRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ball = ballRef.current;
        const cursorText = textRef.current;
        let mouseX = 0, mouseY = 0;
        let ballX = 0, ballY = 0;
        const speed = 0.1;
        let animFrame;

        const updateCursor = () => {
            ballX += (mouseX - ballX) * speed;
            ballY += (mouseY - ballY) * speed;
            if (ball && cursorText) {
                ball.style.transform = `translate3d(${ballX}px, ${ballY}px, 0)`;
                cursorText.style.transform = `translate3d(${ballX}px, ${ballY}px, 0)`;
            }
            animFrame = requestAnimationFrame(updateCursor);
        };

        const handleMouseMove = (e) => {
            // .cursor is position:fixed so use clientX/clientY (viewport coords, no scroll)
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseOver = (e) => {
            const hoverArea = e.target.closest(".data_cursor");
            if (hoverArea) {
                const text = hoverArea.getAttribute("data-cursor-text");
                if (text && cursorText) {
                    cursorText.textContent = text;
                    cursorText.style.opacity = "1";
                }
                if (ball) {
                    ball.style.height = "90px";
                    ball.style.width = "90px";
                    ball.style.top = "-35px";
                    ball.style.left = "-25px";
                }
            }
        };

        const handleMouseOut = (e) => {
            const hoverArea = e.target.closest(".data_cursor");
            if (hoverArea && (!e.relatedTarget || !hoverArea.contains(e.relatedTarget))) {
                if (cursorText) {
                    cursorText.style.opacity = "0";
                }
                if (ball) {
                    ball.style.height = "12px";
                    ball.style.width = "12px";
                    ball.style.top = "0";
                    ball.style.left = "0";
                }
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);

        animFrame = requestAnimationFrame(updateCursor);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
            cancelAnimationFrame(animFrame);
        };
    }, []);

    return (
        <div className="cursor">
            <div id="cursor-ball" ref={ballRef}></div>
            <div id="cursor-text" ref={textRef}></div>
        </div>
    );
};

export default CustomCursor;
