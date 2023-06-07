// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/reset.css';


import { Link, Route, Routes } from 'react-router-dom';
import CreateRecipePage from './pages/create-recipe-page/create-recipe-page';
import RecipeList from './pages/recipe-list/recipe-list';
import CookingModePage from './pages/cooking-mode-page/cooking-mode-page';

export function App() {
  return (
    <div>
      <Link to=""><h1>Cookpad</h1></Link>

      <Routes>
        <Route
          path="/"
          element={<RecipeList></RecipeList>}
        />
        <Route
          path="/recipe/new"
          element={<CreateRecipePage></CreateRecipePage>}
        />
        <Route
          path="/cooking-mode"
          element={<CookingModePage></CookingModePage>}
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
