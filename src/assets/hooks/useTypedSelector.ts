import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'src/store/reducer/';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;