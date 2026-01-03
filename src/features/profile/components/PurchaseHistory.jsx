import { useTranslation } from "react-i18next";
import StyledParagraph from "../../../shared/components/Paragraphs/StyledParagraph";
import PurchaseItem from "./PurchaseItem";

const PurchaseHistory = ({ purchases }) => {
    const { t } = useTranslation();

    if (!purchases || purchases.length === 0) {
        return (
            <StyledParagraph>
                {t('profile.noPurchases')}
            </StyledParagraph>
        );
    }

    return (
        <div className="space-y-4 max-h-70 overflow-y-auto">
            {purchases.map((item, index) => (
                <PurchaseItem key={index} item={item} />
            ))}
        </div>
    )
};

export default PurchaseHistory;