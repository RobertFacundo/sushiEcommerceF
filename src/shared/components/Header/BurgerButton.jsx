const BurgerButton = ({ isOpen, setIsOpen }) => {
    return (
        <button onClick={() => setIsOpen(!isOpen)} className="text-white mr-2 text-3xl transition-all duration-400 focus:outline-none hover:text-red-400 cursor-pointer">
            {isOpen ? "✖" : "☰"}
        </button>
    )
}
export default BurgerButton;