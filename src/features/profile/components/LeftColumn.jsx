import { useState } from "react";
import StyledTitle from "../../../shared/components/Titles/StyledTitle"
import ProfileHeader from "./ProfileHeader";
import EditableField from "./EditableField";
import { useUpdateProfile } from "../hooks/useUpdateProfile";
import PasswordInputField from "./PasswordInputField";
import GiftCard from "./GiftCard";
import AvatarSelector from "./AvatarSelector";
import { useProfileGiftCard } from '../hooks/useProfileGiftCard'

const LeftColumn = ({ profile, giftCardRef }) => {
    const updateProfileMutation = useUpdateProfile();
    const { data: giftCard, isLoading } = useProfileGiftCard()
    const [avatar, setAvatar] = useState(profile.avatar ?? '/avatar.jpg')

    console.log(giftCard, 'LOG DEL PROFILEGIFTCARD')

    return (
        <>
            {!isLoading && giftCard && <GiftCard ref={giftCardRef} code={giftCard.code} description="Use this gift card for your next purchase!" />}
            <div className="bg-white dark:bg-zinc-900 shadow-sm rounded-xl p-6 h-fit space-y-6">
                <div className="flex items-center justify-between gap-8">
                    <StyledTitle>Account Details</StyledTitle>
                    <AvatarSelector
                        currentAvatar={avatar}
                        onChange={(newAvatar) => {
                            setAvatar(newAvatar)
                            updateProfileMutation.mutate({ avatar: newAvatar })
                        }}
                    />
                </div>
                <ProfileHeader
                    createdAt={profile.createdAt}
                />
                <EditableField
                    label='Full Name'
                    value={profile.name}
                    onSave={(newValue) => {
                        console.log("Clicked Save with:", newValue);
                        updateProfileMutation.mutate({ name: newValue });
                    }}
                    loading={updateProfileMutation.isLoading}
                />
                <EditableField
                    label="email"
                    value={profile.email}
                    onSave={(newValue) => {
                        updateProfileMutation.mutate({ email: newValue });
                    }}
                />
                <PasswordInputField
                    label="Password"
                    onSave={(newPassword) => updateProfileMutation.mutate({ password: newPassword })}
                    loading={updateProfileMutation.isLoading}
                />
            </div>
        </>
    )
};

export default LeftColumn;