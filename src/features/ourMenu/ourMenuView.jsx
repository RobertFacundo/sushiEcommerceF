import {useState } from "react";
import List from './components/List.jsx'
import CartSidebar from './components/CartSidebar.jsx';
import Breadcrumb from './components/Breadcrumb.jsx';

const OurMenu = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const isShowingCategories = selectedCategory === null;

    return (
        <div className="flex w-full min-h-screen dark:bg-neutral-900">
            <div className="w-full lg:w-2/3 p-6">
                <Breadcrumb
                    selectedCategory={selectedCategory}
                    onResetCategory={() => setSelectedCategory(null)}
                />
                <List
                    mode={isShowingCategories ? 'categories' : 'products'}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
            </div>
            <div className="hidden lg:block w-1/3  dark:bg-black p-6 shadow-inner">
                <CartSidebar />
            </div>
        </div>
    );
};

export default OurMenu;