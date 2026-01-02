export const footerContainer = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: 'easeOut',
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
};

export const footerColumn = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: 'easeOut'
        },
    },
};

export const footerItem = {
    hidden: {
        opacity: 0,
        y: 10
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        },
    },
};

export const footerImage = {
    hidden: {
        opacity: 0,
        scale: 1.03
    },
    visible: {
        opacity: 0.9,
        scale: 1,
        transition: {
            duration: 0.9,
            ease: "easeOut",
            delay: 0.6
        },
    },
};