import StyledParagraph from '../../../shared/components/Paragraphs/StyledParagraph';
import { useTranslation } from 'react-i18next';

const ProfileHeader = ({ createdAt }) => {
    const { t } = useTranslation();
    const formattedDate = new Date(createdAt).toLocaleDateString();

    return (
        <div className="text-right">
            <StyledParagraph className='italic text-right'>
                {t("profile.userSince", { date: formattedDate })}
            </StyledParagraph>
        </div>
    )
}

export default ProfileHeader;