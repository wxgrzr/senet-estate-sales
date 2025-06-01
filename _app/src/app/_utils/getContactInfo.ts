import { client } from '@/sanity/lib/client';
import { contactInfoQuery } from '@/sanity/lib/queries';

type RenderedContactInfo = {
  phoneNumberSanitized?: string;
  phoneNumber?: string;
  emailAddress?: string;
  addressLine1?: string;
  addressLine2?: string;
  facebookUrl?: string;
};

export async function getContactInfo(): Promise<RenderedContactInfo> {
  const contactInfo = await client.fetch(contactInfoQuery);
  return {
    phoneNumberSanitized: contactInfo?.phoneNumber?.replace(/\D/g, '') || '',
    phoneNumber: contactInfo?.phoneNumber || '',
    emailAddress: contactInfo?.emailAddress || '',
    addressLine1: contactInfo?.address?.addressLine1 || '',
    addressLine2: contactInfo?.address?.addressLine2 || '',
    facebookUrl: contactInfo?.facebookUrl || '',
  };
}
