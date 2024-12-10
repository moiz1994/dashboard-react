import {Link} from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
      {/* <!-- partial:partials/_sidebar.html --> */}
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <Link className="sidebar-brand brand-logo" to="/">
            <span className="logo">SBL PORTAL</span>
          </Link>
          <Link className="sidebar-brand brand-logo-mini" to="/">
            <span className="logo">SBL</span>
          </Link>
        </div>
        <ul className="nav">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  <img className="img-xs rounded-circle " src="assets/images/faces/face15.jpg" alt=""/>
                  <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal">Henry Klein</h5>
                  <span>Gold Member</span>
                </div>
              </div>
              <Link to="#" id="profile-dropdown" data-toggle="dropdown"><i className="mdi mdi-dots-vertical"></i></Link>
              <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
                <Link to="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-settings text-primary"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">Account settings</p>
                  </div>
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-onepassword  text-info"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
                  </div>
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-calendar-today text-success"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
                  </div>
                </Link>
              </div>
            </div>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link">Navigation</span>
          </li>
          <li className="nav-item menu-items">
            <Link className="nav-link" to="/">
              <span className="menu-icon">
                <i className="mdi mdi-speedometer"></i>
              </span>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item menu-items">
            <Link className="nav-link" data-toggle="collapse" to="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <span className="menu-icon">
                <i className="mdi mdi-laptop"></i>
              </span>
              <span className="menu-title">Basic UI Elements</span>
              <i className="menu-arrow"></i>
            </Link>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="pages/ui-features/buttons.html">Buttons</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="pages/ui-features/dropdowns.html">Dropdowns</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="pages/ui-features/typography.html">Typography</Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item menu-items">
            <Link className="nav-link" to="pages/forms/basic_elements.html">
              <span className="menu-icon">
                <i className="mdi mdi-playlist-play"></i>
              </span>
              <span className="menu-title">Form Elements</span>
            </Link>
          </li>
          <li className="nav-item menu-items">
            <Link className="nav-link" to="pages/tables/basic-table.html">
              <span className="menu-icon">
                <i className="mdi mdi-table-large"></i>
              </span>
              <span className="menu-title">Tables</span>
            </Link>
          </li>
          <li className="nav-item menu-items">
            <Link className="nav-link" to="pages/charts/chartjs.html">
              <span className="menu-icon">
                <i className="mdi mdi-chart-bar"></i>
              </span>
              <span className="menu-title">Charts</span>
            </Link>
          </li>
          <li className="nav-item menu-items">
            <Link className="nav-link" to="pages/icons/mdi.html">
              <span className="menu-icon">
                <i className="mdi mdi-contacts"></i>
              </span>
              <span className="menu-title">Icons</span>
            </Link>
          </li>
          <li className="nav-item menu-items">
            <Link className="nav-link" data-toggle="collapse" to="#auth" aria-expanded="false" aria-controls="auth">
              <span className="menu-icon">
                <i className="mdi mdi-security"></i>
              </span>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow"></i>
            </Link>
            <div className="collapse" id="auth">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className="nav-link" to="pages/samples/blank-page.html"> Blank Page </Link></li>
                <li className="nav-item"> <Link className="nav-link" to="pages/samples/error-404.html"> 404 </Link></li>
                <li className="nav-item"> <Link className="nav-link" to="pages/samples/error-500.html"> 500 </Link></li>
                <li className="nav-item"> <Link className="nav-link" to="pages/samples/login.html"> Login </Link></li>
                <li className="nav-item"> <Link className="nav-link" to="pages/samples/register.html"> Register </Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item menu-items">
            <Link className="nav-link" to="http://www.bootstrapdash.com/demo/corona-free/jquery/documentation/documentation.html">
              <span className="menu-icon">
                <i className="mdi mdi-file-document-box"></i>
              </span>
              <span className="menu-title">Documentation</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;