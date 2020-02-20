import React from 'react';

const Select = ({ lists, value, list, isSelected, ...props }) => {
    return (
        <select className="custom-select" {...props}>
            <option selected disabled>Choose Filter</option>
            {lists.map(list => (
                <option value={list.value}>{list.label}</option>

            ))}
        </select>
    );
}

export default Select;
