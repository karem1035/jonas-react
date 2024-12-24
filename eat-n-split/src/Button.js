/**
 * A basic button component.
 *
 * @param {Object} props
 * @prop {node} children The content of the button.
 * @prop {function} onClick The function to run when the button is clicked.
 *
 * @return {React.Element} The button element.
 */
export function Button({ children, onClick }) {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
}
