import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./global-styles.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    {" "}
    <BrowserRouter>
      {" "}
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
