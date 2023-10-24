import { Audio } from 'react-loader-spinner';
// import { Overlay } from 'components/Overlay/Overlay.styled';
export const Loader = () => {
  return (
    <div>
      <Audio
        height="40"
        width="40"
        radius="9"
        color="grey"
        ariaLabel="three-dots-loading"
        // wrapperStyle
        // wrapperClass
      />
    </div>
  );
};