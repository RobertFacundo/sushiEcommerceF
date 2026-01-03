import { useState, useEffect } from 'react';
import StyledParagraph from '../../../shared/components/Paragraphs/StyledParagraph';
import GradientTextButton from '../../../shared/components/Buttons/GradientTextButton';
import { useTranslation } from 'react-i18next';

const EditableField = ({
    labelKey,
    value,
    type = 'text',
    onSave
}) => {
    const { t } = useTranslation();
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const [error, setError] = useState(null);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const handleSave = () => {
        if (inputValue.trim() === '') {
            setError(t("profile.errors.emptyField"));
            return;
        }

        setError(null);

        onSave(inputValue);

        setIsEditing(false);
    };

    const handleCancel = () => {
        setInputValue(value);
        setError(null);
        setIsEditing(false);
    }

    return (
        <div className="flex flex-col space-y-1">
            <label className="text-sm text-gray-500 dark:text-gray-400">
                {t(labelKey)}
            </label>
            {!isEditing && (
                <div className="flex items-center justify-between">
                    <StyledParagraph>
                        {type === 'password' ? "••••••••" : value}
                    </StyledParagraph>

                    <GradientTextButton
                        onClick={() => setIsEditing(true)}
                    >
                        {t("profile.edit")}
                    </GradientTextButton>
                </div>
            )}
            {isEditing && (
                <div
                    className="flex flex-col space-y-2"
                >
                    <input
                        type={type}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-neutral-800 text-black dark:text-white outline-none"
                    />
                    {error && (
                        <p className='text-red-500 text-sm'>{error}</p>
                    )}
                    <div className="flex gap-3">
                        <button
                            onClick={handleSave}
                            className="px-3 py-1 bg-red-600 text-white rounded-md text-sm cursor-pointer"
                        >
                            {t('profile.save')}
                        </button>
                        <button
                            onClick={handleCancel}
                            className="px-3 py-1 bg-gray-300 dark:bg-neutral-700 rounded-md text-sm cursor-pointer"
                        >
                            {t('profile.cancel')}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EditableField;