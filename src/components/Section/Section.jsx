import { Title, SectionStyle } from "./SectionStyle"



export const Section = ({title, children}) => {
return(
<SectionStyle>
{title && <Title>{title}</Title>}
{children}
</SectionStyle>
)

}