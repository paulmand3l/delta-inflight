import { useRecoilState } from "recoil";
import { viewModesAtom } from "~/store";

export const useViewMode = (name: string): ['column' | 'grid', (newValue: 'column' | 'grid') => any] => {
  const [viewModes, setViewModes] = useRecoilState(viewModesAtom);

  const handleChange = (newMode: 'column' | 'grid') => {
    setViewModes({...viewModes, [name]: newMode});
  }

  return [(viewModes[name] ?? 'column'), handleChange];
};
