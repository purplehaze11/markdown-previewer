import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Editor({ text, handleChange, delText, resText }) {
	return (
		<Card
			className='card'
			id='card-editor'
		>
			<Card.Header className='card-header'>
				<Card.Title>Editor</Card.Title>
			</Card.Header>
			<div>
				<textarea
					className='card-content'
					name=''
					id='editor'
					cols='40'
					rows='10'
					value={text}
					onChange={handleChange}
				></textarea>
				<div id='button-group'>
					<Button
						className='button'
						variant='light'
						onClick={resText}
					>
						Reset
					</Button>
					<Button
						className='button'
						variant='light'
						onClick={delText}
					>
						Delete
					</Button>
				</div>
			</div>
		</Card>
	);
}

export default Editor;
