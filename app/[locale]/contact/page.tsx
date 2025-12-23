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

  const contactInfo = {
    email: 'info@tmh.lt',
    phone: '+37060574525',
    facebook: 'https://facebook.com/tomorrowsmediahouse',
    instagram: 'https://instagram.com/tomorrowsmediahouse',
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <div className="max-w-md mx-auto p-2">
      <Card>
        <CardHeader className="flex flex-col gap-3">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-xl">{t('title')}</h1>
          </div>
          <div className="flex flex-col space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <span className="font-medium">{t('phone')}:</span>
              <Link
                showAnchorIcon
                as="a"
                color="primary"
                href={`tel:${contactInfo.phone}`}
              >
                {contactInfo.phone}
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium">{t('email')}:</span>
              <Link
                showAnchorIcon
                as="a"
                color="primary"
                href={`mailto:${contactInfo.email}`}
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
              className="flex-1"
              color="primary"
              href={`tel:${contactInfo.phone}`}
              variant="flat"
            >
              {t('callButton')}
            </Button>
            <Button
              className="flex-1"
              color="success"
              variant="flat"
              onPress={() =>
                handleExternalLink(
                  `https://wa.me/${contactInfo.phone.replace(/\+/g, '')}`
                )
              }
            >
              WhatsApp
            </Button>
            <Button
              className="flex-1"
              color="primary"
              variant="flat"
              onPress={() => handleExternalLink(contactInfo.facebook)}
            >
              Facebook
            </Button>
            <Button
              className="flex-1"
              color="secondary"
              variant="flat"
              onPress={() => handleExternalLink(contactInfo.instagram)}
            >
              Instagram
            </Button>
          </div>

          <Divider className="my-4" />

          <div className="text-center text-sm text-gray-500 mb-4">
            {t('or')}
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input name="_honey" style={{ display: 'none' }} type="text" />
            <input name="_captcha" type="hidden" value="false" />

            <Input
              isRequired
              label={t('name')}
              name="name"
              placeholder={t('placeholders.name')}
              variant="bordered"
            />

            <Input
              isRequired
              label={t('email')}
              name="email"
              placeholder={t('placeholders.email')}
              type="email"
              variant="bordered"
            />

            <Input
              description={t('optional')}
              label={t('phone')}
              name="phone"
              placeholder={t('placeholders.phone')}
              type="tel"
              variant="bordered"
            />

            <Textarea
              isRequired
              label={t('message')}
              minRows={4}
              name="message"
              placeholder={t('placeholders.message')}
              variant="bordered"
            />

            {isError && <div className="text-danger">{t('errorMessage')}</div>}

            <Button
              className="w-full"
              color="primary"
              isLoading={isSubmitting}
              type="submit"
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
