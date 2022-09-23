import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
import PageLayout from "../../components/layouts/PageLayout";
import ReactMarkdown from "react-markdown";
import Error404 from "../../components/Error404";
import Loader from "../../components/Loader";

export default function Home(props) {
  const [dataArticle, setDataArticle] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // const { title, description, markdown } = props.articleData;
  const router = useRouter();
  const { article } = router.query;

  useEffect(() => {
    setLoading(true);
    setError(false);
    setDataArticle(null);

    if (article) {
      const getArticle = async (url) => {
        try {
          const res = await fetch(url);

          if (!res.ok) throw { err: false };

          const json = await res.json();

          const guide = await fetch(json.markdown);
          const markdown = await guide.text();

          setDataArticle({
            title: json.title,
            description: json.description,
            markdown,
          });
        } catch (err) {
          setError(true);
        }
        setLoading(false);
      };

      getArticle(`/articles/${article}/articleInfo.json`);
    }
  }, [article]);

  return (
    <>
      {loading ? (
        <PageLayout title="Not Found" header={false} nav="school">
          <Loader />
        </PageLayout>
      ) : !error ? (
        <PageLayout
          title={dataArticle.title}
          description={dataArticle.description}
          header={false}
          nav="school"
        >
          <section className="section section--article">
            <div className="article">
              <ReactMarkdown>{dataArticle.markdown}</ReactMarkdown>
            </div>
          </section>
        </PageLayout>
      ) : (
        <PageLayout title="Not Found" header={false} nav="school">
          <Error404 />
        </PageLayout>
      )}
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
