export const calculateSubtotal = (items = []) => {
    return items.reduce(
        (acc, item) =>
            acc + item.productId.price * item.quantity,
        0
    );
};