import './App.css';
import React, {useReducer, useEffect} from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import MarkdownContext from './context/MarkdownContext';
import markdownReducer from './reducers/markdown';

function App() {
    //Markdown must not have tab characters or it will break lmao
    const baseData = 
`# This is a markdown example
## It sounds hard but it's not thaaaat hard 
[Markdown help and tutorial](https://commonmark.org/help/) 
\`This is an inline block, woo!\` 

\`\`\`
This is a code block for when you really wanna show a big text
Something like "TODOKETE" or stuff like
    function desu(){
        return "desu";
    }
\`\`\`
* List item 
* List item 2
* List item 3
> Blockquote AKA implying 
![Image](https://placekitten.com/200/300) 
**Pretty bold of you to assume this wouldn't be bolded**`;
    const [markdown, dispatch] = useReducer(markdownReducer, baseData);
    useEffect(() => {
        if(markdown){
            dispatch({type: 'CHANGE_MARKDOWN', markdown})
        }
    }, []);
    return (
        <div className="App">
            <MarkdownContext.Provider value={{markdown, dispatch}}>
                <Editor />
                <Preview />
            </MarkdownContext.Provider>
        </div>
    );
}

export default App;
