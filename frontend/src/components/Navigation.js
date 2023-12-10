import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">HOME</Link>
        <Link to="../TopicsPage">TOPICS</Link>
        <Link to="../ActivitiesPage">ACTIVITIES</Link>
        <Link to="../GalleryPage">GALLERY</Link>
        <Link to="../OrderPage">ORDER</Link>
        {/* <Link to="../">CONTACTS</Link>
        <Link to="../">STAFF</Link> */}
    </nav>
  );
}

export default Navigation;
