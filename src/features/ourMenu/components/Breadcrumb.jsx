
const BreadCrumb = ({ selectedCategory, onResetCategory }) => {

    return (
        <nav className="mb-4 text-sm flex items-center gap-2">
            <span
                className="dark:text-white cursor-pointer hover:text-red-300"
                onClick={onResetCategory}
            >
                Our Menu    
            </span>

            {selectedCategory && (
                <>
                    <span className="text-gray-400">/</span>
                    <span className="font-medium text-gray-700">{selectedCategory.name.es}</span>
                </>
            )}
        </nav>
    );
};

export default BreadCrumb;