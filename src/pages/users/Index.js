import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentLayout from "components/layouts/main/content";
import { doFetchUsers, setUserIsLoadingOn } from "app/reducers/userSlice";
import TableUser from "./table";
import { setGlobalTitle } from "app/reducers/globalSlice";
import { MODULE_TITLE } from "constants/const";

const UserPage = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector(({ user }) => user);

  useEffect(() => {
    dispatch(setUserIsLoadingOn());
    dispatch(doFetchUsers());
    dispatch(setGlobalTitle(MODULE_TITLE.USERS));
  }, [dispatch]);

  return (
    <ContentLayout title={`${MODULE_TITLE.USERS} Table`} spinning={isLoading}>
      <TableUser />
    </ContentLayout>
  );
};

export default UserPage;
