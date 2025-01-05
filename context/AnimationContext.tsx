import { createContext, useContext, useState, ReactNode } from 'react';

interface AnimationContextType {
  animationComplete: boolean;
  setAnimationComplete: (state: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <AnimationContext.Provider value={{ animationComplete, setAnimationComplete }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimationContext must be used within an AnimationProvider');
  }
  return context;
};