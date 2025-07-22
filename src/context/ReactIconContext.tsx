import { IconContext } from "react-icons";
import React, { ReactNode } from "react";

interface ReactIconProviderProps {
    children: ReactNode;
    value?: IconContext;
}

export const ReactIconProvider: React.FC<ReactIconProviderProps> = ({
    children,
    value = { size: "1rem", style: { verticalAlign: "middle", color:"#FFFFFF" } },
}) => (
    <IconContext.Provider value={value}>
        {children}
    </IconContext.Provider>
);