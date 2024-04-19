import { useState } from "react";
import { MdSunny} from "react-icons/md";

const LuzRating = () => {

    const luces = Array(5).fill(0);
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
            {luces.map((luz, index) => {
                return(
                    <MdSunny 
                        key={index}
                        size={30}
                        color={(hoverValue || currentValue) > index ? "#f7d204" : "#c8c8c8"}
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={() => handleMouseOver(index +1)}
                        onMouseLeave={handleMouseLeave}
                    />

                ); 
            })}
                            
        </div>

     );
};
 
export default LuzRating;