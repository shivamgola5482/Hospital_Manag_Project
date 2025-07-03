import { Link } from 'react-router-dom';
import DashboardCard from './DashCard';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center px-4">
      <div className="w-full max-w-screen-xl bg-white p-6 sm:p-10 rounded-lg shadow-xl animate-fade-in-up">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-6 text-center">
          Welcome to HMS Dashboard
        </h1>
        <p className="text-md sm:text-lg text-gray-600 mb-6 sm:mb-8 text-center">
          Efficiently manage your hospital operations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/patients">
            <DashboardCard
              title="Manage Patients"
              description="View, add, edit, or delete patient records."
              icon="🏥"
            />
          </Link>
          <Link to="/doctors">
            <DashboardCard
              title="Manage Doctors"
              description="Handle doctor profiles and specialties."
              icon="👨‍⚕️"
            />
          </Link>
          <Link to="/appointments">
            <DashboardCard
              title="Schedule Appointments"
              description="Manage patient appointments and schedules."
              icon="📅"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
