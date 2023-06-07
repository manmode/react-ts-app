import React from 'react';
import classnames from 'classnames';


// type anyOneFormatting<T> = {
//     // [K in keyof T]: k ? T[K}]: never;
// }
type formattingOptions = {
    primary?: boolean,
    secondary?: boolean,
    information?: boolean,
    success?: boolean,
    danger?: boolean,
    warning?: boolean
}
// type formattingOption = anyOneFormatting<formattingOptions>;

type attributeProps = {
    outline: boolean
    rounded: boolean
}
type HMButtonProps =
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    formattingOptions &
    Partial<attributeProps>;

const HM_BUTTON: React.FC<HMButtonProps> = ({
    primary,
    secondary,
    information,
    success,
    danger,
    warning,
    outline,
    rounded,
    children,
}) => {
    const classes = classnames('mx-4 px-4 py-1.5 border', {
        'border-blue-600 hover:bg-blue-600 hover:text-white hover:drop-shadow-xl': primary,
        'border-gray-600 hover:bg-gray-600 hover:text-white': secondary,
        'border-indigo-600 hover:bg-indigo-600 hover:text-white': information,
        'border-green-600 hover:bg-green-600 hover:text-white': success,
        'border-red-600 hover:bg-red-600 hover:text-white': danger,
        'border-yellow-600 hover:bg-yellow-600 hover:text-white': warning,
        'border-2': outline,
        'rounded-lg': rounded
    });
    return (
        <button className={classes}>{children}</button>
    )
}

export default HM_BUTTON;