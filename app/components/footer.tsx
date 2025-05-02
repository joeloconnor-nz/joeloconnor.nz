import { BlueskyLogo } from './icons/bluesky-logo'
import { GitHubLogo } from './icons/github-logo'
import { LinkedInLogo } from './icons/linkedin-logo'
import { TwitterLogo } from './icons/twitter-logo'

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
            className="transition-colors hover:text-black dark:hover:text-white"
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
            href="https://bsky.app/profile/joeloconnor.nz"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my Bluesky profile"
            className="transition-colors hover:text-[#1185FE]"
          >
            <BlueskyLogo />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/joeloconnor_nz"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my Twitter profile"
            className="transition-colors hover:text-[#55acee]"
          >
            <TwitterLogo />
          </a>
        </li>
      </ul>
    </footer>
  )
}
