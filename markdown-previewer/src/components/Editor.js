import React, {useContext, useState} from 'react';
import MarkdownContext from '../context/MarkdownContext';

const Editor = () => {
    const {markdown, dispatch} = useContext(MarkdownContext);
    const [text, setText] = useState(markdown);
    const handleChange = (e) => {
        dispatch({type: 'CHANGE_MARKDOWN', markdown: e.target.value})
        setText(e.target.value);
    };
    return (
        <div className="text-container">
            <textarea id="editor" value={text} rows="20" cols="100" onChange={(e) => {
                handleChange(e);
            }}>
            </textarea>
        </div>
    );
};

export default Editor;