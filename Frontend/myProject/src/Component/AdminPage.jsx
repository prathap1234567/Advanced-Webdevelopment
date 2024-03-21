import React from "react";
import "./Admin.css";

import { Link } from "react-router-dom";
const AdminPage = () => {
  return (
    <div>
      <>
        {/* Navigation*/}
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
          id="mainNav"
        >
          <a className="navbar-brand" href="index.html">
                DreamDay
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
              <li
                className="nav-item"
                data-toggle="tooltip"
                data-placement="right"
                title="Dashboard"
              >
                <br />
                <a className="nav-link" href="index.html">
                  <i className="fa fa-fw fa-dashboard" />
                  <span className="nav-link-text">Dashboard</span>
                </a>
              </li>
              <li
                className="nav-item"
                data-toggle="tooltip"
                data-placement="right"
                title="Dashboard"
              >
                <br />
                <Link to="/event" className="nav-link" href="index.html">
                  <span className="nav-link-text">Event</span>
                </Link>
                <Link to="/food" className="nav-link" href="index.html">
                  <span className="nav-link-text">Food Details</span>
                </Link>
                <Link to="/themeadmin" className="nav-link" href="index.html">
                  <span className="nav-link-text">Theme</span>
                </Link>
                <a
                className="nav-link"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <i className="fa fa-fw fa-sign-out" />
                <Link to="/"> Logout</Link>
              </a>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
               
              </li>
            </ul>
          </div>
        </nav>
        <div className="content-wrapper">
          <div className="container-fluid">
            {/* Breadcrumbs*/}
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <br />
                <br />
                <br />
                <a href="#">Dashboard</a>
              </li>
            </ol>
            {/* Icon Cards*/}
            <div className="row">
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-primary o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fa fa-fw fa-comments" />
                    </div>
                    <div className="mr-5">5 New Messages!</div>
                  </div>
                  <a
                    className="card-footer text-white clearfix small z-1"
                    href="#"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-warning o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fa fa-fw fa-list" />
                    </div>
                    <div className="mr-5">50 New Tasks!</div>
                  </div>
                  <a
                    className="card-footer text-white clearfix small z-1"
                    href="#"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-success o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fa fa-fw fa-shopping-cart" />
                    </div>
                    <div className="mr-5">45 New Orders!</div>
                  </div>
                  <a
                    className="card-footer text-white clearfix small z-1"
                    href="#"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-3">
                <div className="card text-white bg-danger o-hidden h-100">
                  <div className="card-body">
                    <div className="card-body-icon">
                      <i className="fa fa-fw fa-support" />
                    </div>
                    <div className="mr-5">13 New Tickets!</div>
                  </div>
                  <a
                    className="card-footer text-white clearfix small z-1"
                    href="#"
                  >
                    <span className="float-left">View Details</span>
                    <span className="float-right">
                      <i className="fa fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* Area Chart Example*/}

            <div className="row">
              <div className="col-lg-8">
                {/* Example Bar Chart Card*/}
                <div className="card mb-3"></div>
                {/* Card Columns Example Social Feed*/}
                <div className="mb-0 mt-4">
                  <i className="fa fa-newspaper-o" /> News Feed
                </div>
                <hr className="mt-2" />
                <div className="card-columns">
                  {/* Example Social Card*/}
                  <div className="card mb-3">
                    <a href="#">
                      <img
                        className="card-img-top img-fluid w-100"
                        src="https://images.pexels.com/photos/7507067/pexels-photo-7507067.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                      />
                    </a>
                    <div className="card-body">
                      <h6 className="card-title mb-1">
                        <a href="#">Arun</a>
                      </h6>
                      <p className="card-text small">
                        These waves are looking pretty good today!
                        <a href="#">#surfsup</a>
                      </p>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body py-2 small">
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-thumbs-up" />
                        Like
                      </a>
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-comment" />
                        Comment
                      </a>
                      <a className="d-inline-block" href="#">
                        <i className="fa fa-fw fa-share" />
                        Share
                      </a>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body small bg-faded">
                      <div className="media">
                        <img className="d-flex mr-3" src="" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <a href="#">
                      <img
                        className="card-img-top img-fluid w-100"
                        src="https://images.pexels.com/photos/6224711/pexels-photo-6224711.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                      />
                    </a>
                    <div className="card-body">
                      <h6 className="card-title mb-1">
                        <a href="#">Aravindh</a>
                      </h6>
                      <p className="card-text small">
                        These waves are looking pretty good today!
                        <a href="#">#surfsup</a>
                      </p>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body py-2 small">
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-thumbs-up" />
                        Like
                      </a>
                      <a className="mr-3 d-inline-block" href="#">
                        <i className="fa fa-fw fa-comment" />
                        Comment
                      </a>
                      <a className="d-inline-block" href="#">
                        <i className="fa fa-fw fa-share" />
                        Share
                      </a>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body small bg-faded">
                      <div className="media">
                        <img className="d-flex mr-3" src="" alt="" />
                      </div>
                    </div>
                  </div>

                  {/* Example Social Card*/}

                  {/* Example Social Card*/}
                </div>
                {/* /Card Columns*/}
              </div>
              <div className="col-lg-4">
                <div className="card mb-3">
                  <div className="card-header">
                    <i className="fa fa-bell-o" /> Feed Example
                  </div>
                  <div className="list-group list-group-flush small">
                    <a
                      className="list-group-item list-group-item-action"
                      href="#"
                    >
                      <div className="media">
                        <img
                          className="d-flex mr-3 rounded-circle"
                          src="http://placehold.it/45x45"
                          alt=""
                        />
                        <div className="media-body">
                          <strong>Yash</strong>sent you a new message!
                          <div className="text-muted smaller">
                            Today at 4:37 PM - 1hr ago
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      href="#"
                    >
                      <div className="media">
                        <img
                          className="d-flex mr-3 rounded-circle"
                          src="http://placehold.it/45x45"
                          alt=""
                        />
                        <div className="media-body">
                          <strong>Jerry</strong>added a new photo to the album
                          <strong>Beach</strong>.
                          <div className="text-muted smaller">
                            Today at 4:31 PM - 1hr ago
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      href="#"
                    >
                      <div className="media">
                        <img
                          className="d-flex mr-3 rounded-circle"
                          src="http://placehold.it/45x45"
                          alt=""
                        />
                        <div className="media-body">
                          <i className="fa fa-code-fork" />
                          <strong>Monisha</strong>forked the
                          <strong>startbootstrap-sb-admin</strong>repository on
                          <strong>GitHub</strong>.
                          <div className="text-muted smaller">
                            Today at 3:54 PM - 2hrs ago
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Example DataTables Card*/}
          </div>

          {/* Logout Modal*/}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Ready to Leave?
                  </h5>
                  <button
                    className="close"
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  Select "Logout" below if you are ready to end your current
                  session.
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <a className="btn btn-primary" href="login.html">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AdminPage;
