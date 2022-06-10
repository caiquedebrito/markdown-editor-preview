import { createContext, useState } from "react";

export const MarkdownContext = createContext()


export function MarkdownProvider({ children }) {
    const [markdown, setMarkdown] = useState("")

    return (
        <MarkdownContext.Provider value={{markdown, setMarkdown}}>
            {children}
        </MarkdownContext.Provider>
    )
}