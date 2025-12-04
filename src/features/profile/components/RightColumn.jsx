import StyledTitle from "../../../shared/components/Titles/StyledTitle"

const RightColumn = () => {
    return (
        <div className="bg-white dark:bg-zinc-900 shadow-sm rounded-xl p-6 space-y-8">
            <section>
                <StyledTitle>
                    Notifications
                </StyledTitle>
            </section>
            <section>
                <StyledTitle>
                    Purchase History
                </StyledTitle>
            </section>
        </div>
    );
};

export default RightColumn;