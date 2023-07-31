import Editor from './Editor';
import Preview from './Preview';
import { useState } from 'react';

function Markdown() {
	const [text, setText] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
	};

	return (
		<div>
			<Editor
				text={text}
				handleChange={handleChange}
			/>
			<Preview text={text} />
		</div>
	);
}

export default Markdown;
