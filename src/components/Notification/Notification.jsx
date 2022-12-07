import { NotificationStyle } from "./NotificationStyle"




export const Notification = ({message}) => {
return (
<>
{message && <NotificationStyle>{message}</NotificationStyle>}
</>)
}