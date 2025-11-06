import Logo from '../shared/assets/logo.svg';
const Test = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <img src={Logo} alt="로고" className="h-[20%] w-[60%]" />
      <p className="text-40px font-[700]">Flow-Pick 웹 도메인 입니다!</p>
    </div>
  );
};

export default Test;
