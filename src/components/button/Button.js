import React from 'react';
import styles from './button/Button.module.css';

function Button({ children, type, className, onClick, disabled }) {
    return (
        <button
            className={`${styles.button} ${styles[className]}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
