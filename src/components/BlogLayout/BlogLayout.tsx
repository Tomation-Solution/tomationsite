import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const BlogLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default BlogLayout;
