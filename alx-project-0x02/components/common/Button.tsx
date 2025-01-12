import { type ButtonProps } from '../../interfaces'

const Button = ({
    size = 'medium',
    shape = 'rounded-md',
    children,
    onClick,
    type = 'button',
    className = ''
}: ButtonProps) => {
    const sizeClasses = {
        small: 'px-3 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg'
    }

    const baseClasses = `
    font-medium
    bg-blue-500
    text-white
    hover:bg-blue-600
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    focus:ring-opacity-50
    transition-colors
    ${sizeClasses[size]}
    ${shape}
    ${className}
  `.trim()

    return (
        <button
            type={type}
            onClick={onClick}
            className={baseClasses}
        >
            {children}
        </button>
    )
}

export default Button;