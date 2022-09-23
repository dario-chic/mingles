import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
import PageLayout from "../../components/layouts/PageLayout";
import ReactMarkdown from "react-markdown";
import Error404 from "../../components/Error404";

export default function Home(props) {
  const [dataArticle, setDataArticle] = useState("loading");
  const [loading, setLoading] = useState(false);

  // const { title, description, markdown } = props.articleData;
  const router = useRouter();
  const { article } = router.query;
  console.log(router);

  useEffect(() => {
    const getArticle = async (url) => {
      const res = await fetch(url);
      console.log(res);
      const json = await res.json();

      const guide = await fetch(json.markdown);
      const markdown = await guide.text();

      setDataArticle({
        title: json.title,
        description: json.description,
        markdown,
      });
    };

    getArticle(`/articles/${article}/articleInfo.json`);
  }, [article]);

  return (
    <>
      <PageLayout
        title={dataArticle.title}
        description={dataArticle.description}
        header={false}
        nav="school"
      >
        <section className="section section--article">
          <div className="article">
            {dataArticle.markdown === null ? (
              <ReactMarkdown>{dataArticle.markdown}</ReactMarkdown>
            ) : (
              <Error404 />
            )}
          </div>
        </section>
      </PageLayout>
      {}
    </>
  );
}

// export async function getStaticPaths() {
//   return {
//     fallback: false,
//     paths: [
//       { params: { article: "guia-para-aprender-ingles" } },
//       { params: { article: "lista-de-recursos-para-aprender-ingles" } },
//       { params: { article: "aprende-a-usar-anki-como-un-experto" } },
//     ],
//   };
// }

// export async function getStaticProps(context) {
//   const article = context.params.article;

//   const res = await fetch(
//     `http://localhost:3000/articles/${article}/articleInfo.json`
//   );
//   const json = await res.json();

//   const guide = await fetch(json.markdown);
//   const markdown = await guide.text();

//   return {
//     props: {
//       articleData: {
//         title: json.title,
//         description: json.description,
//         markdown,
//       },
//     },
//   };
// }
