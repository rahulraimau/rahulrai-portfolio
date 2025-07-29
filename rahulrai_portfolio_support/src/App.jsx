import { useEffect, useState } from 'react';
import ProjectCard from './components/ProjectCard';
import './index.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const allProjects = [
      {
        name: 'Soccer Player Re-Identification',
        description: 'Used YOLOv11, ResNet50, and cosine similarity to track soccer players in video frames.',
        url: 'https://github.com/rahulraimau/Soccer-Player-Tracking'
      },
      {
        name: 'Retail Sales & Market Basket Analysis',
        description: 'SQL and Python-based analysis with Tableau dashboards for retail insights.',
        url: 'https://github.com/rahulraimau/Retail-Sales-Analysis'
      },
      {
        name: 'Credit Card Fraud Detection',
        description: 'XGBoost + SMOTE used to detect fraud with ~94% ROC-AUC.',
        url: 'https://github.com/rahulraimau/Credit-Card-Fraud-Detection'
      },
      {
        name: 'Electricity Demand Forecasting',
        description: 'Used ARIMA and Prophet to forecast energy consumption.',
        url: 'https://github.com/rahulraimau/Electricity-Demand-Forecasting'
      },
      {
        name: 'E-commerce Customer Segmentation',
        description: 'KMeans-based customer segmentation with Tableau visualization.',
        url: 'https://github.com/rahulraimau/Customer-Segmentation'
      },
      {
        name: 'Insurance Claims Prediction',
        description: 'Built regression models to predict insurance claim amounts.',
        url: 'https://github.com/rahulraimau/Insurance-Claims-Prediction'
      },
      {
        name: 'Consumer Complaint Analysis',
        description: 'Excel dashboard using PivotTables and charts to summarize complaint trends.',
        url: 'https://github.com/rahulraimau/Consumer-Complaint-Analysis'
      },
      {
        name: 'Zomato Restaurant Rating Prediction',
        description: 'Analyzed Zomato reviews using NLP and built predictive models.',
        url: 'https://github.com/rahulraimau/Zomato-Restaurant-Rating-Prediction'
      }
    ];
    setProjects(allProjects);
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Rahul Rai</h1>
        <p className="tagline">Data Analyst | Python | SQL | Machine Learning</p>
        <div className="links">
          <a href="https://github.com/rahulraimau">GitHub</a>
          <a href="https://linkedin.com/in/rahul-rai-629554245">LinkedIn</a>
          <a href="mailto:rahulraimau5@gmail.com">Email</a>
        </div>
      </header>

      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default App;