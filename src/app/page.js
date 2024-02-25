import Header from "./components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <h1 className="text-center text-3xl my-5">Welcome to 크로스핏 붐!</h1>
      {/* 메인 페이지에 들어갈 컴포넌트들을 이곳에 추가합니다. */}
      <div className="flex justify-center">
        <video autoPlay muted loop controls className="w-full max-h-screen">
          <source src="/hyrox.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Home;
