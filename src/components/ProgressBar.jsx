import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ 
  percentage, 
  color = 'bg-gradient-to-r from-cyan-500 to-blue-500', 
  showLabel = true,
  labelPosition = 'inside',
  animated = true,
  height = 'h-3',
  rounded = 'rounded-full'
}) => {
  // Ensure percentage is between 0 and 100
  const clampedPercentage = Math.min(100, Math.max(0, percentage));

  return (
    <div className="w-full space-y-1">
      {showLabel && labelPosition === 'above' && (
        <div className="flex justify-between text-sm font-medium text-gray-700">
          <span>Progress</span>
          <span>{clampedPercentage}%</span>
        </div>
      )}

      <div className={`w-full bg-gray-100 ${rounded} overflow-hidden ${height}`}>
        <div 
          className={`${color} ${height} ${rounded} shadow-lg ${animated ? 'transition-all duration-500 ease-out' : ''}`}
          style={{ 
            width: `${clampedPercentage}%`,
            boxShadow: '0 0 8px rgba(0, 194, 255, 0.5)'
          }}
          role="progressbar"
          aria-valuenow={clampedPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {showLabel && labelPosition === 'inside' && clampedPercentage > 20 && (
            <span className="text-white text-xs font-bold absolute right-2 top-1/2 transform -translate-y-1/2">
              {clampedPercentage}%
            </span>
          )}
        </div>
      </div>

      {showLabel && labelPosition === 'below' && (
        <div className="flex justify-between text-sm font-medium text-gray-700">
          <span>Progress</span>
          <span>{clampedPercentage}%</span>
        </div>
      )}
    </div>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string,
  showLabel: PropTypes.bool,
  labelPosition: PropTypes.oneOf(['inside', 'above', 'below']),
  animated: PropTypes.bool,
  height: PropTypes.string,
  rounded: PropTypes.string,
};

// Predefined color options
ProgressBar.colors = {
  BLUE: 'bg-gradient-to-r from-cyan-500 to-blue-500',
  PINK: 'bg-gradient-to-r from-pink-500 to-rose-500',
  GREEN: 'bg-gradient-to-r from-emerald-400 to-teal-600',
  PURPLE: 'bg-gradient-to-r from-purple-500 to-indigo-600',
  SUNSET: 'bg-gradient-to-r from-amber-500 to-pink-500',
  RAINBOW: 'bg-gradient-to-r from-red-500 via-yellow-400 to-green-500',
};

export default ProgressBar;