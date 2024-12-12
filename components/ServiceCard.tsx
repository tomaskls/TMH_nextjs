"use client"
import React from "react"
import { memo } from "react"
import { Card, CardBody, CardFooter, Button } from "@nextui-org/react"
import { cardBaseStyles, cardHoverStyles, cardBeforeStyles, buttonStyles } from '../components/styles/seoCards'

interface ServiceCardProps {
 translations: {
   title: string;
   items: string[];
   buttonText: string;
 };
 onAuditRequest: () => void;
}

const ServiceCard = memo(function ServiceCard({ translations, onAuditRequest }: ServiceCardProps) {
 return (
   <Card className={`group ${cardBaseStyles} ${cardHoverStyles} ${cardBeforeStyles}`}>
     <CardBody className="relative z-10">
       <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-200 to-blue-200 dark:from-purple-300 dark:to-blue-300 bg-clip-text text-transparent">
         {translations.title}
       </h3>
       <ul className="list-disc pl-4 space-y-2">
         {translations.items.map((text, i) => (
           <li key={i} className="text-sm text-slate-200 dark:text-slate-300 transition-colors duration-200">
             {text}
           </li>
         ))}
       </ul>
     </CardBody>
     <CardFooter className="relative z-10">
       <Button 
         className={buttonStyles}
         onPress={onAuditRequest}
       >
         {translations.buttonText}
       </Button>
     </CardFooter>
   </Card>
 );
});

export default ServiceCard;