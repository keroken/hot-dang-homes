import client from "../client";
import { gql } from "@apollo/client";
import { getPageStaticProps } from "../utils/getPageStaticProps";
import { Page } from "../components/Page";

export default Page;

export const getStaticProps = getPageStaticProps;

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
      }
    `
  });

  return {
    paths: data.pages.nodes.filter(page => page.uri !== "/").map(page => ({
      params: {
        slug: page.uri.substring(1, page.uri.length - 1).split('/'),
      }
    })),
    fallback: "blocking",
  };
};