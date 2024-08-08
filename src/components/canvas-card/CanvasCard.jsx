import { useContext, useEffect, useRef } from 'react';
import { FrameContext } from '../../contexts/FrameContext';

const CanvasCard = () => {
	const { frameCard } = useContext(FrameContext);
	const canvasRef = useRef(null);

	useEffect(() => {
		if (!frameCard.frameType || !frameCard.frameColor) return;

		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		const image = new Image();

		image.src = `/card-frames/${frameCard.frameType.toLowerCase()}/${
			frameCard.frameColor
		}.${frameCard.frameColor.includes('-') ? 'png' : 'jpg'}`;

		const loadFont = async () => {
			const font = new FontFace('Beleren', 'url(/fonts/Beleren-Bold.ttf)');
			await font.load();
			document.fonts.add(font);

			image.onload = () => {
				context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
				context.drawImage(image, 0, 0, canvas.width, canvas.height); // Draw the image

				// Dibujar título en el canvas
				context.font = '16px Beleren';
				context.textAlign = 'left';
				context.fillStyle = 'black'; // Cambia esto por el color que desees
				context.fillText(frameCard.cardTitle, 28, 46); // Posiciona el texto en el centro del canvas

				// Dibujar tipo de carta en el canvas
				context.font = '16px Beleren';
				context.textAlign = 'left';
				context.fillStyle = 'black'; // Cambia esto por el color que desees
				context.fillText(frameCard.frameType, 28, 313); // Posiciona el texto en el centro del canvas
			};
		};

		loadFont();
	}, [frameCard]);

	if (!frameCard.frameType || !frameCard.frameColor) return;

	return (
		<canvas
			style={{ borderRadius: '20px' }}
			ref={canvasRef}
			width={375}
			height={523}
		/>
	);
};

export default CanvasCard;
