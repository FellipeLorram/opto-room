import { createContext } from "react";

interface LoadingContext {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContextProvider = createContext({} as LoadingContext);

export default LoadingContextProvider;
