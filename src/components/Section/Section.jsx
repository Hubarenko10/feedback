import { Title, SectionStyle } from "./SectionStyle"



export const Section = ({title}) => {
return(
<SectionStyle>
{title && <Title>{title}</Title>}

</SectionStyle>
)

}