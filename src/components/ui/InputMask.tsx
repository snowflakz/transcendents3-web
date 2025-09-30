import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';

interface InputMaskProps {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  mask?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  rows?: number;
  className?: string;
  validation?: {
    pattern?: RegExp;
    message?: string;
    minLength?: number;
    maxLength?: number;
  };
}

const InputMaskComponent: React.FC<InputMaskProps> = ({
  id,
  label,
  type,
  placeholder,
  mask,
  required = false,
  value,
  onChange,
  onBlur,
  error,
  rows = 3,
  className = '',
  validation,
}) => {
  const [isValid, setIsValid] = useState(true);
  const [validationMessage, setValidationMessage] = useState('');

  const validateInput = (inputValue: string): boolean => {
    if (required && !inputValue.trim()) {
      setValidationMessage('This field is required');
      return false;
    }

    if (inputValue.trim() && validation) {
      if (validation.minLength && inputValue.length < validation.minLength) {
        setValidationMessage(`Minimum ${validation.minLength} characters required`);
        return false;
      }

      if (validation.maxLength && inputValue.length > validation.maxLength) {
        setValidationMessage(`Maximum ${validation.maxLength} characters allowed`);
        return false;
      }

      if (validation.pattern && !validation.pattern.test(inputValue)) {
        setValidationMessage(validation.message || 'Invalid format');
        return false;
      }
    }

    // Email validation
    if (type === 'email' && inputValue.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(inputValue)) {
        setValidationMessage('Please enter a valid email address');
        return false;
      }
    }

    // Phone validation (basic)
    if (type === 'tel' && inputValue.trim()) {
      const phonePattern = /^\(\d{3}\)\s\d{3}-\d{4}$/;
      if (!phonePattern.test(inputValue)) {
        setValidationMessage('Please enter a valid phone number');
        return false;
      }
    }

    setValidationMessage('');
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setIsValid(validateInput(newValue));
  };

  const handleBlur = () => {
    setIsValid(validateInput(value));
    if (onBlur) onBlur();
  };

  const baseClasses = `w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
    !isValid || error
      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
      : 'border-neutral-300'
  }`;

  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <textarea
          id={id}
          rows={rows}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          required={required}
          className={`${baseClasses} ${className}`}
        />
      );
    }

    if (mask) {
      return (
        <InputMask
          mask={mask}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          maskChar="_"
        >
          {(inputProps: any) => (
            <input
              {...inputProps}
              id={id}
              type={type}
              placeholder={placeholder}
              required={required}
              className={`${baseClasses} ${className}`}
            />
          )}
        </InputMask>
      );
    }

    return (
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        required={required}
        className={`${baseClasses} ${className}`}
      />
    );
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-neutral-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {renderInput()}
      {(!isValid || error) && (
        <p className="mt-1 text-sm text-red-600">
          {error || validationMessage}
        </p>
      )}
    </div>
  );
};

export default InputMaskComponent;
