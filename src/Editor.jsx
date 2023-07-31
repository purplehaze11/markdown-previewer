function Editor({ text, handleChange }) {
	return (
		<div>
			<textarea
				name=''
				id='editor'
				cols='30'
				rows='10'
				value={text}
				onChange={handleChange}
			></textarea>
		</div>
	);
}

export default Editor;
