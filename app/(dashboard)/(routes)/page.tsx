import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <h1 className="text-3xl">
      LMS
      <UserButton />
    </h1>
  );
}
