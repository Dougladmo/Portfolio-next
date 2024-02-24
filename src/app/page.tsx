import MemojiContainer from "@/components/MemojiContainer";
import Transition from "@/components/Transition"

export default function Home() {
  return (
    <>
      <Transition />
      <div className="flex flex-col md:flex-row justify-between px-10 items-center">
        <div className="text-white w-full mx-auto">
          <h1>Home</h1>
        </div>
        <div className="w-full mx-auto">
          <MemojiContainer />
        </div>
      </div>
    </>
  );
}
