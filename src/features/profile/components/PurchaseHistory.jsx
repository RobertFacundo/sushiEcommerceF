import StyledParagraph from "../../../shared/components/Paragraphs/StyledParagraph";
import PurchaseItem from "./PurchaseItem";

const PurchaseHistory = ({ purchases }) => {
    if (!purchases || purchases.length === 0) {
        return (
            <StyledParagraph>
                No purchases yet!
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