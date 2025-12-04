import React from "react";
import BarCode from 'react-barcode';

const GiftCard = ({ code, description }) => {
    return (
        <div className="flex flex-col items-center space-y-2 mb-3">
            <div className="relative w-125 h-70 rounded-xl shadow-lg overflow-hidden"  style={{ boxShadow: "var(--card-shadow)" }}>
                <img src="/giftCard.jpg" alt="GiftCard" className="absolute inset-0 w-full h-full object-cover" />

                <div className="absolute bottom-4 left-2/3 -translate-x-1/2 text-white text-center">
                    <BarCode
                        value={code}
                        width={1.5}
                        height={50}
                        displayValue={false}
                        background="transparent"
                        lineColor="#ffffff"
                    />
                    {code}
                </div>
                {description && (
                    <p className="absolute bottom-10 left-10 text-white text-sm text-center w-33">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default GiftCard;