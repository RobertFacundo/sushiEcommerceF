const Avatar = ({ src, onClick, size = 100 }) => {
    return (
        <img
            src={src}
            alt="User Avatar"
            onClick={onClick}
            className="rounded-full object-cover cursor-pointer hover:opacity-80 transition"
            style={{ width: size, height: size }}
        />
    )
}

export default Avatar;