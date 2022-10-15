import React, {useContext} from 'react';
import ReactMarkdown from 'react-markdown';
import MarkdownContext from '../context/MarkdownContext';
import remarkBreaks from 'remark-breaks';

const Preview = () => {
    const {markdown} = useContext(MarkdownContext);
    return (
        <div className="text-container">
            <div className="markdown-container" id="preview">
                <ReactMarkdown children={markdown} remarkPlugins={[remarkBreaks]} />
            </div>
        </div>
    );
};

export default Preview;