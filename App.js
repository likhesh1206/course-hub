import React, { Component } from 'react';
import './global.css';
import './App.css';
import Likhesh24BCE0463EnrollmentProvider from './context/EnrollmentContext';
import Likhesh24BCE0463Navbar from './components/Navbar/Navbar';
import Likhesh24BCE0463SearchBar from './components/SearchBar/SearchBar';
import Likhesh24BCE0463CourseList from './components/CourseList/CourseList';
import Likhesh24BCE0463Modal from './components/Modal/Modal';
import Likhesh24BCE0463EnrollmentForm from './components/EnrollmentForm/EnrollmentForm';
import Likhesh24BCE0463Dashboard from './components/Dashboard/Dashboard';
import Likhesh24BCE0463Portfolio from './components/Portfolio/Portfolio';
import coursesData from './data/courses';

/* ===================================================================
   App Component (Root) — Likhesh | 24BCE0463
   Main application shell with page routing, search/filter/sort logic,
   and modal management.
   =================================================================== */

class Likhesh24BCE0463App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likheshActivePage_24BCE0463: 'courses',
      likheshAllCourses_24BCE0463: [],
      likheshSearchQuery_24BCE0463: '',
      likheshCategoryFilter_24BCE0463: 'All',
      likheshSortBy_24BCE0463: 'title',
      likheshSelectedCourse_24BCE0463: null,
    };

    console.log('[Likhesh | 24BCE0463] App component initialized');
  }

  componentDidMount() {
    // Load mock course data on mount — Likhesh 24BCE0463
    this.setState({ likheshAllCourses_24BCE0463: coursesData });
    console.log(
      '[Likhesh | 24BCE0463] Courses loaded:',
      coursesData.length,
      'courses'
    );
  }

  // Method: navigate between pages — Likhesh 24BCE0463
  handleNavigateLikhesh24BCE0463 = (page) => {
    this.setState({ likheshActivePage_24BCE0463: page });
    console.log('[Likhesh | 24BCE0463] Navigated to:', page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Method: search handler — Likhesh 24BCE0463
  handleSearchChangeLikhesh24BCE0463 = (query) => {
    this.setState({ likheshSearchQuery_24BCE0463: query });
  };

  // Method: category filter handler — Likhesh 24BCE0463
  handleCategoryChangeLikhesh24BCE0463 = (category) => {
    this.setState({ likheshCategoryFilter_24BCE0463: category });
  };

  // Method: sort handler — Likhesh 24BCE0463
  handleSortChangeLikhesh24BCE0463 = (sortBy) => {
    this.setState({ likheshSortBy_24BCE0463: sortBy });
  };

  // Method: open course detail modal — Likhesh 24BCE0463
  handleViewDetailsLikhesh24BCE0463 = (course) => {
    this.setState({ likheshSelectedCourse_24BCE0463: course });
    console.log(
      '[Likhesh | 24BCE0463] Viewing course details:',
      course.code
    );
  };

  // Method: close modal — Likhesh 24BCE0463
  handleCloseModalLikhesh24BCE0463 = () => {
    this.setState({ likheshSelectedCourse_24BCE0463: null });
  };

  // Method: get filtered and sorted courses — Likhesh 24BCE0463
  getFilteredCoursesLikhesh24BCE0463 = () => {
    const {
      likheshAllCourses_24BCE0463,
      likheshSearchQuery_24BCE0463,
      likheshCategoryFilter_24BCE0463,
      likheshSortBy_24BCE0463,
    } = this.state;

    const likheshQuery_24BCE0463 = likheshSearchQuery_24BCE0463.toLowerCase().trim();

    // Filter — Likhesh 24BCE0463
    let likheshFiltered_24BCE0463 = likheshAllCourses_24BCE0463.filter(
      (course) => {
        // Category filter
        if (
          likheshCategoryFilter_24BCE0463 !== 'All' &&
          course.category !== likheshCategoryFilter_24BCE0463
        ) {
          return false;
        }

        // Search filter (name, code, instructor, tags)
        if (likheshQuery_24BCE0463) {
          const likheshSearchable_24BCE0463 = [
            course.title,
            course.code,
            course.instructor,
            ...course.tags,
          ]
            .join(' ')
            .toLowerCase();

          if (!likheshSearchable_24BCE0463.includes(likheshQuery_24BCE0463)) {
            return false;
          }
        }

        return true;
      }
    );

    // Sort — Likhesh 24BCE0463
    likheshFiltered_24BCE0463.sort((a, b) => {
      switch (likheshSortBy_24BCE0463) {
        case 'credits':
          return b.credits - a.credits;
        case 'seats':
          return (
            b.totalSeats - b.enrolledCount - (a.totalSeats - a.enrolledCount)
          );
        case 'title':
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return likheshFiltered_24BCE0463;
  };

  render() {
    const {
      likheshActivePage_24BCE0463,
      likheshSearchQuery_24BCE0463,
      likheshCategoryFilter_24BCE0463,
      likheshSortBy_24BCE0463,
      likheshSelectedCourse_24BCE0463,
    } = this.state;

    // Variable: filtered courses — Likhesh 24BCE0463
    const likheshFilteredCourses_24BCE0463 =
      this.getFilteredCoursesLikhesh24BCE0463();

    return (
      <Likhesh24BCE0463EnrollmentProvider>
        <div className="app" id="app-likhesh-24BCE0463">
          {/* Navbar */}
          <Likhesh24BCE0463Navbar
            activePage={likheshActivePage_24BCE0463}
            onNavigate={this.handleNavigateLikhesh24BCE0463}
          />

          {/* Main content */}
          <main className="main">
            {/* ===== Courses Page — Likhesh 24BCE0463 ===== */}
            {likheshActivePage_24BCE0463 === 'courses' && (
              <div className="container">
                <Likhesh24BCE0463SearchBar
                  searchQuery={likheshSearchQuery_24BCE0463}
                  onSearchChange={this.handleSearchChangeLikhesh24BCE0463}
                  categoryFilter={likheshCategoryFilter_24BCE0463}
                  onCategoryChange={this.handleCategoryChangeLikhesh24BCE0463}
                  sortBy={likheshSortBy_24BCE0463}
                  onSortChange={this.handleSortChangeLikhesh24BCE0463}
                  resultCount={likheshFilteredCourses_24BCE0463.length}
                />
                <Likhesh24BCE0463CourseList
                  courses={likheshFilteredCourses_24BCE0463}
                  onViewDetails={this.handleViewDetailsLikhesh24BCE0463}
                />
              </div>
            )}

            {/* ===== Dashboard Page — Likhesh 24BCE0463 ===== */}
            {likheshActivePage_24BCE0463 === 'dashboard' && (
              <Likhesh24BCE0463Dashboard
                onNavigate={this.handleNavigateLikhesh24BCE0463}
              />
            )}

            {/* ===== Register Page — Likhesh 24BCE0463 ===== */}
            {likheshActivePage_24BCE0463 === 'register' && (
              <Likhesh24BCE0463EnrollmentForm
                onNavigate={this.handleNavigateLikhesh24BCE0463}
              />
            )}

            {/* ===== Portfolio Page — Likhesh 24BCE0463 ===== */}
            {likheshActivePage_24BCE0463 === 'portfolio' && (
              <Likhesh24BCE0463Portfolio
                onNavigate={this.handleNavigateLikhesh24BCE0463}
              />
            )}
          </main>

          {/* Modal — Likhesh 24BCE0463 */}
          {likheshSelectedCourse_24BCE0463 && (
            <Likhesh24BCE0463Modal
              course={likheshSelectedCourse_24BCE0463}
              onClose={this.handleCloseModalLikhesh24BCE0463}
            />
          )}

          {/* Footer — Likhesh 24BCE0463 */}
          <footer className="footer">
            <p>
              Built with <span className="footerHeart">❤️</span> by{' '}
              <strong>Likhesh — 24BCE0463</strong> | CourseHub VIT Registration
              Portal © 2026
            </p>
          </footer>
        </div>
      </Likhesh24BCE0463EnrollmentProvider>
    );
  }
}

export default Likhesh24BCE0463App;
