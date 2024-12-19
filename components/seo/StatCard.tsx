"use client";
import { Card, CardBody } from "@nextui-org/react";

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <Card className="p-6 dark:bg-slate-900">
      <CardBody className="text-center">
        <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">{value}</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{label}</p>
      </CardBody>
    </Card>
  );
}