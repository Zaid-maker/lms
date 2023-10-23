import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <h1 className="text-3xl">
      Learning Management System
      <UserButton afterSignOutUrl="/" />
    </h1>
  );
}
