import "./Button.css"

export default function Button({ buttonText, className, type, ...props }) {
    const buttonClassNames = 'btn ' + className || ''
    return <button {...props} type={type || 'button'} className={buttonClassNames}><p>{buttonText}</p></button>
};