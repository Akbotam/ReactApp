import PropTypes from 'prop-types'

const Button = ({ color, color2, text, onClick}) => {
    return (
        <button 
            onClick = {onClick}
            style = {{backgroundColor: color, color: color2}}
            className = 'btn'
        > 
            {text} 
        </button> 
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
