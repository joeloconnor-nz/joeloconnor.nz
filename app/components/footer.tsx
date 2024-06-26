import { GitHubLogo } from './icons/github-logo'
import { LinkedInLogo } from './icons/linkedin-logo'
import { TelegramLogo } from './icons/telegram-logo'

export function Footer() {
  return (
    <footer className="flex flex-row justify-center px-6 py-8 text-stone-700 dark:text-stone-400">
      <ul className="flex gap-4 md:gap-6">
        <li>
          <a
            href="https://github.com/joeloconnor-nz"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my GitHub profile"
            className="transition-colors hover:text-stone-500"
          >
            <GitHubLogo />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/joel-oconnor"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my LinkedIn profile"
            className="transition-colors hover:text-[#0A66C2]"
          >
            <LinkedInLogo />
          </a>
        </li>
        <li>
          <a
            href="https://t.me/nztek"
            target="_blank"
            rel="noopener noreferrer"
            title="Message me on Telegram"
            className="transition-colors hover:text-[#229ED9]"
          >
            <TelegramLogo />
          </a>
        </li>
      </ul>
    </footer>
  )
}
