import { useState } from 'react'
import { dannye } from '../../../Data/Dannye'
import '../CardBaby/CardBaby.css'
function CardBaby(props) {
	const [byuClick, setBuyClick] = useState(1)

	const buttonClick = (el) => {
		setBuyClick(byuClick + 1)
		props.abu(byuClick, { ...el })
	}

	const cardList = dannye.map((el) => {
		return (
			<div key={el.id} className='CardBaby'>
				<h1 style={{ fontSize: '50px' }}>{el.photo}</h1>
				<h3
					style={{
						fontSize: '20px',
						fontFamily: 'Times New Roman, Times, serif',
					}}
				>
					{el.tittle}
				</h3>
				<span>{el.price} $</span>
				<button
					className='ClickBuy'
					onClick={() => {
						buttonClick(el)
					}}
				>
					Купить
				</button>
			</div>
		)
	})
	return <div className='BabyCard'>{cardList}</div>
}
export default CardBaby
