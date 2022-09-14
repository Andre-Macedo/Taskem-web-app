import React from "react";

export const Input = props => {
    const {
        imgSrc,
        altImg,
        inputType,
        inputName,
        inputPlaceholder,
        value,
        setValue
    } = props;

    return (
        <div className="input">
            <img src={imgSrc} alt={altImg}></img>
            <input
                type={inputType}
                name={inputName}
                placeholder={inputPlaceholder}

                value={value} onChange={event => setValue(event.target.value)}

            />
        </div>
    )
}