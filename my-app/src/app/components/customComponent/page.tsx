import { PortableTextComponents } from "next-sanity";

export const components: PortableTextComponents = {
    block: {
        h1: ({ children }) => (
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 my-4">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-left text-black my-3">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-[22px] sm:text-xl md:text-2xl lg:text-3xl font-medium text-left text-gray-600 my-2">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-600 my-2">
                {children}
            </h4>
        ),
        h5: ({ children }) => (
            <h5 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-500 my-1">
                {children}
            </h5>
        ),
        h6: ({ children }) => (
            <h6 className="text-xs sm:text-sm md:text-base lg:text-lg font-light text-gray-400 my-1">
                {children}
            </h6>
        ),
    },
    list: {
        // Unordered list (ul)
        bullet: ({ children }) => (
            <ul className="list-disc pl-6 my-4 space-y-2 text-gray-700">
                {children}
            </ul>
        ),
        // Ordered list (ol)
        number: ({ children }) => (
            <ol className="list-decimal pl-6 my-4 space-y-2 text-gray-700">
                {children}
            </ol>
        ),
    },
    listItem:{
            bullet: ({ children }) => (
                <li className="list-disc pl-2 my-2 text-black">{children}</li>
            ),
            number: ({ children }) => (
                <li className="list-decimal pl-2 my-2 text-black">{children}</li>
            ),
    }
};
