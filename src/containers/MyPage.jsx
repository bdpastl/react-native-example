import React from 'react'
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";


const MyPage = () => {

  const EduCred = () => {
    return <div>
      I took a lot of school and spent way too much money
    </div>
  }

  const prevURL = useRouteMatch().url
  return (
    <>
      Learn about me:
      <ul>
        <li>
          <Link to={ `${prevURL}/education`} > Education Creds</Link>
        </li>
        <li>
          <Link to={ `${prevURL}/recipes`}> Recipes </Link>
        </li>
      </ul>

      <Switch>
        <Route path={ `${prevURL}/education`  }> 
            <EduCred />
        </Route>
      </Switch>
    </>
  )
}

export default MyPage
