import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
    background?: "white" | "surface" | "primary";
}

export const Section = ({
    children,
    className = "",
    container = true,
    background = "white",
    ...props
}: SectionProps) => {
    const backgrounds = {
        white: "bg-background",
        surface: "bg-surface",
        primary: "bg-primary text-white",
    };

    return (
        <section
            className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
            {...props}
        >
            {container ? (
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
};
