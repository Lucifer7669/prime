import { createAction, props } from '@ngrx/store';
import { UserDataModel } from '../store/prime.model';

export const GET_USERDATA = '[shared state] get user data';
export const GET_USERDATA_SUCCESS = '[shared state] get user data success'
export const getUserAction = createAction(
  GET_USERDATA,
  props<{ allUserData: UserDataModel[] }>()
);

export const loadPostSuccess= createAction(GET_USERDATA_SUCCESS,
    props<{posts:Post[]}>() );