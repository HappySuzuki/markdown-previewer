import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useState('');

  // Default markdown content
  const defaultMarkdown = `
  # Hello World!
  ## This is a subheading
  [Link to FreeCodeCamp](https://www.freecodecamp.org)
  
  Inline code: \`console.log("Hello, World!")\`
  
  \`\`\`
  // A code block
  function greet() {
      return "Hello, World!";
  }
  \`\`\`
  
  - List item 1
  - List item 2
  
  > This is a blockquote
  
  ![Image](https://via.placeholder.com/150)
  
  **This text is bold**
  `;

  useEffect(() => {
    setMarkdown(defaultMarkdown);
  }, []);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app-container">
      <h1>Markdown Previewer</h1>
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
};

export default App;