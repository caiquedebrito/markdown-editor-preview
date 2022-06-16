import React, { useContext } from "react"
import { MarkdownContext } from "../context/MarkdownContext"
import { marked } from "marked"
import DOMPurify from "dompurify"

marked.setOptions({
    gfm: true,
    breaks: true
})

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
            <h2 className="header">Preview</h2>
            <div id="preview" dangerouslySetInnerHTML={renderMarkdown()}></div>
        </div>
    )
}
