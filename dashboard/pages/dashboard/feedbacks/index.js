import Dashboard from "@/layouts/Dashboard";

export default function Page() {
  return <h1>List of feedbacks</h1>;
}

Page.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>;
};
