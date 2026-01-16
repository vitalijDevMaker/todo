const tailcssStyled = {
    formControls: {
        base: "block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",

        input: "bg-white text-gray-900 placeholder-gray-400",
        textarea: "resize-none",
        select: "bg-white",

        disabled: "bg-gray-100 text-gray-400 cursor-not-allowed",
        error: "border-red-500 focus:ring-red-500 focus:border-red-500"
    },

    buttons: {
        base: "inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",

        sizes: {
            md: "px-4 py-2 text-sm"
        },

        variants: {
            primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-800",
            secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400"
        },

        disabled: "opacity-50 cursor-not-allowed pointer-events-none"
    },

    checkbox: {
        base: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
    },

    label: {
        base: "block mb-1 text-sm font-medium text-gray-700"
    },

    helperText: {
        base: "mt-1 text-xs text-gray-500",
        error: "text-red-500"
    }
};

export default tailcssStyled;