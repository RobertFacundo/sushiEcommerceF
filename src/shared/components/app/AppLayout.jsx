const AppLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen dark:bg-neutral-950">
            {children}
        </div>
    );
};

export default AppLayout;