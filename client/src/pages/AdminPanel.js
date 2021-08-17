import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import ListOfProjectsToEdit from '../containers/ListOfProjectsToEdit'
import AdminNavigation from '../containers/AdminNavigation';
import AdminMain from '../containers/AdminMain'
import ProjectsAdminView from '../containers/ProjectsAdminView';
import ProjectsEditAndAdd from '../containers/ProjectsEditAndAdd';
import CategoriesAdd from '../containers/CategoriesAdd';
import Categories from '../containers/Categories';

const StyledWrapper = styled.main`
margin: 70px auto;
max-width: 1200px;

`;

const AdminPanel = ({ history}) => {

  const [isActive, setIsActive] = useState(false);
  const { path } = useRouteMatch();
  
  return (
    <>
      <AdminNavigation
        isActive={isActive}
        setIsActive={setIsActive}
        history={history}
      />
      <StyledWrapper>
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
          <Route
            exact
            path={`${path}/categories`}
            component={Categories}
          />
        </Switch>
      </StyledWrapper>
    </>
  );
};

export default AdminPanel;
