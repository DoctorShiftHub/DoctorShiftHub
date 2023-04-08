import {
  ClerkLoaded,
  ClerkLoading,
  SignIn,
} from "@clerk/nextjs/app-beta/client";

export default async function Page() {
  return (
    <div>
      <ClerkLoading>
        <div>Loading...</div>
      </ClerkLoading>
      <ClerkLoaded>
        <div className="flex min-h-screen flex-col-reverse items-center justify-center gap-4 lg:flex-row-reverse">
          <SignIn></SignIn>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="max-w-md py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </ClerkLoaded>
    </div>
  );
}
