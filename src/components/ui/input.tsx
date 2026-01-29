'use client';

import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    
    return (
      <div className=\"w-full\">
        {label && (
          <label
            htmlFor={inputId}
            className=\"block text-sm font-medium text-gray-700 mb-1\"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={\
            w-full px-3 py-2 border rounded-lg shadow-sm
            focus:outline-none focus:ring-2 focus:ring-offset-0
            transition-colors duration-200
            \
            disabled:bg-gray-100 disabled:cursor-not-allowed
            \
          \}
          {...props}
        />
        {(error || helperText) && (
          <p className={\mt-1 text-sm \\}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
