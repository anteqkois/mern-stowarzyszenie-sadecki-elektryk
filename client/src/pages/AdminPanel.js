import React, { useState, useContext } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import { ErrorContext } from '../hooks/useError';

import ListOfProjectsToEdit from '../containers/Admin/ListOfProjectsToEdit';
import AdminNavigation from '../containers/Admin/AdminNavigation';
import AdminMain from '../containers/Admin/AdminMain';
import ProjectsAdminView from '../containers/Admin/ProjectsAdminView';
import ProjectsEditAndAdd from '../containers/Admin/ProjectsEditAndAdd';
import CategoriesAdd from '../containers/Admin/CategoriesAdd';
import Categories from '../containers/Admin/Categories';

const StyledWrapper = styled.main`
  margin: 70px auto;
  max-width: 1200px;
`;

const AdminPanel = ({ history }) => {
  const [isActive, setIsActive] = useState(false);
  const { path } = useRouteMatch();
  const { ErrorComponent } = useContext(ErrorContext);

  return (
    <>
      <AdminNavigation
        isActive={isActive}
        setIsActive={setIsActive}
        history={history}
      />
      <StyledWrapper>
        <ErrorComponent />
        <Switch>
          <Route exact path={path} component={AdminMain} />
          <Route
            exact
            path={`${path}/projects`}
            component={ProjectsAdminView}
          />
          <Route
            exact
            path={`${path}/projects/add`}
            component={ProjectsEditAndAdd}
          />
          <Route
            exact
            path={`${path}/projects/edit`}
            component={ListOfProjectsToEdit}
          />
          <Route
            path={`${path}/projects/edit/:id`}
            component={ProjectsEditAndAdd}
          />
          <Route
            exact
            path={`${path}/categories/add`}
            component={CategoriesAdd}
          />
          <Route exact path={`${path}/categories`} component={Categories} />
        </Switch>
      </StyledWrapper>
    </>
  );
};

export default AdminPanel;
