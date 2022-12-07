import { StatisticsStyle } from "./StatisticsStyle"



export const Statistics = ({good,neutral,bad,total,positivePercentage}) => {
return(
<>
<StatisticsStyle>Good: {good}</StatisticsStyle>
<StatisticsStyle>Neutral: {neutral}</StatisticsStyle>
<StatisticsStyle>Bad: {bad}</StatisticsStyle>
<StatisticsStyle>Total: {total}</StatisticsStyle>
<StatisticsStyle>Positive Feedback: {positivePercentage} %</StatisticsStyle>
</>

)
}