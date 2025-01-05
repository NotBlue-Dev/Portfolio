import { useEffect } from 'react';

export const LoadingScreen = ({loading}: {loading: boolean}) => {
    useEffect(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
          if (!loading) {
              loadingScreen.classList.add('opacity-0');
              // Add event listener to set display none after transition
              loadingScreen.addEventListener('transitionend', onTransitionEnd);
          } else {
              // Ensure the loading screen is visible when loading is true
              loadingScreen.style.display = '';
              loadingScreen.classList.remove('opacity-0');
          }
        }
    
        function onTransitionEnd() {
          const loadingScreen = document.getElementById('loading-screen');
          if (loadingScreen) {
            loadingScreen.style.display = 'none';
          }
        }
      }, [loading]);

    return (
        <div id="loading-screen" className={`fixed inset-0 z-50 flex items-center justify-center ${loading ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`}>
            <div id="loader" className="relative w-36 h-36 border-4 border-t-transparent border-purple-500 rounded-full animate-spin">
                <div className="absolute inset-1 border-4 border-t-transparent border-blue-400 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-3 border-4 border-t-transparent border-purple-800 rounded-full animate-spin-fast"></div>
            </div>
        </div>
    );
};