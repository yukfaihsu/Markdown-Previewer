import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MarkdownGuide from './components/MarkdownGuide';
import MarkdownInput from './components/MarkdownInput';
import MarkdownOutput from './components/MarkdownOutput';

const App = () => {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);
  return (
    <>
      <Header onToggleGuide={() => setShowGuide(!showGuide)}/>
      {showGuide && <MarkdownGuide />}
      <div style={{ display: "flex", flexDirection: "row", width: "100vw"}}>
        <MarkdownInput inputText={markdown} onChange={(text) => {setMarkdown(text.target.value)}}/>
        <MarkdownOutput markdown={markdown}/>
      </div>
    </>
  )
}

export default App;


//racfe