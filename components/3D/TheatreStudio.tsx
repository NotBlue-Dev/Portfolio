'use client';

import { useEffect } from 'react';
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";


export default function TheatreStudio() {
    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
        // @ts-expect-error __hasInitialized isn't defined in the type
        if (!studio.__hasInitialized) {
            studio.initialize();
            studio.extend(extension); // Register the r3f extension
            // @ts-expect-error __hasInitialized isn't defined in the type
            studio.__hasInitialized = true; // Custom flag to prevent reinitialization
        }
        }
    }, []);

    return null; // This component doesn't render anything visible
}