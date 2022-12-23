import { useState } from 'react'
import Card from '../Card/Card'
import Footer from '../Footer/Footer'
import InputPoisk from '../InputPoisk/InputPoisk'
import '../Main/Main.css'
function Main() {
	const [fonMainColor, setColor] = useState('orange')
	const [newData, setNewData] = useState(0)
	const [obj, setobj] = useState({})
	const liftingUp = (data, el) => {
		setNewData(data)
		setobj(el)
		
	}
	const changeColorHandler = (color) => {
		setColor(color)
	}
	return (
		<div className='Main' style={{ background: fonMainColor }}>
			<Footer
				newData={newData}
				obj={obj}
				changeColorHandler={changeColorHandler}
			/>
			<InputPoisk />
			<Card liftingUp={liftingUp} />
		</div>
	)
}
export default Main
