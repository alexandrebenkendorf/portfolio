import { useTranslation } from 'react-i18next';
import { IoDownloadOutline, IoLogoGithub, IoLogoLinkedin, IoMailOutline } from 'react-icons/io5';

import { Button } from '@/shared/ui';
import { useDevice } from '@/shared/hooks';

const ENCODED_EMAIL = 'YWxleCtwb3J0Zm9saW9AYWxleGFuZHJlYmVua2VuZG9yZi5jb20=';
const RESUME_PDF_PATH = encodeURI('/CV Alexandre Benkendorf - 2026 - en.pdf');

export function ContactLinks() {
  const { t } = useTranslation();
  const { isMobile } = useDevice();

  const handleMailClick = () => {
    window.location.href = `mailto:${atob(ENCODED_EMAIL)}`;
  };

  return (
    <div className="flex items-center gap-1">
      <Button
        size={isMobile ? undefined : 'small'}
        icon={IoMailOutline}
        aria-label={t('sidebar.mailMe')}
        tooltip={t('sidebar.mailMe')}
        onClick={handleMailClick}
      />
      <Button
        size={isMobile ? undefined : 'small'}
        icon={IoLogoLinkedin}
        aria-label={t('sidebar.linkedinAria')}
        tooltip={t('sidebar.linkedinAria')}
        href="https://www.linkedin.com/in/alexandrebenkendorf/"
        target="_blank"
        rel="noopener noreferrer"
      />
      <Button
        size={isMobile ? undefined : 'small'}
        icon={IoLogoGithub}
        aria-label={t('sidebar.githubAria')}
        tooltip={t('sidebar.githubAria')}
        href="https://github.com/alexandrebenkendorf/"
        target="_blank"
        rel="noopener noreferrer"
      />
      <Button
        size={isMobile ? undefined : 'small'}
        variant="primary"
        icon={IoDownloadOutline}
        href={RESUME_PDF_PATH}
        download="Alexandre Benkendorf - CV.pdf"
        className="ml-1"
      >
        {t('sidebar.resume')}
      </Button>
    </div>
  );
}
