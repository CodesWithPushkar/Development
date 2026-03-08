const FilterNav = ({label, isActiveLabel, onClick}) => {
    return (
        <div 
        className={`px-3 py-1.5 mx-1.5 whitespace-nowrap cursor-pointer ${isActiveLabel ? `bg-white text-black` 
            : `bg-[#272727] text-white`} text-sm rounded-lg`}
        onClick = {onClick}
        >{label}</div>
    )
}

export default FilterNav;