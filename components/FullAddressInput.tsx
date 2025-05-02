import { useEffect } from 'react';
import { set, StringInputProps, useFormValue } from 'sanity';

export default function FullAddressInput({
  value,
  onChange,
}: StringInputProps) {
  const street = useFormValue(['location', 'streetAddress']) as string;
  const city = useFormValue(['location', 'city']) as string;
  const state = useFormValue(['location', 'state']) as string;
  const zip = useFormValue(['location', 'zip']) as string;

  useEffect(() => {
    console.log('Address fields:', { street, city, state, zip });
    if (street && city && state && zip) {
      const formatted = `${street}, ${city}, ${state} ${zip}`;
      if (formatted !== value) {
        onChange(set(formatted));
      }
    } else {
      console.log('Missing address fields:', { street, city, state, zip });
    }
  }, [street, city, state, zip, value, onChange]);

  return (
    <div>
      <p className='mb-2'>{value || 'Waiting for address fields...'}</p>
    </div>
  );
}
