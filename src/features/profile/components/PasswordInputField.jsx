import { useState } from "react";
import GradientTextButton from "../../../shared/components/Buttons/GradientTextButton";
import { FiEye, FiEyeOff } from "react-icons/fi";

const PasswordInputField = ({ label, onSave, loading }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleSave = () => {
        if (!password || password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        if (password !== confirmPassword) {
            setError('Password do not match');
            return;
        }
        setError(null);
        onSave(password);
        setPassword('');
        setConfirmPassword("");
        setIsEditing(false);
    };

    const handleCancel = () => {
        setPassword("");
        setConfirmPassword("");
        setError(null)
        setIsEditing(false);
    };

    return (
        <div className="flex flex-col space-y-1">
            <label className="text-sm text-black dark:text-white">{label}</label>
            {!isEditing && (
                <div className="flex items-center justify-between">
                    <span>••••••••</span>
                    <GradientTextButton onClick={() => { setIsEditing(true); setError(null); }}>
                        Edit
                    </GradientTextButton>
                </div>
            )}
            {isEditing && (
                <div className="flex flex-col space-y-2">
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoFocus
                            className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-neutral-800 text-black dark:text-white outline-none"
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                        >
                            {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                        </span>
                    </div>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-neutral-800 text-black dark:text-white outline-none"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div className="flex gap-3">
                        <button
                            onClick={handleSave}
                            disabled={loading}
                            className="px-3 py-1 bg-red-600 text-white rounded-md text-sm cursor-pointer"
                        >
                            {loading ? "Processing..." : "Save"}
                        </button>
                        <button onClick={handleCancel} className="px-3 py-1 bg-gray-300 dark:bg-neutral-700 rounded-md text-sm cursor-pointer">
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
};

export default PasswordInputField;