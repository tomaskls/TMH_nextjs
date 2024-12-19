"use client";
import { Button } from "@nextui-org/react";

interface AuditButtonProps {
  label: string;
  variant?: "bordered" | "light";
  size?: "sm" | "lg";
}

export function AuditButton({ label, variant = "bordered", size = "lg" }: AuditButtonProps) {
  return (
    <Button
      className="border-cyan-600 text-cyan-600 dark:border-cyan-400 dark:text-cyan-400"
      size={size}
      variant={variant}
    >
      {label}
    </Button>
  );
}