import Editor from './Editor';
import Preview from './Preview';
import { useState } from 'react';
import { init } from './init.js';

function Markdown() {
	const [text, setText] = useState(init);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const delText = () => {
		setText((text) => (text = ''));
	};

	const resText = () => {
		setText((text) => (text = init));
	};

	return (
		<div id='container'>
			<Editor
				text={text}
				handleChange={handleChange}
				delText={delText}
				resText={resText}
			/>
			<Preview text={text} />
		</div>
	);
}

export default Markdown;
