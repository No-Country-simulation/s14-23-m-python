import { useState } from "react";
import { MdWaterDrop } from "react-icons/md";

const GotaRating = () => {

    const gotas = Array(5).fill(0);
    const [ currentValue, setCurrentValue ] = useState(0);
    const [ hoverValue, setHoverValue ] = useState(undefined);

    const handleClick = value => {
        setCurrentValue(value);
    };

    const handleMouseOver = value => {
        setHoverValue(value);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    return (
    
        <div>
            {gotas.map((gota, index) => {
                return(
                    <MdWaterDrop 
                        key={index}
                        size={30}
                        color={(hoverValue || currentValue) > index ? "#105499" : "#c8c8c8"}
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={() => handleMouseOver(index +1)}
                        onMouseLeave={handleMouseLeave}
                    />

                ); 
            })}
                            
        </div>

     );
};
 
export default GotaRating;