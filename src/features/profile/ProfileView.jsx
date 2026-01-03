import { useTranslation } from "react-i18next";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import { useProfile } from "./hooks/useProfile";
import { useProfileAnimation } from "./hooks/useProfileAnimation";

const ProfileView = () => {
    const { t } = useTranslation();
    const { data: profile, isLoading, isError } = useProfile();
    const { containerRef, leftRef, rightRef, giftCardRef, sectionsRef } = useProfileAnimation();

    if (isLoading) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center text-gray-700 dark:text-gray-300">
                {t("profile.loading")}
            </div>
        );
    }

    if (isError) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center text-red-500">
                {t("profile.error")}
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen flex justify-center bg-gray-50 dark:bg-stone-950 py-10 px-4">
            <div ref={containerRef} className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div ref={leftRef} className="lg:col-span-1">
                    <LeftColumn profile={profile} giftCardRef={giftCardRef} />
                </div>
                <div ref={rightRef} className="lg:col-span-2">
                    <RightColumn sectionsRef={sectionsRef} />
                </div>
            </div>
        </div>
    )
};

export default ProfileView;