import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

async function SettingPage() {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">signout</Button>
      </form>
    </div>
  );
}

export default SettingPage;
