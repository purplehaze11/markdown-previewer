import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import DOMPurify from 'isomorphic-dompurify';
import Card from 'react-bootstrap/Card';

const options = {
	headerIds: false,
	mangle: false,
	breaks: true,
	gfm: true
};

marked.use(
	markedHighlight({
		langPrefix: 'hljs language-',
		highlight(code, lang) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
		}
	})
);

function Preview({ text }) {
	return (
		<Card
			className='card'
			id='card-preview'
		>
			<Card.Header className='card-header'>
				<Card.Title>Preview</Card.Title>
			</Card.Header>
			<div
				className='card-content'
				id='preview'
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(marked.parse(text, options))
				}}
			/>
		</Card>
	);
}

export default Preview;
