import {
  ClerkLoaded,
  ClerkLoading,
  SignIn,
} from "@clerk/nextjs/app-beta/client";

export default function Page() {
  return (
    <div>
      <div className="flex min-h-screen flex-col-reverse items-center justify-center gap-4 lg:flex-row-reverse">
        <ClerkLoaded>
          <SignIn />
        </ClerkLoaded>
        <ClerkLoading>
          <div
            role="status"
            className="flex h-[400px] w-full max-w-sm animate-pulse items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700"
          >
            <span className="invisible">Loading...</span>
            <span className="sr-only">Loading...</span>
          </div>
        </ClerkLoading>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="max-w-md py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
}
