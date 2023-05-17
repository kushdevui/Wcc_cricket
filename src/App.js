import React from "react";
import "./App.css";
import "./assets/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./assets/scss/custom.scss";
import "./assets/scss/custom-variables.scss";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.min";
import { Router } from "react-router-dom";
import { routes } from "./Controller/Routes";
import { history } from "./Controller/history";
import { PublicRoute } from "./Controller/PublicPath";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import LogOut from "./Components/Logout";
import PrivateRoute from "./Controller/PrivatePath";
import Home from "./Components/Home";
import Itinerary from "./Components/itinerary/Itinerary";
import Categories from "./Components/Categories";
import ManageCategories from "./Components/Categories/create";
import ManageTrips from "./Components/Trips/Create";
import Trips from "./Components/Trips";
import Blogs from "./Components/Blogs";
import ManageBlog from "./Components/Blogs/create";
import Testimonials from "./Components/Testimonials";
import ManageTestimonial from "./Components/Testimonials/create"


// import ManageTrips from "./Components/Trips/Create";
// import Itinerary from "./Components/itinerary/Itinerary";
// import Testimonials from "./Components/Home/Testimonials";
// import Testimonials from "./Components/Common-Components/Testimonials";
import Contacts from "./Components/Dashboard/Contacts";
import CustomizeTrip from "./Components/Dashboard/CustomizeTrip";
import Bookings from "./Components/Dashboard/Bookings";
import "./assets/css/responsive.css";
import Hotels from "./Components/Dashboard/Hotels";
import ManageHotels from "./Components/Dashboard/Hotels/create";

function App() {
  return (
    <div id="app_main" className={`App text-left`}>
      <Router history={history} getUserConfirmation={null}>
        <PublicRoute restricted exact path={routes.login} component={Login} />
        <PublicRoute exact path={routes.logout} component={LogOut} />
        <PublicRoute exact path={routes.dashboard.self} component={Dashboard} />
        <PublicRoute exact path={routes.dashboard.categories.self} component={Categories} />
        <PrivateRoute exact path={routes.dashboard.categories.create} component={ManageCategories} />
        <PrivateRoute exact path={routes.dashboard.trips.create} component={ManageTrips} />
        <PrivateRoute exact path={routes.dashboard.categories.edit} component={ManageCategories} />
        <PrivateRoute exact path={routes.dashboard.trips.self} component={Trips} />
        <PrivateRoute exact path={routes.dashboard.trips.edit} component={ManageTrips} />
        <PrivateRoute exact path={routes.dashboard.blogs.self} component={Blogs} />
        <PrivateRoute exact path={routes.dashboard.testimonial.self} component={Testimonials} />
        <PrivateRoute exact path={routes.dashboard.testimonial.create} component={ManageTestimonial} />
        <PrivateRoute exact path={routes.dashboard.testimonial.edit} component={ManageTestimonial} />
        <PrivateRoute exact path={routes.dashboard.blogs.create} component={ManageBlog} />
        <PrivateRoute exact path={routes.dashboard.blogs.edit} component={ManageBlog} />
        <PrivateRoute exact path={routes.dashboard.contacts.self} component={Contacts}/>
        <PrivateRoute exact path={routes.dashboard.customizeTrip.self} component={CustomizeTrip}/>
        <PrivateRoute exact path={routes.dashboard.bookings.self} component={Bookings}/>
        <PrivateRoute exact path={routes.dashboard.hotels.self} component={Hotels}/>
        <PrivateRoute exact path={routes.dashboard.hotels.create} component={ManageHotels}/>
        <PrivateRoute exact path={routes.dashboard.hotels.edit} component={ManageHotels}/>
      </Router>
    </div>
  );
}

export default App;
