import { useState } from 'react'
import './ColorPicker.css'
const ColorPicker = (props) => {
    const [rgbValue,rgbValueUpdated] = useState('#000000');
    const pointerInfo = (e) => {
        rgbValueUpdated(e.target.value)
        props.onColorChange(e.target.value)
    }
    return (
        <form>
            <input onChange={pointerInfo} className='color-picker' type="color"/>
            <p>HEX: {rgbValue}</p>
        </form>
    )

}

export default ColorPicker;