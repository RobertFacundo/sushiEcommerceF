import { useState, useRef} from 'react';
import { FiBell } from 'react-icons/fi';
import NotificationDropDown from './NotificationDropDown';
import { useUnreadCount } from '../../hooks/useUnreadCount';
import { useClickOutside } from '../../hooks/useClickOutside';

const NotificationBell = () => {
    const { unreadCount, isLoading } = useUnreadCount();

    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    useClickOutside(wrapperRef, ()=>setOpen(false));

    return (
        <div ref={wrapperRef} className='relative'>
            <button
                aria-label="Notifications"
                onClick={() => setOpen(v => !v)}
                className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition cursor-pointer ml-2"
            >
                <FiBell className="w-6 h-6 text-gray-700 dark:text-gray-200" />

                {(!isLoading && unreadCount > 0) && (
                    <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white 
                                    text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {unreadCount > 9 ? "9+" : unreadCount}
                    </span>
                )}
            </button>
            <div className={`absolute right-0 mt-2 z-30 transform transition-all duration-900 ${open ? "scale-100 opacity-100 " : "scale-90 opacity-0 pointer-events-none"}`}>
                <NotificationDropDown close={() => setOpen(false)} />
            </div>
        </div>
    )
};

export default NotificationBell;