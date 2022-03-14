import { createContext } from "react";

interface IFilterContextProps {
  workplace: boolean,
  lastAppoitment: boolean,
  setFilters: React.Dispatch<React.SetStateAction<{
    workplace: boolean;
    lastAppoitment: boolean;
  }>>
}

const FilterContext = createContext({} as IFilterContextProps)

export default FilterContext;
