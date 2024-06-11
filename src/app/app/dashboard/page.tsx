import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard | Budget Manager',
    description: 'A budget manager for all your needs.',
};

const DashboardPage = () => {
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

const Dashboard = () => {
    return <DashboardPage />;
};

export default Dashboard;
