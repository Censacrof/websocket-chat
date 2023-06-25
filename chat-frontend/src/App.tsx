import { FC } from "react";
import { Home } from "./pages/home/Home";

export interface AppProps {
  _Home?: typeof Home;
}

export const App: FC<AppProps> = ({ _Home = Home }) => {
  return (
    <>
      <_Home />
    </>
  );
};
