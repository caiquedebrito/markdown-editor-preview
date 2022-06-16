import React, { useContext, useEffect } from "react";
import { MarkdownContext } from "../context/MarkdownContext";
import { defaultMarkdown } from "./defaultMarkdown";

export function Editor() {
  const {markdown, setMarkdown} = useContext(MarkdownContext)

  useEffect(() => {
    if (checkMarkdownStoraged()) {
      rescueMarkdownStoraged()
    } else {
      displayDefaultMarkdown()
    }
  }, [])

  function checkMarkdownStoraged() {
    return sessionStorage.getItem("markdown")
  }

  function displayDefaultMarkdown() {
    setMarkdown(defaultMarkdown)
  }

  function rescueMarkdownStoraged() {
    const markdownStoraged = sessionStorage.getItem("markdown")
    setMarkdown(markdownStoraged)
  }

  function handleChange(event) {
    setMarkdown(event.target.value)
    sessionStorage.setItem("markdown", markdown)
  }

  function deleteMarkdown() {
    setMarkdown("")
    sessionStorage.removeItem("markdown")
  }

  function copyMarkdown() {
    const editor = document.getElementById("editor")
    editor.select()
    document.execCommand('copy')
    alertThatTextWasCopied()
  }

  function alertThatTextWasCopied() {
    const messageTextCopied = document.querySelector(".message-text-copied")
    messageTextCopied.style.display = "block"
    const idTime = setInterval(() => {
      messageTextCopied.style.display = "none"
      clearInterval(idTime)
    }, 1500)
  }

  return (
    <div className="container">
      <h2 className="header">Editor</h2>
      <textarea id="editor" cols="30" rows="10" onChange={handleChange} value={markdown}>
      </textarea>
      <button onClick={copyMarkdown} id="copy">copy</button>
      <button onClick={deleteMarkdown}>delete</button>
      <span className="message-text-copied">copied</span>
    </div>
  );
}
