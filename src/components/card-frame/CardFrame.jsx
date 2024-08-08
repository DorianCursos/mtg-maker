import { useContext } from 'react';
import { FRAME_COLORS } from '../../constants/frame-colors';
import { FRAME_TYPES } from '../../constants/frame-types';
import { FrameContext } from '../../contexts/FrameContext';
import CardTitle from '../card-info/CardInfo';

const CardFrame = () => {
	const { frameCard, setFrameCard } = useContext(FrameContext);
	return (
		<div>
			<h2>Select Card Frame</h2>
			<select
				name='card-frame'
				id='card-frame'
				onChange={event => changeFrameType(event, frameCard, setFrameCard)}
			>
				<option value='default'>Select frame type</option>
				{FRAME_TYPES.map(frame => (
					<option key={frame} value={frame}>
						{frame}
					</option>
				))}
			</select>

			{!!frameCard.frameType && (
				<select
					name='card-color'
					id='card-color'
					onChange={event => changeFrameColor(event, frameCard, setFrameCard)}
				>
					<option value='default'>Select Color</option>
					{FRAME_COLORS[frameCard.frameType]?.map(color => (
						<option key={color} value={color}>
							{color}
						</option>
					))}
				</select>
			)}
			<CardTitle />
		</div>
	);
};

const changeFrameType = (event, frameCard, setFrameCard) => {
	const { value } = event.target;
	if (value === 'default') {
		setFrameCard({ ...frameCard, frameType: null });
		return;
	}
	setFrameCard({ ...frameCard, frameType: value });
};

const changeFrameColor = (event, frameCard, setFrameCard) => {
	const { value } = event.target;
	if (value === 'default') {
		setFrameCard({ ...frameCard, frameColor: null });
		return;
	}
	setFrameCard({ ...frameCard, frameColor: value });
};

export default CardFrame;
