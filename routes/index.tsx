import BasePageLayout from "@components/BasePageLayout.tsx";
import Button from "@components/Button.tsx";

export default function Home() {
  return (
    <>
      <BasePageLayout
        title="Tapris"
        description="Lightweight discord bot written in Typescript (using deno) by tapnisu!"
      >
        <div class="flex flex-row flex-wrap justify-center m-4">
          <img
            src="/avatar.webp"
            alt="Tapris's avatar"
            class="w-72 rounded-full"
          />
          <div class="flex flex-col justify-center items-center m-4">
            <h1 class="text-3xl">Tapris</h1>
            <h2>Discord bot, written in deno.</h2>

            <a href="/invite">
              <Button>Invite bot</Button>
            </a>
          </div>
        </div>
      </BasePageLayout>
    </>
  );
}
