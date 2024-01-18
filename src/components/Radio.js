// 중요도 라디오 버튼 컴포넌트
import { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
function Radio({priorityChk, variantChk}) {

    let [radioValue, setRadioValue] = useState('Low');
    let radios = [
        { name: 'Low', value: '1', variant: 'warning' },
        { name: 'Medium', value: '2', variant: 'success' },
        { name: 'High', value: '3', variant: 'danger' }
    ];

    return (
        <ButtonGroup toggle="true">
            {
                radios.map((radio, i) => (
                    <ToggleButton
                        key={i}
                        type="radio"
                        name="radio"
                        variant={radio.variant}
                        value={radio.name}
                        checked={radioValue === radio.name}
                        onChange={(e)=>{
                            setRadioValue(e.currentTarget.value);
                            priorityChk(e.currentTarget.value);
                            variantChk(radio.variant);
                        }}>
                        {radio.name}
                    </ToggleButton>
                ))
            }
        </ButtonGroup>
    )
}
export default Radio;