module.exports = {
    verbose: false,
    testTimeout: 6 * 60 * 1000,
    plugins: {
        sauce: {
            disabled: true,
            browsers: [
                "Windows 10/chrome"
            ]
        }
    }
};
