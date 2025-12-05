import StyledParagraph from '../../../shared/components/Paragraphs/StyledParagraph';

const ProfileHeader = ({createdAt }) => {
    const formattedDate = new Date(createdAt).toLocaleDateString();

    return (
        <div className="text-right">
            <StyledParagraph className='italic text-right'>
                User since {formattedDate}
            </StyledParagraph>
        </div>
    )
}

export default ProfileHeader;