// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
import TopicsPage from './pages/TopicsPage';
import ActivitiesPage from './pages/ActivitiesPage';
// import Activity from './components/Activity';
// import ActivityList from './components/ActivityList';
import AddActivityPageForm from './pages/AddActivityPageForm';
import EditActivityPageForm from './pages/EditActivityPageForm';
import GalleryPage from './pages/GalleryPage';
import OrderPage from './pages/OrderPage';


// import MoviesPage from './pages/MoviesPage';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
// import AddMoviePageForm from './pages/AddMoviePageForm';
// import EditMoviePageForm from './pages/EditMoviePageForm';

// If your schema requires SHORT data input, then use the TABLE design.
// import EditMoviePageTable from './pages/EditMoviePageTable';
// import AddMoviePageTable from './pages/AddMoviePageTable';
import HomePage from './pages/HomePage';

// Define the function that renders the content in Routes, using State.
function App() {

  const [activity, setActivityToEdit] = useState([]);

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Kathrina Elting
              <img 
              src="/android-chrome-192x192.png" alt="icon with initials" />  
            </h1>
            <p>Web Development Portfolio Fall 2023</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/TopicsPage" element={<TopicsPage/>} />
                    <Route path="/ActivitiesPage" element={<ActivitiesPage setActivity={setActivityToEdit}/>} />
                    <Route path="/GalleryPage" element={<GalleryPage/>} />
                    <Route path="/OrderPage" element={<OrderPage/>} />
                 
                    Use these if your schema requires LONG data input:
                    {/* <Route path="/create" element={<AddMoviePageTable />} /> 
                    <Route path="/update" element={<EditMoviePageTable movieToEdit={movie} />} /> */}

                    {/* Or these if your schema requires SHORT data input: */}
                     <Route path="/AddActivityPageForm" element={<AddActivityPageForm />} />   
                     <Route path="/EditActivityPageFor" element={<EditActivityPageForm activityToEdit={activity} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>Copyright &copy; 2023 Kathrina Elting</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;