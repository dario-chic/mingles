import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
import PageLayout from "../../components/layouts/PageLayout";
import ReactMarkdown from "react-markdown";

export default function Home(props) {
  const { title, description, markdown } = props.articleData;

  return (
    <>
      <PageLayout
        title={title}
        description={description}
        header={false}
        nav="school"
      >
        <section className="section section--article">
          <div className="article">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </section>
      </PageLayout>
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { article: "guia-para-aprender-ingles" } },
      { params: { article: "lista-de-recursos-para-aprender-ingles" } },
      { params: { article: "aprende-a-usar-anki-como-un-experto" } },
    ],
  };
}

export async function getStaticProps(context) {
  const article = context.params.article;

  const res = await fetch(
    `https://mingles.vercel.app/articles/${article}/articleInfo.json`
  );
  const json = await res.json();

  const guide = await fetch(json.markdown);
  const markdown = await guide.text();

  return {
    props: {
      articleData: {
        title: json.title,
        description: json.description,
        markdown,
      },
    },
  };
}
