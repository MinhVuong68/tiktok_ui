import classNames from "classnames/bind"
import styles from './Button.module.scss'
import { Link } from "react-router-dom"
const cx = classNames.bind(styles)



const Button = ({ 
    to, 
    href, 
    disabled = false,
    primary = false, 
    outline = false, 
    text = false, 
    rounded = false,
    small= false, 
    large = false, 
    children, 
    className,
    leftIcon,
    rightIcon,
    onClick, 
    ...passProps }) => {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps// Cac Prop khong luong truoc
    }

    // Remove event listener when button is disabled
    if(disabled) {
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    if(to){
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }
    const classes = cx('wrapper',{
        primary, //(primary: primary) Enhanced object literals // Khi co primary thi truyen primary vao classes va dua vao button
        outline,
        rounded,
        small,
        large,
        text,
        disabled,
        [className]: className,

    })
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {rightIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    )
}

export default Button