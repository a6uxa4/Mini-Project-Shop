import { useEffect, useState } from 'react'
import '../Errormodal/Errormodal.css'

function Errormodal({ newData, active, setActive, obj }) {
	const [total, settotal] = useState([])
	const obj2 = JSON.stringify(obj)
	useEffect(() => {
		if (obj2 === '{}') return
		settotal((prev) => [...prev, obj])
	}, [obj])
	return (
		<div
			className={active ? 'modal active' : 'modal'}
			onClick={() => setActive(false)}
		>
			<div
				className={active ? 'modal__content active' : 'modal__content'}
				onClick={(e) => e.stopPropagation()}
			>
				{'Amount' + ' ' + newData}

				{total.map((i) => {
					return (
						<div className='Cont1'>
							<span>Product: {i.tittle}</span>
							<span>Price: {i.price} $</span>
							{/* <span>Amount: {i.amount}</span> */}
						</div>
					)
				})}
			</div>
		</div>
	)
}
export default Errormodal
