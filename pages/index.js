import About from "../components/About";
import Meetings from "../components/Meetings";
import Header from "../components/Header";
import PageLayout from "../components/layouts/PageLayout";
import School from "../components/School";
import Questions from "../components/Questions";
import Team from "../components/Team";

export default function Home() {
  return (
    <PageLayout header={true}>
      <About />
      <School />
      <Meetings />
      <Team />
      <Questions />
    </PageLayout>
  );
}
