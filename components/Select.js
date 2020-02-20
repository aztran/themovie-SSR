import React from 'react';

const Select = ({ lists, value, list, isSelected, ...props }) => {
    return (
        <select className="custom-select" {...props}>
            <option value="0" disabled>Choose Filter</option>
            {lists.map(list => (
                <option key={list.value} value={list.value}>{list.label}</option>

            ))}
        </select>
    );
}

export default Select;
