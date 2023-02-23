import {useCallback, useMemo} from 'react';
import {RootState} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../../services/api';
import {setUsers, setCurrentUser} from './slice';

const useUser = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);

  const userList = useMemo(() => userState.users, [userState.users]);
  const currentUser = useMemo(
    () => userList[userState.detailId] ?? {},
    [userList, userState.detailId],
  );

  const fetchUsers = useCallback(() => {
    async function execute() {
      let data = await getUsers();
      if (data) {
        dispatch(setUsers(data));
      }
    }

    execute();
  }, [dispatch]);

  const setCurrentUserId = useCallback(
    id => {
      dispatch(setCurrentUser(id));
    },
    [dispatch],
  );

  return {
    users: userList,
    fetchUsers,
    setCurrentUserId,
    currentUser,
  };
};

export default useUser;
