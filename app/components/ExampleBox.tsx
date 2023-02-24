import { CodeBox } from ".";
import { apiResponse } from "@/api-example-code";

export default function ExampleBox({
  fetchcode,
  cssState,
}: {
  fetchcode: string;
  cssState: boolean;
}) {
  return (
    <div className="border shadow-md rounded-xl">
      <div className="h-12 border-b flex items-center pl-6">
        <p className="text-lg font-medium">App.js</p>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className=" max-h-[30rem] overflow-auto text-sm lg:text-lg">
          <CodeBox cssState={cssState} threeDot={false}>
            {fetchcode}
          </CodeBox>
        </div>
        <div className="max-h-[30rem] overflow-auto bg-slate-50 border-l text-sm lg:text-lg">
          <CodeBox cssState={cssState} threeDot={false} showLineNumbers={true}>
            {apiResponse}
          </CodeBox>
        </div>
      </div>
    </div>
  );
}
