import "../styles/loading.css";

function LoadingBcg({ userSearch }) {
  return (
    <>
      <div className={userSearch.length === 0 ? "spinner" : "spinner dis"}>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </>
  );
}

export default LoadingBcg;
