import "./App.css";
import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";
import { MarkdownProvider} from "./context/MarkdownContext"

function App() {
  return (
    <div className="app">
      <MarkdownProvider>
        <Editor />
        <Preview />
      </MarkdownProvider>
    </div>
  );
}

export default App;
