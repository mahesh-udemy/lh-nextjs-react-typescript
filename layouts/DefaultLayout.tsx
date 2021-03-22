import React, { ReactElement } from "react";
import Header from "./Header";
type DefaultLayoutProps = {
  children?: ReactElement;
};

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children } = props;
  return (
    <div className="wrapper">
      <div className="main-panel">
        <Header></Header>
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
