import StyledParagraph from '../../../shared/components/Paragraphs/StyledParagraph';

const ProfileHeader = ({createdAt }) => {
    const formattedDate = new Date(createdAt).toLocaleDateString();

    return (
        <div className="flex items-center gap-5">
            <StyledParagraph className='italic'>
                User since {formattedDate}
            </StyledParagraph>
        </div>
    )
}

export default ProfileHeader;