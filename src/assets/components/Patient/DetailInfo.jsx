import { useState } from "react";

const DetailInfo = ({header, info, classes, headerStyles}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [prevValue, setPrevValue] = useState(info);

    const handleDoubleClick = () => {setIsEditing(true)};

    const handleConfirm = () => {setIsEditing(false)}

    const handleChangeText = (e) => {setPrevValue(e.target.value)}

    return (
        <div className={`details ${classes}`}>
            <div className="flex flex-col">
                <h2 className={`detail-header text-sm ${headerStyles}`}>{header}</h2>
                {
                    isEditing
                    ?
                    <input type="text" onChange={handleChangeText} value={prevValue} className="grow max-w-full p-1" />
                    :
                    <p onDoubleClick={handleDoubleClick} className="detail-info text-lg font-semibold">{prevValue}</p>
                }
            </div>
            {isEditing && <button onClick={handleConfirm}>Confirm</button>}
        </div>
    )
}

export default DetailInfo;


//ALWAY TRY TO BENEFIT FROM REACT FEATURES, OTHERWISE, WHY THE HELL ARE YOU USING IT
//ALWAY TRY TO BENEFIT FROM REACT FEATURES, OTHERWISE, WHY THE HELL ARE YOU USING IT
//ALWAY TRY TO BENEFIT FROM REACT FEATURES, OTHERWISE, WHY THE HELL ARE YOU USING IT