import React from "react";

const Input = ({type, value, children }) => {
    return (
        <div className="relative">
            <input
                type={type}
                value={value}
                id=""
                className="peer h-[49px] border border-gray-300 rounded-[10px] px-3 focus:outline-none focus:border-primary w-full"
            />
            <label
                htmlFor=""
                className="absolute left-3 -top-2 text-sm font-medium bg-white px-[5px] text-gray-500 transition-all 
                peer-focus:text-primary"
            >
                {children}
            </label>
        </div>
    );
};

export default Input;
