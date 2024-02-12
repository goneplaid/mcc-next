import { PropsWithChildren } from "react";

interface Main extends PropsWithChildren {}
interface AsideLayout extends PropsWithChildren {}

const AsideLayout = ({ children }: AsideLayout) => {
  return <div className="grid grid-cols-4 gap-4">{children}</div>;
};

const Aside = ({ children }: AsideLayout) => {
  return <aside>{children}</aside>;
};

const Main = ({ children }: AsideLayout) => {
  return <section className="col-span-3">{children}</section>;
};

AsideLayout.Aside = Aside;
AsideLayout.Main = Main;

export default AsideLayout;
