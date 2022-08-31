import { createReducer, on } from '@ngrx/store';
import { getUserAction } from './prime-management.action';
import { UserDataModel } from './prime.model';

export const initialState: UserDataModel[] = [];

const _sharedReducer = createReducer(
  initialState,
  on(getUserAction, (state, action) => {
    return {
      ...state,
      userDetails: action.allUserData,
    };
  })
);
export function SharedReducer(state: any, action: any) {
  return _sharedReducer(state, action);
}
