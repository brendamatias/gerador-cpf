import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <main
      style={{
        background: "linear-gradient(168deg, #2A2634 0%, #271A45 100%)",
      }}
      className="h-screen flex items-center justify-center text-white text-center"
    >
      <Outlet />
    </main>
  );
};

export { DefaultLayout };
