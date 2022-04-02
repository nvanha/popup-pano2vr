import UserContext from "context/user";
import useAuthListener from "hooks/useAuthListener";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "routes/Routers";

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading</h1>}>
          <Routers />
        </Suspense>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
