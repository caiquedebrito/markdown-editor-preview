import React, { useContext } from "react"
import { MarkdownContext } from "../context/markdownContext"
import { marked } from "marked"
import DOMPurify from "dompurify"

export function Preview() {
    const {markdown} = useContext(MarkdownContext)

    function renderMarkdown() {
        return purifyMarkdown()
    }

    // Prevented against xss attack
    function purifyMarkdown() { 
        const rawMarkup = marked(markdown)
        return { __html: DOMPurify.sanitize(rawMarkup) }
    }

    return (
        <div className="container">
            <h2 className="header">Previewer</h2>
            <div id="preview" dangerouslySetInnerHTML={renderMarkdown()}></div>
        </div>
    )
}
