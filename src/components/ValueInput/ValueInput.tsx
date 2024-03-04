import React, { FC, useState } from 'react';
import { ChangeEvent} from 'react';

import { cnValueInput } from './ValueInput.classname';

// import './ValueInput.css';
type ValueInputProps = {
    onSubmit: (value: number) => void;
}

const ValueInput: FC<ValueInputProps> = ({onSubmit}) => {
    const [diff, setDiff] = useState('');

    const handleDiffChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target;

        setDiff(target.value);
    }

    const handlePlusValueClick = () => {
        const diffNumber = +diff;

        if(isNaN(diffNumber)){
            return;
        }

        onSubmit(diffNumber);
    }

    return (
        <div className={cnValueInput()}>
            <input className={cnValueInput('Diff')} value={diff} onChange={handleDiffChange}></input>
            <button className={cnValueInput('PlusValue', cnValueInput('Button'))} onClick={handlePlusValueClick}>
                Увеличить
            </button>
        </div>
    );
}

export { ValueInput };