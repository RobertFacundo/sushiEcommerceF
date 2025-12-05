import { useState, useEffect, useRef } from "react";
import { avatarOptions } from "../../../shared/config/avatarOptions";
import Avatar from "./Avatar";

const AvatarSelector = ({ currentAvatar, onChange }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative inline-block">
            <Avatar src={currentAvatar} size={100} onClick={() => setOpen(!open)} />
                <div
                    className={`
                    absolute right-0 mt-2 bg-white dark:bg-zinc-800 shadow-md rounded-lg p-3 z-20
                    grid grid-cols-5 gap-1 w-114 transform transition-all duration-600 origin-top-right
                    ${open ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-2 pointer-events-none"}
                `}
                >
                    {avatarOptions.map((avatar, i) => (
                        <img
                            key={i}
                            src={avatar}
                            alt="avatar choice"
                            onClick={() => {
                                onChange(avatar);
                                setOpen(false);
                            }}
                            className="w-20 h-20 rounded-full cursor-pointer object-cover hover:scale-105 transition"
                        />
                    ))}
                </div>
        </div>
    )
}

export default AvatarSelector;