"use client";
import type { SEOServiceItem } from '@/types/seo';

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

import { AuditButton } from './AuditButton';

import { ICON_MAP } from '@/components/constants/seoIcons';


interface ServiceCardProps {
  service: SEOServiceItem;
  auditButtonText: string;
}

export function ServiceCard({ service, auditButtonText }: ServiceCardProps) {
  const ServiceIcon = ICON_MAP[service.icon as keyof typeof ICON_MAP];
  
  return (
    <Card className="hover:shadow-lg transition-shadow dark:bg-slate-800">
      <CardHeader className="flex justify-between items-start gap-3">
        <div className="flex gap-3">
          <div className="text-cyan-600 dark:text-cyan-400">
            <ServiceIcon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xl font-semibold dark:text-white">{service.title}</p>
            <p className="text-small text-default-500 dark:text-gray-400">{service.description}</p>
          </div>
        </div>
        <AuditButton label={auditButtonText} size="sm" variant="light" />
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="space-y-4">
          {service.items?.map((item, idx) => {
            const ItemIcon = ICON_MAP[item.icon as keyof typeof ICON_MAP];

            return (
              <div key={idx} className="flex items-center gap-3">
                <div className="text-cyan-600 dark:text-cyan-400">
                  <ItemIcon size={20} />
                </div>
                <span className="dark:text-gray-300">{item.title}</span>
              </div>
            );
          })}
        </div>
      </CardBody>
    </Card>
  );
}