// Utility function to merge the given options with defaults.
export function mergeOptions(defaultOptions: any, newOptions: any) {
    // Create a deep merge function to merge nested objects
    return Object.keys(newOptions).reduce((acc, key) => {
        if (typeof newOptions[key] === 'object' && newOptions[key] !== null && defaultOptions[key]) {
            // If both the new and default values are objects, merge them deeply
            acc[key] = mergeOptions(defaultOptions[key], newOptions[key]);
        } else {
            // If not, just assign the new value
            acc[key] = newOptions[key];
        }
        return acc;
    }, { ...defaultOptions }); // Start with the default options
}
