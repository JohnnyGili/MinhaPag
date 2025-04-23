import React from "react";

type ButtonProps = {
    label: string;
    onClick: () => void;
};

const CustomButton: React.FC<ButtonProps> =
    ({ label, onClick }) => (
        <button className="btn-secondary" onClick={onClick}>{label}</button>
    );

export default CustomButton;