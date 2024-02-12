import { PropsWithChildren } from "react";

interface Main extends PropsWithChildren {}
interface AsideLayout extends PropsWithChildren {}

const AsideLayout = ({ children }: AsideLayout) => {
  return <div className="grid grid-cols-4 gap-4">{children}</div>;
};

const Main = ({ children }: AsideLayout) => {
  return <section className="col-span-3">{children}</section>;
};

AsideLayout.Main = Main;

export default AsideLayout;
