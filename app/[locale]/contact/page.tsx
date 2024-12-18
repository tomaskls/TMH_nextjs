'use client';
import React from 'react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Link,
  Divider,
} from '@nextui-org/react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isError, setIsError] = useState(false);

  const t = useTranslations('contact');

  // Pakeiskite į savo kontaktinę informaciją
  const contactInfo = {
    email: 'your.email@example.com',
    phone: '+37060000000',
    facebook: 'https://facebook.com/your.page',
    instagram: 'https://instagram.com/your.profile',
  };

  const formAction = `https://formsubmit.co/${contactInfo.email}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        onOpen();
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error();
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Card>
        <CardHeader className="flex flex-col gap-3">
          <div className="flex justify-between items-center w-full">
            <p className="text-xl">{t('title')}</p>
          </div>
          <div className="flex flex-col space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <span className="font-medium">{t('phone')}:</span>
              <Link
                as="a"
                href={`tel:${contactInfo.phone}`}
                showAnchorIcon
                color="primary"
              >
                {contactInfo.phone}
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium">{t('email')}:</span>
              <Link
                as="a"
                href={`mailto:${contactInfo.email}`}
                showAnchorIcon
                color="primary"
              >
                {contactInfo.email}
              </Link>
            </p>
          </div>
        </CardHeader>

        <Divider />

        <CardBody>
          <div className="grid grid-cols-2 gap-2 mb-6">
            <Button
              as="a"
              href={`tel:${contactInfo.phone}`}
              color="primary"
              variant="flat"
              className="flex-1"
            >
              {t('callButton')}
            </Button>
            <Button
              onPress={() =>
                handleExternalLink(
                  `https://wa.me/${contactInfo.phone.replace(/\+/g, '')}`
                )
              }
              color="success"
              variant="flat"
              className="flex-1"
            >
              WhatsApp
            </Button>
            <Button
              onPress={() => handleExternalLink(contactInfo.facebook)}
              color="primary"
              variant="flat"
              className="flex-1"
            >
              Facebook
            </Button>
            <Button
              onPress={() => handleExternalLink(contactInfo.instagram)}
              color="secondary"
              variant="flat"
              className="flex-1"
            >
              Instagram
            </Button>
          </div>

          <Divider className="my-4" />

          <div className="text-center text-sm text-gray-500 mb-4">
            {t('or')}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />

            <Input
              label={t('name')}
              name="name"
              variant="bordered"
              isRequired
              placeholder={t('placeholders.name')}
            />

            <Input
              label={t('email')}
              name="email"
              type="email"
              variant="bordered"
              isRequired
              placeholder={t('placeholders.email')}
            />

            <Input
              label={t('phone')}
              name="phone"
              type="tel"
              variant="bordered"
              placeholder={t('placeholders.phone')}
              description={t('optional')}
            />

            <Textarea
              label={t('message')}
              name="message"
              variant="bordered"
              isRequired
              placeholder={t('placeholders.message')}
              minRows={4}
            />

            {isError && <div className="text-danger">{t('errorMessage')}</div>}

            <Button
              type="submit"
              color="primary"
              isLoading={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? t('sending') : t('sendButton')}
            </Button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-500">
            {t('workHours')}
          </div>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{t('successTitle')}</ModalHeader>
              <ModalBody>{t('successMessage')}</ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  {t('closeButton')}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
