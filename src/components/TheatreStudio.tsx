'use client';

import { useEffect } from 'react';
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";


export default function TheatreStudio() {
    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
        if (!studio.__hasInitialized) {
            studio.initialize();
            studio.extend(extension); // Register the r3f extension
            studio.__hasInitialized = true; // Custom flag to prevent reinitialization
        }
        }
    }, []);

    return null; // This component doesn't render anything visible
    }