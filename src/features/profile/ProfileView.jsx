import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import { useProfile } from "./hooks/useProfile";

const ProfileView = () => {
    const { data: profile, isLoading, isError } = useProfile();

    if (isLoading) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center text-gray-700 dark:text-gray-300">
                Loading profile...
            </div>
        );
    }

    if (isError) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center text-red-500">
                Error loading profile data.
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen flex justify-center bg-gray-50 dark:bg-stone-950 py-10 px-4">
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-1">
                    <LeftColumn profile={profile} />
                </div>
                <div className="lg:col-span-2">
                    <RightColumn />
                </div>
            </div>
        </div>
    )
};

export default ProfileView;