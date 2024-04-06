
const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-white border-b border-green-500' : 'text-[#ADB7BE] border-b border-green-500';

    return (
        <button>
            <span onClick={selectTab}>
                <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                    {children}
                </p>
            </span>
        </button>
    )
}

export default TabButton;