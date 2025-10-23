import React, { useState, useEffect } from 'react';

interface TextareaProps {
  id?: string; // HTML id attribute
  placeholder?: string; // Placeholder text
  rows?: number; // Number of rows
  value?: string; // Current value
  onChange?: (value: string) => void; // Change handler
  className?: string; // Additional CSS classes
  disabled?: boolean; // Disabled state
  error?: boolean; // Error state
  hint?: string; // Hint text to display
}

const TextArea: React.FC<TextareaProps> = ({
  id,
  placeholder = 'Enter your message', // Default placeholder
  rows = 3, // Default number of rows
  value = '', // Default value
  onChange, // Callback for changes
  className = '', // Additional custom styles
  disabled = false, // Disabled state
  error = false, // Error state
  hint = '', // Default hint text
}) => {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    console.log('TextArea handleChange called:', newValue);
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  let textareaClasses = `w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none ${className} `;

  if (disabled) {
    textareaClasses += ` bg-gray-100 text-gray-500 border-gray-300 cursor-not-allowed`;
  } else if (error) {
    textareaClasses += ` bg-white border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-gray-900`;
  } else {
    textareaClasses += ` bg-white text-gray-900 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200`;
  }

  return (
    <div className="relative">
      <textarea
        id={id}
        placeholder={placeholder}
        rows={rows}
        value={internalValue}
        onChange={handleChange}
        disabled={disabled}
        className={textareaClasses}
      />
      {hint && (
        <p
          className={`mt-2 text-sm ${
            error ? 'text-error-500' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          {hint}
        </p>
      )}
    </div>
  );
};

export default TextArea;
