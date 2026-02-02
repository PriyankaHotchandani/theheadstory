import { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("cursor-pointer") ||
                target.classList.contains("group")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateCursorPosition);
        document.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateCursorPosition);
            document.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            <div
                className="custom-cursor-dot"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />

            <div
                className={`custom-cursor-circle ${isHovering ? "is-hovering" : ""}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
        </>
    );
};

export default CustomCursor;
