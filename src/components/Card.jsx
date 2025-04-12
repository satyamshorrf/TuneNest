import React from 'react';

// Card wrapper
export const Card = ({ children, className = '' }) => {
  return (
    <div className={`rounded-xl bg-white/5 border border-white/10 shadow-sm ${className}`}>
      {children}
    </div>
  );
};

// Card header
export const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={`p-4 border-b border-white/10 ${className}`}>
      {children}
    </div>
  );
};

// Card title
export const CardTitle = ({ children, className = '' }) => {
  return (
    <h3 className={`text-lg font-semibold text-white ${className}`}>
      {children}
    </h3>
  );
};

// Card content
export const CardContent = ({ children, className = '' }) => {
  return (
    <div className={`p-4 text-gray-300 ${className}`}>
      {children}
    </div>
  );
};


export default Card;
