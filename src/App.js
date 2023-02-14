import  { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { themeSettings } from "./theme";
import  Dashboard  from "./scenes/dashboard";
import  Layout  from "./scenes/layout";
import  Products  from "./scenes/Products";
import  Customers  from "./scenes/Customers";
import  Transactions  from "./scenes/Transactions";
import  Geography  from "./scenes/Geography";
import  Overview from "./scenes/overview";
import  Daily from "./scenes/daily";
import  Monthly from "./scenes/monthly";
import  Breakdown from "./scenes/breakdown"

function App() {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return <div className="app">
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes >
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/monthly" element={<Monthly />} />
            <Route path="/breakdown" element={<Breakdown />} />

          </Route>    
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
    
  </div>
}

export default App;
