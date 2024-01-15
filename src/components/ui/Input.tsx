import React, { InputHTMLAttributes } from 'react';
import './style.scss';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
    label,
    value,
    onChange,
    ...props
}) => {
    return (
        <div className="form-input">
            <label>{label}</label>
            <input type="text" value={value} onChange={onChange} {...props} />
        </div>
    );
};

export default FormInput;
