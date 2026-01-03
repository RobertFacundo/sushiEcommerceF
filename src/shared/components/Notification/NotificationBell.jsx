import { useState, useRef } from 'react';
import { FiBell } from 'react-icons/fi';
import NotificationDropDown from './NotificationDropdown';
import { useUnreadCount } from '../../hooks/useUnreadCount';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useIsMobile } from '../../hooks/useIsMobile';
import { AnimatePresence, motion } from 'framer-motion';

const NotificationBell = () => {
    const { unreadCount, isLoading } = useUnreadCount();
    const isMobile = useIsMobile()

    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    useClickOutside(wrapperRef, () => {
        if (!isMobile) setOpen(false)
    });

    return (
        <div ref={wrapperRef} className='relative'>
            <button
                aria-label="Notifications"
                onClick={() => setOpen(v => !v)}
                className="relative p-2 rounded-full hover:bg-red-500 dark:hover:bg-zinc-800 transition cursor-pointer ml-2"
            >
                <FiBell className="w-6 h-6 text-black hover:text-white dark:text-gray-200" />

                {(!isLoading && unreadCount > 0) && (
                    <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white 
                                    text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {unreadCount > 9 ? "9+" : unreadCount}
                    </span>
                )}
            </button>
            {!isMobile && (
                <div className={`absolute right-4 mt-2 z-30 transform transition-all duration-900 ${open ? "scale-100 opacity-100 " : "scale-90 opacity-0 pointer-events-none"}`}>
                    <NotificationDropDown close={() => setOpen(false)} />
                </div>
            )}
            <AnimatePresence>
                {isMobile && open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/40"
                        onClick={() => setOpen(false)}
                    >
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25 }}
                            onClick={e => e.stopPropagation()}
                            className="absolute bottom-0 w-full h-[80vh] bg-white dark:bg-zinc-900 rounded-t-2xl p-4"
                        >
                            <NotificationDropDown close={() => setOpen(false)} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
};

export default NotificationBell;