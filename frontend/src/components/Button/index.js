import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React from 'react';

/**
 * @typedef {Object} ButtonProps
 * @property {'primary' | 'secondary'} [variant='primary'] - The variant of the button
 * @property {'checked' | 'arrow-right'} [icon] - The icon to display
 * @property {boolean} [isVisible=true] - Whether the button is visible
 * @property {string} [text] - The text to display
 * @property {string} [type] - The type of the button
 * @property {React.ReactNode} children - The content of the button
 * @property {boolean} [isDisabled=false] - Whether the button is disabled
 * @property {() => void} [onClick] - The function to call when the button is clicked
 */

function Button({
  variant = 'primary',
  icon,
  isVisible = true,
  children,
  text = '',
  type = 'button',
  isDisabled = false,
  onClick,
}) {
  const renderIcon = () => {
    if (icon === 'checked') {
      return <CheckCircleIcon className="h-5 w-5 ml-2" />;
    } else if (icon === 'arrow-right') {
      return <ArrowRightIcon className="h-5 w-5 ml-2" />;
    }
    return null;
  };

  return isVisible ? (
    <button
      className={clsx(
        'px-4 py-2  flex items-center font-semibold rounded-lg transition-all duration-300 ease-in-out',
        variant === 'primary' &&
          'bg-blue-sky text-blue-dark-900  hover:bg-blue-sky-light',
        variant === 'secondary' &&
          'bg-gray-200 hover:bg-gray-300 font-normal text-black',
        isDisabled && 'opacity-50 cursor-not-allowed'
      )}
      data-testid="button"
      disabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      {children ?? (
        <>
          {text}
          {renderIcon()}
        </>
      )}
    </button>
  ) : (
    <></>
  );
}

export default Button;
