import StyledTitle from "../../../shared/components/Titles/StyledTitle"
import PurchaseHistory from "./PurchaseHistory";
import { useProfile } from "../hooks/useProfile";
import NotificationList from "./NotificationList";

const RightColumn = ({ sectionsRef }) => {
    const { data: profile, isLoading, isError } = useProfile();
    const purchases = profile?.purchaseHistory;
    console.log(profile, 'log del profile')

    return (
        <div className="bg-white dark:bg-zinc-900 shadow-sm rounded-xl p-6 space-y-8">
            <section ref={el => sectionsRef.current[0] = el}>
                <StyledTitle>
                    Notifications
                </StyledTitle>
                <NotificationList />
            </section>
            <section ref={el => sectionsRef.current[1] = el}>
                <StyledTitle>
                    Purchase History
                </StyledTitle>

                {isLoading && (
                    <div className="flex justify-center py-6">
                        <Loader className="text-neutral-500 dark:text-neutral-300 scale-90" />
                    </div>
                )}
                {isError && <p className="text-sm text-gray-500">Failed to load purchase history...</p>}
                {!isLoading && !isError && (
                    <PurchaseHistory purchases={purchases} />
                )}
            </section>
        </div>
    );
};

export default RightColumn;