import Alarm from "../images/icons/notifications.png"
import UserType from "./UserType";

const Notifications = () => {
    return (
        <div className="flex items-center gap-x-8">
            <UserType type={"Doctor"} />
            {/* <div id="Notifications" className="w-10 h-10 flex p-2 cursor-pointer">
                <img src={Alarm} alt="" />
            </div> */}

        </div>
    )
}

export default Notifications;