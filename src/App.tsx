import { useState, useEffect } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./rootLayout/RootLayout";
import Home from "./pages/home/Home";
import DetailPage from "./pages/detailPage/DetailPage";
import NotFound from "./pages/notFound/NotFound";
import './App.css';
import { IBeer } from "../interfaces/IBeer";
import Beers from "./pages/beers/beers";
import RandomBeer from "./pages/randomBeer/RandomBeer";

// Erklärung leeres Array Zeile 13: Das leere Array ([]) wird verwendet, weil beim Initialisieren des useState noch keine Bierdaten vorhanden sind. Sobald die Bierdaten von der API abgerufen werden, wird das Array aktualisiert.
function App() {
  const [beers, setBeers] = useState<IBeer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch('https://ih-beers-api2.herokuapp.com/beers');
        const data: IBeer[] = await response.json();
        setBeers(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching beers", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBeers();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="beers" element={<Beers beers={beers} loading={loading} />} />
        <Route path="random" element={<RandomBeer />} />
        <Route path="beers/:beerId" element={<DetailPage beers={beers} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;