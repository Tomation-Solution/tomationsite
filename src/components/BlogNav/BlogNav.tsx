import React from "react";
import {
  BlogNavCategorieslink,
  BlogNavContainer,
  Categorieslink,
} from "./BlogNav.styles";

type Prop = {
  setLook_up?: (value: any) => void;
};

const BlogNav = ({ setLook_up }: Prop) => {
  const handleLook = (value: string) => {
    if (setLook_up) {
      setLook_up(value);
    }
  };

  return (
    <BlogNavContainer>
      <BlogNavCategorieslink>
        <Categorieslink
          onClick={(e) => handleLook("?categories__names=Email Marketing")}
        >
          Email Marketing
        </Categorieslink>
        <Categorieslink>Performance Management</Categorieslink>

        <Categorieslink>KPI Analytics</Categorieslink>
        <Categorieslink>KPI Analytics</Categorieslink>

        <Categorieslink>Payroll Management</Categorieslink>
        <Categorieslink>Leave Management</Categorieslink>
      </BlogNavCategorieslink>
      <br />
    </BlogNavContainer>
  );
};

export default BlogNav;
