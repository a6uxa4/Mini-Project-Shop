import { useState } from 'react'
import Errormodal from '../Errormodal/Errormodal'
import '../Footer/Footer.css'
function Footer({ changeColorHandler, newData, obj }) {
	const [modalActive, setModalActive] = useState(null)

	return (
		<div className='Footer'>
			<Errormodal
				obj={obj}
				newData={newData}
				active={modalActive}
				setActive={setModalActive}
			/>
			<span
				className='SpanFonMain'
				onClick={() => {
					changeColorHandler('orange')
				}}
			>
				🌝
			</span>
			<div className='VnutriFootera'>
				<span
					className='SpanFonMain'
					onClick={() => setModalActive(true)}
				>
					{newData}🛒
				</span>
				<h1>SHOP</h1>
				<label className='SpanFonMain' htmlFor='Dan'>
					🔍
				</label>
			</div>
			<span
				className='SpanFonMain'
				onClick={() => {
					changeColorHandler('black')
				}}
			>
				🌚
			</span>
		</div>
	)
}
export default Footer
