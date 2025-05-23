import React from 'react';
import { parseISO, format } from 'date-fns';

type DateStringType = {
  dateString: string;
  time?: boolean;
};

export function DateFormatter({
  dateString,
  time,
}: DateStringType): React.ReactElement {
  const date = parseISO(dateString);
  return time ? (
    <time dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')} at {format(date, ' h:mm a')}
    </time>
  ) : (
    <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
  );
}

type DateStringsType = {
  dateStrings: string[];
};

export const DateRangeFormatter = ({ dateStrings }: DateStringsType) => {
  if (dateStrings.length === 0) return null;

  // Parse and sort the dates
  const dates = dateStrings
    .map((dateString) => parseISO(dateString))
    .sort((a, b) => a.getTime() - b.getTime());

  // Format the start and end dates
  const startDate = format(dates[0], 'LLLL d');
  const endDate = format(dates[dates.length - 1], 'd');

  // If the range is within the same month, return "April 26-28"
  // Otherwise, return "April 26 - May 1"
  const formattedRange =
    format(dates[0], 'LLLL') === format(dates[dates.length - 1], 'LLLL')
      ? `${startDate}-${endDate}`
      : `${startDate} - ${format(dates[dates.length - 1], 'LLLL d')}`;

  return <span>{formattedRange}</span>;
};
