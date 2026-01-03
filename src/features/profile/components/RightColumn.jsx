import StyledTitle from "../../../shared/components/Titles/StyledTitle"
import PurchaseHistory from "./PurchaseHistory";
import { useProfile } from "../hooks/useProfile";
import NotificationList from "./NotificationList";
import { useTranslation } from "react-i18next";

const RightColumn = ({ sectionsRef }) => {
    const { t } = useTranslation();
    const { data: profile, isLoading, isError } = useProfile();
    const purchases = profile?.purchaseHistory;
    console.log(profile, 'log del profile')

    return (
        <div className="bg-white dark:bg-zinc-900 shadow-sm rounded-xl p-6 space-y-8">
            <section ref={el => sectionsRef.current[0] = el}>
                <StyledTitle>
                    {t('profile.notifications')}
                </StyledTitle>
                <NotificationList />
            </section>
            <section ref={el => sectionsRef.current[1] = el}>
                <StyledTitle>
                    {t('profile.purchaseHistory')}
                </StyledTitle>

                {isLoading && (
                    <div className="flex justify-center py-6">
                        <Loader className="text-neutral-500 dark:text-neutral-300 scale-90" />
                    </div>
                )}
                {isError && <p className="text-sm text-gray-500">
                    {t('profile.purchaseHistoryError')}
                </p>}
                {!isLoading && !isError && (
                    <PurchaseHistory purchases={purchases} />
                )}
            </section>
        </div>
    );
};

export default RightColumn;