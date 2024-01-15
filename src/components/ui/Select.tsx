import React, { SelectHTMLAttributes } from 'react';
import './style.scss';

interface FormInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
    value: string;
    label: string;
    options: string[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
    value,
    label,
    onChange,
    options,
    ...props
}) => {
    return (
        <div className="form-select">
            <label>{label}</label>
            <select value={value} onChange={onChange} {...props}>
                {options.map(value => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FormInput;
