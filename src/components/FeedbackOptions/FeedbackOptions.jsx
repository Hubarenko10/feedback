import { Button } from "./FeedbackOptionsStyle"
import { BsEmojiHeartEyes,BsEmojiNeutral,BsEmojiFrown } from "react-icons/bs";


export const FeedbackOptions = ({options,onLeaveFeedback})=>{
    return options.map((option,idx)=>{
    return(
        <Button key={idx} onClick={()=>{onLeaveFeedback(option)}} type="button">
            {renderIcon(option)}
            {firstLetterToUpper(option)}
        </Button>
        
        )
    })
}


function renderIcon(variant){
switch (variant) {
    case 'good':
        return <BsEmojiHeartEyes />
    case 'neutral':
        return <BsEmojiNeutral />
    case 'bad':
        return <BsEmojiFrown />
        
    default:
        throw new Error('Unexpected value of option')
}
}

function firstLetterToUpper(string){
return string[0].toUpperCase() + string.substring(1)
}