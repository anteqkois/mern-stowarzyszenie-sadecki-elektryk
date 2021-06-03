import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import AdminNavigation from '../containers/AdminNavigation';
import Test from '../containers/Test';
import ProjectsAdminView from '../containers/ProjectsAdminView';
import ProjectsAdd from '../containers/ProjectsAdd';
import ProjectsEdit from '../containers/ProjectsEdit';
import Categories from '../containers/Categories';
import CategoriesAdd from '../containers/CategoriesAdd';
import CategoriesEdit from '../containers/CategoriesEdit';

const StyledWrapper = styled.main`
margin: 70px auto;
max-width: 1200px;

`;

const AdminPanel = () => {
  const [isActive, setIsActive] = useState(false);
  const { path, url } = useRouteMatch();

  return (
    <>
      <AdminNavigation isActive={isActive} setIsActive={setIsActive} />
      <StyledWrapper>
        <Switch>
          <Route exact path={path} component={Test} />
          <Route
            exact
            path={`${path}/projects`}
            component={ProjectsAdminView}
          />
          <Route exact path={`${path}/projects/add`} component={ProjectsAdd} />
          <Route path={`${path}/projects/edit/:id`} component={ProjectsEdit} />
          <Route exact path={`${path}/categories`} component={Categories} />
          <Route
            exact
            path={`${path}/categories/add`}
            component={CategoriesAdd}
          />
          <Route
            exact
            path={`${path}/categories/edit:id`}
            component={CategoriesEdit}
          />
        </Switch>
      </StyledWrapper>
    </>
  );
};

export default AdminPanel;
