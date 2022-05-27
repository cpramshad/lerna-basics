import { FC } from 'react';

interface Props {
    onClick: () => void
}

const Button:FC<Props>  = (props) => {
    return <button {...props}>Click Me!</button>
}

export default Button;