import classnames from 'classnames';

type HMButtonProps = {
    children,
    primary?,
    secondary?,
    information?,
    success?,
    danger?,
    warning?,
    outline?,
    rounded?
}
function HM_BUTTON(props: HMButtonProps, ...rest) {
    const classes = classnames('mx-4 px-4 py-1.5 border', {
        'border-blue-600 hover:bg-blue-600 hover:text-white hover:drop-shadow-xl': props.primary,
        'border-gray-600 hover:bg-gray-600 hover:text-white': props.secondary,
        'border-indigo-600 hover:bg-indigo-600 hover:text-white': props.information,
        'border-green-600 hover:bg-green-600 hover:text-white': props.success,
        'border-red-600 hover:bg-red-600 hover:text-white': props.danger,
        'border-yellow-600 hover:bg-yellow-600 hover:text-white': props.warning,
        'border-2': props.outline,
        'rounded-lg': props.rounded
    });
    return (
        <button className={classes}>{props.children}</button>
    )
}

export default HM_BUTTON;