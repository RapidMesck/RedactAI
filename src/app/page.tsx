import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/logo.webp"
        alt="RedactAI"
        width={200}
        height={200}
      />
      <div>Hello World</div>
    </main>
  );
}
