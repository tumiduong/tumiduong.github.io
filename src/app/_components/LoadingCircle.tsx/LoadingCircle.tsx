import { CircularProgress } from '@mui/material';

export const LoadingCircle = () => {
  return (
    <>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id='my_gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' stopColor='rgba(180, 245, 245, 0.4)' />
            <stop offset='100%' stopColor='rgba(207, 158, 183, 0.4)' />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        sx={{
          'svg circle': { stroke: 'url(#my_gradient)' },
          strokeLinecap: 'round',
        }}
        size={90}
        thickness={5.5}
      />
    </>
  );
};
