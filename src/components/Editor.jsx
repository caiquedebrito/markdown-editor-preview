import React, { useContext, useEffect } from "react";
import { MarkdownContext } from "../context/markdownContext";


const defaultMarkdown = 
`# Markdown Editor Previewer<hr>
![github](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
## This is a sub-heading
This is one git command: \`git add\`
\`\`\`
git commit 
git 
\`\`\`
by **Caique De Brito**
- [linkedin](https://www.linkedin.com/in/caiquedebrito/)
- Github
> never stop to learning
` 

export function Editor() {
  const {markdown, setMarkdown} = useContext(MarkdownContext)

  useEffect(() => {
    displayDefaultMarkdown()
  }, [])

  function checkMarkdownStoraged() {
    return sessionStorage.getItem("markdown")
  }

  function displayDefaultMarkdown() {
    setMarkdown(defaultMarkdown)
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
    const messageTextCopied = document.querySelector(".messageTextCopied")
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
      <span className="messageTextCopied">copied</span>
    </div>
  );
}
