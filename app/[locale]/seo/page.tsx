// components/SEOServicesCards/index.tsx
"use client"
import React from "react"
import { memo, useCallback, useMemo } from "react"
import { useTranslations } from 'next-intl'
import { seoServices } from '@/components/constants/seoServices'
import ServiceCard from '@/components/ServiceCard'

const SEOServicesCards = () => {
  const t = useTranslations('SEOServices')
  
  const handleAuditRequest = useCallback(() => {
    console.log("Audit requested")
  }, [])

  const translations = useMemo(() => 
    seoServices.map(service => ({
      title: t(service.titleKey),
      items: service.servicesKeys.map(key => t(key)),
      buttonText: t('common.auditButton')  // Pridėjome buttonText kiekvienam service
    }))
  , [t])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {translations.map((serviceTranslations, index) => (
        <ServiceCard 
          key={index}
          translations={serviceTranslations}
          onAuditRequest={handleAuditRequest}
        />
      ))}
    </div>
  )
}

export default memo(SEOServicesCards)