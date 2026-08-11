import UserLists from "@/app/features/userLists/UserLists";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <UserLists />
      </main>
    </div>
  );
}
