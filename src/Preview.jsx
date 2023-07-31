import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

const options = {
	headerIds: false,
	mangle: false
};

function Preview({ text }) {
	const data = marked(text, options);
	return (
		<div
			id='preview'
			dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data) }}
		/>
	);
}

export default Preview;
