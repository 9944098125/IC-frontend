import React from "react";

const Dropdown = ({ options, onChange }: any) => {
	return (
		<select onChange={onChange} className="country-selector">
			{options.map((option: any, index: number) => {
				return (
					<option key={index} value={option.value}>
						{option.displayValue}
					</option>
				);
			})}
		</select>
	);
};

export default Dropdown;
