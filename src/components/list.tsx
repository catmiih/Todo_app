import { Notification } from "./notification";

export function List() {
    return (
        <div className="w-screen px-8 lg:px-0 lg:w-2/4 h-full pb-14">
            <ul>
                <li>
                    <Notification />
                </li>
            </ul>
        </div>
    )
}