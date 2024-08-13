'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/epifaniofrancisco-cv.pdf', '_blank')}>
      Baixar CV
    </Button>
  );
};

export default DownloadCV;
