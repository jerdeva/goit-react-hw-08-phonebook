import { ThreeCircles } from 'react-loader-spinner';
// import { Overlay } from 'components/Overlay/Overlay.styled';
export const Loader = () => {
  return (
    <div>
<ThreeCircles
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"

/>
    </div>
  );
};