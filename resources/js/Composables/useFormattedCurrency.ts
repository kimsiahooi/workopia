export const useFormatCurrency = () => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
};
