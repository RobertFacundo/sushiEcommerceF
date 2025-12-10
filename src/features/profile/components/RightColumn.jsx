import { useSelector } from "react-redux";
import StyledTitle from "../../../shared/components/Titles/StyledTitle"
import PurchaseHistory from "./PurchaseHistory";
import { useProfile } from "../hooks/useProfile";
import NotificationList from "./NotificationList";

const RightColumn = () => {
    const { data: profile, isLoading, isError } = useProfile();
    const purchases = profile?.purchaseHistory;

    return (
        <div className="bg-white dark:bg-zinc-900 shadow-sm rounded-xl p-6 space-y-8">
            <section>
                <StyledTitle>
                    Notifications
                </StyledTitle>
                <NotificationList/>
            </section>
            <section>
                <StyledTitle>
                    Purchase History
                </StyledTitle>

                {isLoading && <p className="text-sm text-gray-500">Loading...</p>}
                {isError && <p className="text-sm text-gray-500">Failed to load purchase history...</p>}
                {!isLoading && !isError && (
                    <PurchaseHistory purchases={purchases} />
                )}
            </section>
        </div>
    );
};

export default RightColumn;