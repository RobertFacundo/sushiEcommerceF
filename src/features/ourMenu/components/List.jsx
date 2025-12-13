import { AnimatePresence } from 'framer-motion';
import BaseCard from './BaseCard.jsx'
import { useCategories, useProductsByCategory } from '../hooks/useOurMenu';

const List = ({ mode, selectedCategory, onSelectCategory }) => {
    const isCategories = mode === 'categories';
    const { data, isLoading, error } = isCategories ? useCategories() : useProductsByCategory(selectedCategory?._id);

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error loading data...</p>;

    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <AnimatePresence mode='popLayout'>
                {data?.map((item, i) => (
                    <BaseCard
                        key={item._id}
                        mode={isCategories ? 'category' : 'product'}
                        data={item}
                        onSelectCategory={onSelectCategory}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default List;