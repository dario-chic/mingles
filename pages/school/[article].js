import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
import PageLayout from "../../components/layouts/PageLayout";

export default function Home() {
  const [markdown, setMarkdown] = useState("");
  const router = useRouter();
  const { article } = router.query;

  useEffect(() => {
    fetch(`/articles/${article}.md`)
      .then((res) => res.text())
      .then((text) => {
        console.log(text);
        const md = new showdown.Converter().makeHtml(text);
        setMarkdown(md);
      });
  }, [article]);

  return (
    <>
      <PageLayout
        title="Guía para Aprender Inglés Completa"
        header={false}
        nav="school"
      >
        <div className="section">
          <article
            className="article"
            dangerouslySetInnerHTML={{ __html: markdown }}
          ></article>
        </div>
      </PageLayout>
    </>
  );
}
