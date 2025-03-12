"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

export function WalletComponents() {
  const router = useRouter();

  const { status } = useAccount();

  useEffect(() => {
    if (status === "connected") {
      //   router.push("../dashboard/employer");
    } else {
      router.push("/");
    }
  }, [status, router]);

  return (
    <div className="flex justify-end">
      <appkit-button />
    </div>
  );
}
