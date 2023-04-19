import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import publicRequest from "../axios/axios-utils";
import BlogLayout from "../components/BlogLayout/BlogLayout";
import Preloader from "../components/Preloader/Preloader";
import {
  BlogDetailContentContainer,
  BlogDetailMainContainer,
  BlogDetailMainImageContainer,
  BlogDetailOurProductCardContainer,
  BlogDetailOurProductContainer,
  BlogHeaderContainer,
  ContentPane,
} from "../components/BlogDetails/BlogDetails.styles";
import { BlogType } from "./BlogPage";
import { handleDemo } from "../utils/extraFunctions";
import { FormError } from "../global/forms.styles";

import perfomance from "../assets/perfomance.jpeg";
import hr_image from "../assets/hr_image.jpeg";

const SingleBlogPage = () => {
  const { id } = useParams();

  const { isLoading, isFetching, data, isError } = useQuery(
    `blog-${id}`,
    () => publicRequest.get(`blog/blog-view/${id}`),
    {
      select: (data) => data.data,
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
      {isLoading || isFetching ? (
        <Preloader />
      ) : !isError ? (
        <BlogDetailMainContainer>
          {data ? (
            <BlogDetailContentContainer>
              <BlogDetailMainImageContainer>
                <img src={data.main_image} alt="" />
              </BlogDetailMainImageContainer>

              <BlogHeaderContainer>
                <h2>{data.title}</h2>
                <div>
                  <p>{new Date(data.date_created).toDateString()}</p>
                  <p>
                    <strong>writer: </strong>
                    <span>{data.author} </span>
                  </p>
                </div>
                {/* <p><strong>HR Management/10 Mins Read</strong></p> */}
              </BlogHeaderContainer>

              {data.blog_paragraphs.length != 0
                ? data.blog_paragraphs.map(
                    (data: BlogType["blog_paragraphs"][0], index: number) => (
                      <ContentPane key={index}>
                        <img src={data.image} alt="" />
                        <p>{data.input_text}</p>
                      </ContentPane>
                    )
                  )
                : ""}
            </BlogDetailContentContainer>
          ) : (
            ""
          )}
          <br />
          <br />
          <BlogDetailOurProductContainer>
            <h2>Our Products</h2>
            <br />
            <BlogDetailOurProductCardContainer onClick={handleDemo}>
              <img src={hr_image} alt="" />
              <h3>HR Administration</h3>
              <p>
                Be on top of your game by relying on our automated HR tasks
                management syste..{" "}
              </p>
            </BlogDetailOurProductCardContainer>

            <br />
            <br />
            <br />
            <br />
            <BlogDetailOurProductCardContainer onClick={handleDemo}>
              <img src={perfomance} alt="" />
              <h3>Performance Management</h3>
              <p>
                Performance management in any organization aims at extensively
                improving organizat..
              </p>
            </BlogDetailOurProductCardContainer>
          </BlogDetailOurProductContainer>
        </BlogDetailMainContainer>
      ) : (
        <FormError>Can't get Blog Data</FormError>
      )}
    </BlogLayout>
  );
};

export default SingleBlogPage;
