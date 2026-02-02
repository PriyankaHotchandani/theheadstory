const Marquee = () => {
    const text = "BRANDING • PRODUCTION • STRATEGY • ";

    return (
        <div className="marquee-container fixed bottom-0 left-0 right-0 z-[60] bg-primary text-primary-foreground py-3 overflow-hidden">
            <div className="marquee-content">
                <span className="marquee-text font-bold text-lg tracking-wider">
                    {text.repeat(20)}
                </span>
            </div>
        </div>
    );
};

export default Marquee;
