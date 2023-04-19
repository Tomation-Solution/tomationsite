import React from "react";
import {
  PostPreviewContainer,
  PostPreviewContentContainer,
  PostPreviewImageContainer,
} from "./PostPreview.styles";
import Button from "../../global/Button/Button";
import { useNavigate } from "react-router-dom";
import { BlogType } from "../../pages/BlogPage";

type Prop = {
  variant?: "var1" | "var2";
  blog: BlogType;
};

const PostPreview = ({ variant = "var1", blog }: Prop) => {
  const navigate = useNavigate();

  return (
    <>
      <PostPreviewContainer variant={variant}>
        <PostPreviewImageContainer variant={variant}>
          <img src={blog.main_image} alt="" />
        </PostPreviewImageContainer>
        <br />
        <br />
        <br />
        <br />
        <br />
        <PostPreviewContentContainer>
          <h2>{blog.title}</h2>
          <p>{blog.get_paragraph_intro}...</p>
          <Button
            styleType="bright"
            // clickfn={() => route.push("/blog/" + blog.id)}
            clickfn={() => navigate(`/blog/${blog.id}`)}
          >
            Read more
          </Button>
          {/* <p><strong>HR Management/10 Mins Read</strong></p> */}
        </PostPreviewContentContainer>
      </PostPreviewContainer>
      <br />
      <br />
    </>
  );
};

export default PostPreview;
