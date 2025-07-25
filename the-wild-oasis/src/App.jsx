import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      //this is the time taken when we change value in the database to when it actually gets changed in browser
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              {/*when we go to: http://localhost:5173 we will automatically redirect to:http://localhost:5173/dashboard  */}
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />}></Route>

              <Route path="/bookings" element={<Bookings />}></Route>

              <Route path="/cabins" element={<Cabins />}></Route>

              <Route path="/users" element={<Users />}></Route>

              <Route path="/settings" element={<Settings />}></Route>

              <Route path="/account" element={<Account />}></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>

            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}
