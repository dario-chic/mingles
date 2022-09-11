import About from "../components/About";
import Meetings from "../components/Meetings";
import Header from "../components/Header";
import PageLayout from "../components/layouts/PageLayout";
import School from "../components/School";
import Questions from "../components/Questions";

export default function Home() {
  return (
    <PageLayout header={true}>
      <About />
      <School />
      <Meetings />
      <Questions />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </PageLayout>
  );
}
