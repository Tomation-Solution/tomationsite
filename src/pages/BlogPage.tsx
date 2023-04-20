import React, { useEffect, useState } from "react";
import BlogLayout from "../components/BlogLayout/BlogLayout";
import ExploreBlogTopics from "../components/ExploreBlogTopics/ExploreBlogTopics";
import BlogNav from "../components/BlogNav/BlogNav";
import Preloader from "../components/Preloader/Preloader";
import PostPreview from "../components/PostPreview/PostPreview";
import publicRequest from "../axios/axios-utils";
import { useQuery } from "react-query";
import { FormError } from "../global/forms.styles";

export type BlogType = {
  id: number;
  comments: any[];
  blog_paragraphs: { input_text: string; image: string }[];
  title: string;
  main_image: string;
  author: string;
  category: string;
  date_created: string;
  get_paragraph_intro: string;
};

const BlogPage = () => {
  const { isLoading, isFetching, data, isError } = useQuery(
    "all-blogs",
    () =>
      publicRequest.get(
        "blog/blog-view/?categories__names=Performance Management"
      ),
    {
      select: (data) => data.data,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <BlogLayout>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <BlogNav />
      <br />
      {isLoading || isFetching ? (
        <Preloader />
      ) : !isError ? (
        <>
          {data.map((item: BlogType, index: number) => (
            <PostPreview
              key={index}
              variant={index % 2 == 0 ? "var1" : "var2"}
              blog={item}
            />
          ))}
        </>
      ) : (
        <FormError style={{ textAlign: "center" }}>Can't Fetch Data</FormError>
      )}
      <br />

      <ExploreBlogTopics />
    </BlogLayout>
  );
};

export default BlogPage;
