import { useDispatch } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostDetailPage from "./pages/PostDetailPage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { actFetchAllMenusAsync } from "./store/menus/action";
import { actFetchAllCaterogyAsync } from "./store/caterogys/action";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchAllMenusAsync());
    dispatch(actFetchAllCaterogyAsync());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="wrapper-content">
        <Header />
        <Switch>
          <Route path="/post/:slug">
            <PostDetailPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <div className="spacing" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
