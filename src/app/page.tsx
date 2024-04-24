import Link from "next/link";
import { FC } from "react";

type Props = {};

const Page: FC<Props> = (props) => {
  return (
    <>
      <div className="p-5">
        <div className="p-5 bg-blue-100">
          <header className="p-5 bg-red-100 flex flex-col space-y-2">
            <h1 className="text-lg font-bold">ホーム</h1>
          </header>
          <main className="p-5 bg-green-100 flex flex-col space-y-5">
            <div className="p-5 bg-yellow-100 flex flex-col space-y-5">
              <div className="flex flex-row">
                <h2 className="text-lg py-2 px-3 font-bold">
                  Dynamic Route のページ
                </h2>
              </div>
              <div className="flex flex-col space-y-3 bg-blue-100 p-5">
                <div className="flex flex-row">
                  <h2 className="text-sm text-blue-800 py-2 px-3 rounded-md underline underline-offset-2 hover:text-blue-600">
                    <Link href={"/user/12345"}>
                      http://localhost:3000/user/12345
                    </Link>
                  </h2>
                </div>
              </div>
              <div className="flex flex-col space-y-3 bg-blue-100 p-5">
                <div className="flex flex-row">
                  <h2 className="text-sm text-blue-800 py-2 px-3 rounded-md underline underline-offset-2 hover:text-blue-600">
                    <Link href={"/student/grade9/12345"}>
                      http://localhost:3000/student/grade9/12345
                    </Link>
                  </h2>
                </div>
              </div>
              <div className="flex flex-col space-y-3 bg-blue-100 p-5">
                <div className="flex flex-row">
                  <h2 className="text-sm text-blue-800 py-2 px-3 rounded-md underline underline-offset-2 hover:text-blue-600">
                    <Link href={"/product/dvd/anime"}>
                      http://localhost:3000/product/dvd/anime
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-5 bg-yellow-100 flex flex-col space-y-5">
              <div className="flex flex-row">
                <h2 className="text-lg py-2 px-3 font-bold">
                  引数を含むページ
                </h2>
              </div>
              <div className="flex flex-col space-y-3 bg-blue-100 p-5">
                <div className="flex flex-row">
                  <h2 className="text-sm text-blue-800 py-2 px-3 rounded-md underline underline-offset-2 hover:text-blue-600">
                    <Link href={"/store?a=1"}>
                      http://localhost:3000/store?a=1
                    </Link>
                  </h2>
                </div>
              </div>
              <div className="flex flex-col space-y-3 bg-blue-100 p-5">
                <div className="flex flex-row">
                  <h2 className="text-sm text-blue-800 py-2 px-3 rounded-md underline underline-offset-2 hover:text-blue-600">
                    <Link href={"/store?a=1&b=2"}>
                      http://localhost:3000/store?a=1&b=2
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Page;
