import { sanityFetch } from '@/sanity/lib/live';
import { contactInfoQuery } from '@/sanity/lib/queries';

export async function getContactInfo() {
  const { data: contactInfo } = await sanityFetch({
    query: contactInfoQuery,
  });
  return {
    phoneNumberSanitized: contactInfo?.phoneNumber?.replace(/\D/g, ''),
    phoneNumber: contactInfo?.phoneNumber || '',
    emailAddress: contactInfo?.emailAddress || '',
    addressLine1: contactInfo?.address?.addressLine1 || '',
    addressLine2: contactInfo?.address?.addressLine2 || '',
  };
}
