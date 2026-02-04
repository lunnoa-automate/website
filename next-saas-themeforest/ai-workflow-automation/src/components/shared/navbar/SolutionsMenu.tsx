'use client';
import { cn } from '@/utils/cn';
import Link from 'next/link';

// Industry icons as inline SVGs for better customization
const PEIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    className={cn('stroke-secondary dark:stroke-accent size-5', className)}>
    <path
      d="M17.5 6.66669V17.5H2.5V6.66669"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.1667 2.5H0.833374V6.66667H19.1667V2.5Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8.33337 10H11.6667" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WealthIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    className={cn('stroke-secondary dark:stroke-accent size-5', className)}>
    <path
      d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6024 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10 5V15" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M12.5 7.5H8.75C8.41848 7.5 8.10054 7.6317 7.86612 7.86612C7.6317 8.10054 7.5 8.41848 7.5 8.75C7.5 9.08152 7.6317 9.39946 7.86612 9.63388C8.10054 9.8683 8.41848 10 8.75 10H11.25C11.5815 10 11.8995 10.1317 12.1339 10.3661C12.3683 10.6005 12.5 10.9185 12.5 11.25C12.5 11.5815 12.3683 11.8995 12.1339 12.1339C11.8995 12.3683 11.5815 12.5 11.25 12.5H7.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RealEstateIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    className={cn('stroke-secondary dark:stroke-accent size-5', className)}>
    <path
      d="M2.5 17.5H17.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 17.5V6.66669L10 2.5L17.5 6.66669V17.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 17.5V11.6667H12.5V17.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BankIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    className={cn('stroke-secondary dark:stroke-accent size-5', className)}>
    <path
      d="M1.66669 17.5H18.3334"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 7.5H17.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 2.5L17.5 7.5H2.5L10 2.5Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M4.16669 7.5V14.1667" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.33331 7.5V14.1667" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.6667 7.5V14.1667" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.8333 7.5V14.1667" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M1.66669 14.1667H18.3334"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Use case icons
const MNPIIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    className={cn('stroke-secondary dark:stroke-accent size-5', className)}>
    <path
      d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6024 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10 6.66669V10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 13.3333H10.0083" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CapitalCallIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    className={cn('stroke-secondary dark:stroke-accent size-5', className)}>
    <path
      d="M16.6667 3.33331H3.33335C2.41288 3.33331 1.66669 4.0795 1.66669 4.99998V15C1.66669 15.9205 2.41288 16.6666 3.33335 16.6666H16.6667C17.5872 16.6666 18.3334 15.9205 18.3334 15V4.99998C18.3334 4.0795 17.5872 3.33331 16.6667 3.33331Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M1.66669 8.33331H18.3334" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const KYCIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    className={cn('stroke-secondary dark:stroke-accent size-5', className)}>
    <path
      d="M14.1667 17.5V15.8333C14.1667 14.9493 13.8155 14.1014 13.1904 13.4763C12.5652 12.8512 11.7174 12.5 10.8334 12.5H4.16669C3.28263 12.5 2.43479 12.8512 1.80966 13.4763C1.18454 14.1014 0.833374 14.9493 0.833374 15.8333V17.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.49998 9.16667C9.34093 9.16667 10.8333 7.67428 10.8333 5.83333C10.8333 3.99238 9.34093 2.5 7.49998 2.5C5.65903 2.5 4.16665 3.99238 4.16665 5.83333C4.16665 7.67428 5.65903 9.16667 7.49998 9.16667Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M15.8333 6.66669L19.1666 10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.1666 6.66669L15.8333 10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RFPIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    className={cn('stroke-secondary dark:stroke-accent size-5', className)}>
    <path
      d="M11.6667 1.66669H5.00002C4.55799 1.66669 4.13407 1.84228 3.82151 2.15484C3.50895 2.4674 3.33335 2.89133 3.33335 3.33335V16.6667C3.33335 17.1087 3.50895 17.5326 3.82151 17.8452C4.13407 18.1578 4.55799 18.3334 5.00002 18.3334H15C15.442 18.3334 15.866 18.1578 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6667V6.66669L11.6667 1.66669Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M11.6667 1.66669V6.66669H16.6667" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.3333 10.8333H6.66669" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.3333 14.1667H6.66669" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.33335 7.5H6.66669" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DDIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    className={cn('stroke-secondary dark:stroke-accent size-5', className)}>
    <path
      d="M8.33335 2.5H2.50002C2.03979 2.5 1.66669 2.8731 1.66669 3.33333V16.6667C1.66669 17.1269 2.03979 17.5 2.50002 17.5H17.5C17.9603 17.5 18.3334 17.1269 18.3334 16.6667V6.66667C18.3334 6.20643 17.9603 5.83333 17.5 5.83333H10L8.33335 2.5Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type IndustryLink = {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
};

type UseCaseLink = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const industryLinks: IndustryLink[] = [
  {
    title: 'Private Equity',
    description: 'MNPI screening, capital calls, due diligence',
    href: '/solutions/private-equity',
    icon: PEIcon,
    badge: 'Primary',
  },
  {
    title: 'Wealth Management',
    description: 'KYC/AML, client onboarding, reporting',
    href: '/solutions/wealth-management',
    icon: WealthIcon,
  },
  {
    title: 'Real Estate',
    description: 'Lease abstraction, property document processing',
    href: '/solutions/real-estate',
    icon: RealEstateIcon,
  },
  {
    title: 'Banking',
    description: 'Transaction monitoring, regulatory compliance',
    href: '/solutions/banking',
    icon: BankIcon,
  },
];

const useCaseLinks: UseCaseLink[] = [
  {
    title: 'MNPI Screening',
    href: '/use-cases/mnpi-screening',
    icon: MNPIIcon,
  },
  {
    title: 'Capital Calls',
    href: '/use-cases/capital-calls',
    icon: CapitalCallIcon,
  },
  {
    title: 'KYC/AML Automation',
    href: '/use-cases/kyc-aml',
    icon: KYCIcon,
  },
  {
    title: 'RFP Automation',
    href: '/use-cases/rfp-automation',
    icon: RFPIcon,
  },
  {
    title: 'Due Diligence',
    href: '/use-cases/due-diligence',
    icon: DDIcon,
  },
];

const SolutionsMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  const handleClose = () => setMenuDropdownId(null);

  return (
    <div>
      <div
        className={cn(
          '0.3 ease ease fixed top-full left-1/2 z-40 h-3 w-[700px] -translate-x-1/2 bg-transparent transition-opacity duration-300',
          menuDropdownId === 'solutions-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="solutions-mega-menu"
        className={cn(
          'dark:bg-background-6 border-stroke-1 ease fixed top-full left-1/2 z-50 mt-2 hidden w-full -translate-x-1/2 items-start gap-y-6 rounded-[20px] border bg-white p-6 transition-all duration-300 md:w-[700px] md:gap-x-6 xl:flex dark:border-white/10',
          menuDropdownId === 'solutions-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <div className="flex-1 space-y-4">
          <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-medium uppercase tracking-wide">
            By Industry
          </p>
          <ul className="space-y-1">
            {industryLinks.map((link) => (
              <li key={link.title}>
                <Link
                  onClick={handleClose}
                  href={link.href}
                  className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-background-2 dark:hover:bg-background-5">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background-2 dark:bg-background-5 group-hover:bg-primary-500/10">
                    <link.icon className="size-5" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-secondary dark:text-accent font-medium">{link.title}</p>
                      {link.badge && (
                        <span className="rounded-full bg-primary-500/10 px-2 py-0.5 text-xs font-medium text-primary-500">
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-tagline-2 text-secondary/60 dark:text-accent/60">{link.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-px bg-stroke-1 dark:bg-stroke-6 self-stretch" />
        <div className="flex-1 space-y-4">
          <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-medium uppercase tracking-wide">
            By Use Case
          </p>
          <ul className="space-y-1">
            {useCaseLinks.map((link) => (
              <li key={link.title}>
                <Link
                  onClick={handleClose}
                  href={link.href}
                  className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-background-2 dark:hover:bg-background-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-background-2 dark:bg-background-5 group-hover:bg-primary-500/10">
                    <link.icon className="size-4" />
                  </span>
                  <p className="text-secondary dark:text-accent font-medium">{link.title}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            onClick={handleClose}
            href="/use-case"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors">
            View all use cases
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

SolutionsMenu.displayName = 'SolutionsMenu';
export default SolutionsMenu;
