import React, { ButtonHTMLAttributes } from 'react';
import './style.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: (e: React.FormEvent) => void;
    label: string;
    color: 'primary' | 'error';
}

const Button: React.FC<ButtonProps> = ({ onClick, label, color }) => {
    return (
        <button className={`ui-button ${color}`} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
