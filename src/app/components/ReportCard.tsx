import React from 'react';

interface ReportCardProps {
  vehicle: string;
  damageDescription: string;
}

const ReportCard: React.FC<ReportCardProps> = ({ vehicle, damageDescription }) => {
  return (
    <div style={cardStyle}>
      <h2 style={vehicleStyle}>{vehicle}</h2>
      <p style={descriptionStyle}>{damageDescription}</p>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  backgroundColor: '#333',
  color: '#C0A554',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
};

const vehicleStyle: React.CSSProperties = {
  marginBottom: '10px',
  fontSize: '18px',
  color: '#C0A554',
};

const descriptionStyle: React.CSSProperties = {
  fontSize: '14px',
  lineHeight: '1.5',
  color: '#C0A554',
};

export default ReportCard;